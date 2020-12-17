const express = require('express');
const app = express();
const artistControllers = require('./controllers/artists')

app.use(express.json());

// app.get('/', (req, res) => {
//     res.status(200).send('Hello world!');
// });

app.post('/artists', artistControllers.create);

module.exports = app;