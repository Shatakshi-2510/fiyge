import React from "react";

import logo from './logo.svg'

import './assests/css/App.css'
import './assests/css/Sentiment.css'

function App() {
	return (
		<React.Fragment>
			<div className="dashboard-container">
				<div className="dashboard-card">
					<h1 className="dashboard-title">Sentiment Analysis</h1>
					
					<form className="dashboard-form">
						<textarea className="dashboard-textarea" rows="6" placeholder="Enter text to analyze" value='value'></textarea>
						<button type="submit" className="dashboard-button"> Analyze Sentiment </button>
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
