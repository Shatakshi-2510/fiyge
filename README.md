# Sentiment Analysis Application

## Project Description

This is a full-stack Sentiment Analysis application for FIYGE Research that predicts the sentiment that is (Positive, Neutral, or Negative) of a given text. The application uses a React frontend to get user input and Node.js backend with Huggingface Transformers to display results.

## Installation and Setup Steps

### Clone the Repository

git clone https://github.com/Shatakshi-2510/fiyge.git


### Set Up the Backend

cd backend

npm install

node server.js

### Set Up the Frontend

cd frontend

npm install

npm start

### Access the Application

Open your browser and navigate to http://localhost:3000

## API Endpoint Details

### POST /analyze

URL: http://localhost:5003/api/analyze/

Method: POST

Request Body: { text }

Response: {

"sentiment": "POSITIVE",

"confidence": 0.999
}

## Run the Application

Start the Backend: node server.js

Start the Frontend: npm start

## Architecture

/frontend

├── backend

├── src/

├ ├── API

│ ├── App.js

│ ├── Assets/

│ │ └── css

├── package.json

└── README.md

FRONTEND (React App) -> BACKEND (Node.js with Express)
