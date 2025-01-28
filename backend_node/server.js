const express = require("express")
const cors = require("cors")

const { pipeline } = require("@huggingface/transformers")

const app = express()
const port = 5003

// Middleware
app.use(cors())
app.use(express.json())

// Initialize Huggingface Sentiment Analysis Pipeline
let sentimentAnalyzer
(async () => {
	try {
		// loading sentiment modal
		sentimentAnalyzer = await pipeline("sentiment-analysis")
		console.log("Sentiment analysis model loaded successfully.")
	} catch (error) {
		console.error("Error loading sentiment analysis model:", error)
	}
})()

// Creating API POST Route
app.post("/api/analyze", async (req, res) => {
	// text from frontend form
	const { text } = req.body

	if (!text || text.trim() === "") { // empty textarea
		return res.status(400).json({ error: "Text is required for sentiment analysis." })
	}

	try {
		const results = await sentimentAnalyzer(text) // calling sentiment pipeline
		
		res.json({
			sentiment: results[0].sentiment,
			confidence: results[0].confidence
		})
	} catch (error) {
		console.error("Error analyzing sentiment:", error)
		res.status(500).json({ error: "Failed to analyze sentiment." })
	}
})

// Start Server
app.listen(port, () => {
	console.log(`Backend server is running at http://localhost:${port}`)
})
