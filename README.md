# 🧮 Math Chatbot

A simple and interactive math chatbot that can solve basic arithmetic problems through a web interface.

## Features

- **Basic Math Operations**: Addition, subtraction, multiplication, division
- **Advanced Operations**: Powers, square roots, percentages
- **Natural Language**: Understands words like "plus", "minus", "times", "divided by"
- **Interactive Chat Interface**: Beautiful, responsive web UI
- **Real-time Calculations**: Instant results as you type

## How to Use

1. **Start the Server**:
   ```bash
   npm start
   ```

2. **Open Your Browser**:
   Go to `http://localhost:3000`

3. **Ask Math Questions**:
   - "What is 5 + 3?"
   - "Calculate 10 * 7"
   - "What's 15 divided by 3?"
   - "Solve 2^3"
   - "What is sqrt(16)?"

## Supported Operations

- **Addition**: `5 + 3`, `5 plus 3`
- **Subtraction**: `10 - 4`, `10 minus 4`
- **Multiplication**: `6 * 7`, `6 times 7`
- **Division**: `20 / 4`, `20 divided by 4`
- **Powers**: `2^3`, `2 to the power of 3`
- **Square Root**: `sqrt(16)`
- **Complex Expressions**: `(5 + 3) * 2`

## Project Structure

```
math_chatbot/
├── server.js          # Express.js backend server
├── package.json       # Project dependencies
├── public/           # Frontend files
│   ├── index.html    # Main HTML page
│   ├── style.css     # Styling
│   └── script.js     # Frontend JavaScript
└── README.md         # This file
```

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Modern CSS with gradients and animations

## Installation

1. Make sure you have Node.js installed
2. Run `npm install` to install dependencies
3. Run `npm start` to start the server
4. Open `http://localhost:3000` in your browser

## Development

To run in development mode with auto-restart:
```bash
npm run dev
```

## Examples

Try these example calculations:
- `2 + 2`
- `10 * 5`
- `100 / 4`
- `3^2`
- `sqrt(16)`
- `(5 + 3) * 2 - 1`

Enjoy your math chatbot! 🎉
