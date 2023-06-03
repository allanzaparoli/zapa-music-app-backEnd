const Model = require('../database/models');

const { ErrorHandler } = require('../utils/errorHandler');

const createNewUser = async (user) => {
  const transaction = await Model.sequelize.transaction();

  try {
    const newUser = await Model.User.create(user, { transaction });
    await transaction.commit();
    return newUser;
  }

  catch (error) {
    await transaction.rollback();
    console.log(error);
    throw new ErrorHandler(500, 'Internal server error');
  }
}

const loginUser = async (user) => {
  const foundUser = await Model.User.findOne({
    where: {
      username: user.username,
    },
  });

  if (!foundUser) {
    throw new ErrorHandler(404, 'User not found');
  }

  const isPasswordValid = await foundUser.password === user.password;

  if (!isPasswordValid) {
    throw new ErrorHandler(401, 'Invalid password');
  }

  return foundUser;

}

const createNewNote = async (noteDescription, userId) => {
  const noteTitle = 'Note';
  const transaction = await Model.sequelize.transaction();

  try {
    const newNote = await Model.UsersNotes.create({ noteTitle, noteDescription, userId }, { transaction });
    await transaction.commit();
    return newNote;
  }

  catch (error) {
    console.log(error);
    await transaction.rollback();
    throw new ErrorHandler(500, 'Internal server error');
  }
}

const getAllNotesByUserId = async (userId) => {
  const notes = await Model.UsersNotes.findAll({
    where: {
      userId,
    },
  });

  return notes;
}

const getUserPlayListByUserId = async (userId) => {
  const userPlayList = await Model.UsersPlaylist.findAll({
    where: {
      userId,
    },
  });

  return userPlayList;
}

const addSongToUserPlayList = async (videoId, songName, userId) => {
  const transaction = await Model.sequelize.transaction();

  try {
    const findVideoId = await Model.UsersPlaylist.findOne({
      where: {
        videoId,
        userId,
      },
    });

    if (findVideoId) {
      throw new ErrorHandler(409, 'Song already exists in playlist');
    }

    const newSong = await Model.UsersPlaylist.create({ videoId, songName, userId }, { transaction });
    await transaction.commit();
    return newSong;
  }

  catch (error) {
    await transaction.rollback();
    throw new ErrorHandler(500, 'Internal server error');
  }
}

const deleteSongFromUserPlayList = async (songId) => {
  const transaction = await Model.sequelize.transaction();

  try {
    const deletedSong = await Model.UserPlayList.destroy({
      where: {
        id: songId,
      },
    }, { transaction });
    await transaction.commit();
    return deletedSong;
  }

  catch (error) {
    await transaction.rollback();
    throw new ErrorHandler(500, 'Internal server error');
  }
}

const deleteNoteByNodeId = async (noteId) => {
  const transaction = await Model.sequelize.transaction();

  try {
    const deletedNote = await Model.UsersNotes.destroy({
      where: {
        id: noteId,
      },
    }, { transaction });
    await transaction.commit();
    return deletedNote;
  }

  catch (error) {
    console.log(error);
    await transaction.rollback();
    throw new ErrorHandler(500, 'Internal server error');
  }
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