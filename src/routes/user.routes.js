const express = require('express');
const usersController = require('../controllers/users.controller');

const router = express.Router();

router.post('/register', usersController.createNewUser);

router.post('/login', usersController.loginUser);

router.post('/notes/:userId', usersController.createNewNote);

router.get('/notes/:userId', usersController.getAllNotesByUserId);

router.get('/playlists/:userId', usersController.getUserPlayListByUserId);

router.post('/playlists/:userId', usersController.addSongToUserPlayList);

router.delete('/playlists/:songId', usersController.deleteSongFromUserPlayList);

router.delete('/notes/:noteId', usersController.deleteNoteByNodeId);

module.exports = router;