const express = require('express');
const router = express.Router();
const Game = require('../models/Game');
const gameController = require('../controllers/gameController');

router.get('/', gameController.getAllGames);

router.get('/:id', gameController.getGameById);

router.post('/', gameController.createGame);

router.post('/:id', gameController.updateGame);

router.put('/:id', gameController.updateGame);

router.delete('/:id', gameController.deleteGame);

router.get('/new', (req, res) => {
  res.render('new');
});

router.get('/:id/edit', async (req, res) => {
  try {
    const game = await Game.findById(req.params.id).exec();
    if (!game) {
      res.status(404).send('Game not found');
    } else {
      res.render('edit', { game });
    }
  } catch (err) {
    console.error('Error retrieving game:', err);
    res.status(500).send('Error retrieving game');
  }
});

module.exports = router;