const Game = require('../models/Game');

exports.getAllGames = async (req, res) => {console.log('getAllGames function called');
  try {
    const games = await Game.find().exec();
    res.render('index', { games });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving games');
  }
};

exports.getGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id).exec();
    if (!game) {
      res.status(404).send('Game not found');
    } else {
      res.render('show', { game });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving game');
  }
};

exports.createGame = async (req, res) => {
  try {
    const game = new Game(req.body);
    await game.save();
    res.redirect('/games');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating game');
  }
};

exports.updateGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
    if (!game) {
      res.status(404).send('Game not found');
    } else {
      res.redirect('/games/' + req.params.id);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating game');
  }
};

exports.deleteGame = async (req, res) => {
  try {
    await Game.findByIdAndRemove(req.params.id).exec();
    res.redirect('/games');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting game');
  }
};