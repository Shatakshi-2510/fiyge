import React, { useState } from "react"
import axios from "axios"

import './assests/css/App.css'
import './assests/css/Sentiment.css'

import DataEntry from './api/DataEntry'

function App() {
	const [text, setText] = useState("") // use state for textarea
	const [loading, setLoading] = useState(false) // loading effect when button will be clicked 
	const [apiResult, setApiResult] = useState(null) // API data

	const handleSubmit = async (e) => {
		e.preventDefault()
		setLoading(true) // loading starts
		try {
			// passing the inputted text to API URL (node server: 5003)
			const response = await axios.post("http://localhost:5003/api/analyze", { text })
			
			setApiResult(response.data) // getting data attribute value from axios fetching
			DataEntry(response.data)
		} catch (error) {
			console.error("Error in analyzing sentiment:", error)
		} finally {
			setLoading(false) // loading stops after process is completed
		}
	}

	return (
		<React.Fragment>
			<div className="dashboard-container">
				<div className="dashboard-card">
					<h1 className="dashboard-title">Sentiment Analysis</h1>
					
					<form onSubmit={handleSubmit} className="dashboard-form">
						<textarea className="dashboard-textarea" rows="6" placeholder="Enter text to analyze" 
									value={text}
									onChange={(e) => setText(e.target.value)}
						></textarea>
						<button type="submit" className="dashboard-button" disabled={loading || !text.trim()}> 
							{loading ? "Analyzing..." : "Analyze Sentiment"}
						</button>
					</form>
					
					{apiResult && (
						<div className="dashboard-result">
							<h2 className="result-title">Analysis Result</h2>
							<p className="result-item"><strong>Sentiment:</strong> {apiResult.sentiment}</p>
							<p className="result-item"><strong>Confidence Score:</strong> {apiResult.confidence.toFixed(2)}</p>
						</div>
					)}
					
					<footer className="dashboard-footer">
						Designed by <strong>Shatakshi Singh</strong> for FIYGE Research.
					</footer>
				</div>
			</div>
		</React.Fragment>
	)
}

export default App
