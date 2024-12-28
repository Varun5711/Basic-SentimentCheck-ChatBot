# Sentiment Analysis Chatbot

A simple web-based chatbot that uses sentiment analysis to understand user emotions and respond accordingly. The chatbot analyzes the sentiment of user input and replies with either a positive, negative, or neutral response.

## Features

- **Sentiment Analysis**: The chatbot uses the TextBlob library to analyze the sentiment of the user's message.
- **Interactive Chat**: Users can interact with the chatbot in real time.
- **Real-time Feedback**: The chatbot provides real-time feedback based on the sentiment of the user's input.

## Technologies Used

- **Frontend**:
  - HTML, CSS, JavaScript
  - Fetch API for sending requests
  - DOM manipulation for dynamic user interaction
- **Backend**:
  - Flask (Python) for handling API requests
  - TextBlob for sentiment analysis
  - Flask-CORS for enabling cross-origin requests
- **Development**:
  - Python (Flask)
  - JavaScript (ES6+)

## Installation

### Prerequisites

1. **Python**: Ensure Python 3.x is installed on your machine.
2. **Node.js**: Ensure Node.js is installed (for front-end development).
3. **TextBlob**: Install the `textblob` library for sentiment analysis.

### Backend Setup (Python/Flask)

1. Clone this repository or download the backend folder.
2. Install required Python dependencies:

   ```bash
   pip install flask flask-cors textblob
