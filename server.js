const express = require('express');
const axios = require('axios');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());

const PORT = 5000;
const API_KEY = 'f2f3a2618332e6aa1cdf350f2072d27b';

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'AiShu@123',
    database: 'weatherdb'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected');
});

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    if (!city) return res.status(400).json({ error: 'City name required' });

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await axios.get(url);

        const temp = response.data.main.temp;

        // Save to MySQL
        db.query(
            'INSERT INTO weatherdata (city, temperature) VALUES (?, ?)',
            [city, temp],
            (err, result) => {
                if (err) console.error('DB Insert Error:', err);
                else console.log('Weather saved to DB');
            }
        );

        res.json(response.data);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error fetching weather' });
    }
});

// 🟢 Add this History Route
app.get('/history', (req, res) => {
    db.query('SELECT * FROM weatherdata ORDER BY fetched_at DESC LIMIT 10', (err, results) => {
        if (err) {
            console.error('DB Fetch Error:', err);
            return res.status(500).json({ error: 'Error fetching history' });
        }
        res.json(results);
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
