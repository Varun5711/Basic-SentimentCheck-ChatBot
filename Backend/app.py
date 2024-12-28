from flask import Flask, request, jsonify
from textblob import TextBlob
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/api/sentiment', methods=['POST'])
def analyze_sentiment():
    data = request.json
    user_input = data.get('text', '')

    if not user_input:
        return jsonify({'error': 'No input provided'}), 400

    analysis = TextBlob(user_input)
    sentiment = 'positive' if analysis.sentiment.polarity > 0 else \
                'negative' if analysis.sentiment.polarity < 0 else 'neutral'

    return jsonify({'sentiment': sentiment})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

