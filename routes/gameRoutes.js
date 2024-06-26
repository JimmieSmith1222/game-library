const express = require('express');
const router = express.Router();
const Game = require('../models/Game');
const gameController = require('../controllers/gameController');

router.get('/', gameController.getAllGames);

router.get('/:id', gameController.getGameById);

router.get('/new', gameController.displayNewGameForm);

router.post('/', gameController.createGame);

router.get('/:id/edit', gameController.displayEditGameForm);

router.put('/:id', gameController.updateGame);

router.delete('/:id', gameController.deleteGame);

module.exports = router;