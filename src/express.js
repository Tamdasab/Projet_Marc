const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.post('/api/pharmacies', (req, res) => {
  const { address, pharmacies } = req.body;

  db.query('INSERT INTO pharmacies (address, data) VALUES (?, ?)', [address, JSON.stringify(pharmacies)], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.status(200).send('Pharmacies ajoutées à la base de données');
    }
  });
});

app.get('/api/pharmacies', (req, res) => {
  db.query('SELECT * FROM pharmacies ORDER BY id DESC LIMIT 1', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      const data = JSON.parse(result[0].data);
      res.status(200).send({ pharmacies: data });
    }
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Serveur démarré sur le port ${port}`));
