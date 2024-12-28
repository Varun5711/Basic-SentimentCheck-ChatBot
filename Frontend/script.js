const chatHistory = document.getElementById('chat-history');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const API_URL = 'http://127.0.0.1:5000/api/sentiment';

async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    appendMessage('You', message);
    userInput.value = '';

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: message }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch sentiment');
        }

        const data = await response.json();
        const sentiment = data.sentiment;

        let botMessage = '';
        if (sentiment === 'positive') {
            botMessage = "I'm glad you're feeling positive!";
        } else if (sentiment === 'negative') {
            botMessage = "I'm sorry you're feeling down. Let me know if I can help.";
        } else {
            botMessage = "I see. Thanks for sharing!";
        }
        appendMessage('Bot', botMessage);

    } catch (error) {
        appendMessage('Bot', 'Error: Unable to analyze sentiment.');
        console.error(error);
    }
}

function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `${sender}: ${message}`;
    chatHistory.appendChild(messageDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to the latest message
}

sendBtn.addEventListener('click', sendMessage);
