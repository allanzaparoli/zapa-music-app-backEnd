const userService = require('../services/users.service');

const createNewUser = async (req, res) => {
  const { body } = req;
  const { email, password } = body;
  const newUser = await userService.createNewUser({ username: email, password });
  return res.status(201).json({ id: newUser.id, email: newUser.username });
}

const loginUser = async (req, res) => {
  const { body } = req;
  const { email, password } = body;
  console.log(body);
  const user = await userService.loginUser({ username: email, password });
  return res.status(200).json({ id: user.id, email: user.username });
}

const createNewNote = async (req, res) => {
  const { noteDescription } = req.body;
  const { userId } = req.params;

  const newNote = await userService.createNewNote(noteDescription, userId);
  return res.status(201).json(newNote);
}

const getAllNotesByUserId = async (req, res) => {
  const { userId } = req.params;
  const notes = await userService.getAllNotesByUserId(userId);
  return res.status(200).json(notes);
}

const getUserPlayListByUserId = async (req, res) => {
  const { userId } = req.params;
  const playlist = await userService.getUserPlayListByUserId(userId);
  return res.status(200).json(playlist);
}

const addSongToUserPlayList = async (req, res) => {
  const { videoId, songName } = req.body;
  const { userId } = req.params;

  const playlist = await userService.addSongToUserPlayList(videoId, songName, userId);
  return res.status(200).json(playlist);
}

const deleteSongFromUserPlayList = async (req, res) => {
  const { songId } = req;
  const playlist = await userService.deleteSongFromUserPlayList(songId);
  return res.status(200).json(playlist);
}

const deleteNoteByNodeId = async (req, res) => {
  const { noteId } = req.params;
  const deletedNote = await userService.deleteNoteByNodeId(noteId);
  return res.status(200).json(deletedNote);
}

module.exports = {
  createNewUser,
  loginUser,
  createNewNote,
  getAllNotesByUserId,
  getUserPlayListByUserId,
  addSongToUserPlayList,
  deleteSongFromUserPlayList,
  deleteNoteByNodeId,
}
