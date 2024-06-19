const express = require('express');
const app = express();
const port = 3000
const gameRoutes = require('./routes/gameRoutes');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/game-library');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/games', gameRoutes);

app.listen(port, () => {
  console.log('Server started on port:', port);
});