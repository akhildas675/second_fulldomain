//Express server with path


const express = require('express');
const axios = require('axios'); // ✅ use axios
const app = express();

const port = process.env.PORT || 3000;
const path = require('path');
app.set('views', path.join(__dirname, '../NodeJS/views')); // Adjust as needed


app.set('view engine', 'ejs');

app.get('/home', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const data = response.data; 
        res.render('index', { data });
    } catch (error) {
        console.log('Fetch data from the API failed:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
