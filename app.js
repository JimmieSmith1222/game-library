const express = require('express');
const app = express();
const port = 3000
const gameRoutes = require('./routes/gameRoutes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/games', gameRoutes);

app.listen(3000, () => {
  console.log('Server started on port:', port);
});