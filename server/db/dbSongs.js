const connection = require('./connection')
// const db = connection

module.exports = {
  getSongs,
  getIndSong,
  addSong,
  deleteSong,
  updateIsLiked
}

function getSongs (db = connection) {
  return db('songs')
}

function getIndSong (id, db = connection) {
  return db('songs')
    .where('id', id).first()
}

function addSong (song, db = connection) {
  return db('songs')
    .insert(song)
}

function deleteSong (id, db = connection) {
  return db('songs')
    .where('id', id)
    .delete()
}

function updateIsLiked ({ id, boolean }, db = connection) {
  return db('songs')
    .where('id', id)
    .update({ isLiked: boolean })
}
