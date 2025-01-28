import React, { useState } from "react"

import './assests/css/App.css'
import './assests/css/Sentiment.css'

function App() {
	const [text, setText] = useState("")
	
	const handleSubmit = async (e) => {
		e.preventDefault()
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
						<button type="submit" className="dashboard-button" disabled> Analyze Sentiment </button>
					</form>
					
					<footer className="dashboard-footer">
						Designed by <strong>Shatakshi Singh</strong> for FIYGE Research.
					</footer>
				</div>
			</div>
		</React.Fragment>
	)
}

export default App
