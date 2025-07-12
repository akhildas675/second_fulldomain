const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

app.post('/submit', (req, res) => {
  const data = req.body;
  console.log('Received data:', data);

  // Delay the response by 2 seconds
  setTimeout(() => {
    res.json({
      message: 'Data received after 2 seconds',
      data: data
    });
  }, 2000); // 2000 milliseconds = 2 seconds
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
