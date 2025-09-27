const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Math operations
const mathOperations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => b !== 0 ? a / b : 'Error: Division by zero',
  power: (a, b) => Math.pow(a, b),
  sqrt: (a) => Math.sqrt(a),
  percentage: (a, b) => (a * b) / 100
};

// Function to parse and solve math expressions
function solveMathExpression(expression) {
  try {
    // Clean the expression
    let cleanExpression = expression.replace(/[^0-9+\-*/.() ]/g, '');
    
    // Handle common math words
    cleanExpression = cleanExpression
      .replace(/plus/g, '+')
      .replace(/minus/g, '-')
      .replace(/times/g, '*')
      .replace(/multiplied by/g, '*')
      .replace(/divided by/g, '/')
      .replace(/to the power of/g, '**')
      .replace(/\^/g, '**');
    
    // Evaluate the expression safely
    const result = Function('"use strict"; return (' + cleanExpression + ')')();
    
    if (isNaN(result)) {
      return 'Invalid math expression';
    }
    
    return result;
  } catch (error) {
    return 'Error: Invalid expression';
  }
}

// API endpoint for math calculations
app.post('/api/calculate', (req, res) => {
  const { expression } = req.body;
  
  if (!expression) {
    return res.json({ 
      success: false, 
      message: 'Please provide a math expression' 
    });
  }
  
  const result = solveMathExpression(expression);
  
  res.json({
    success: true,
    expression: expression,
    result: result,
    timestamp: new Date().toISOString()
  });
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Math Chatbot server is running on http://localhost:${PORT}`);
});
