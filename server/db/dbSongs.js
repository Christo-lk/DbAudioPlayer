const connection = require('./connection')
const db = connection

module.exports = {
  getSongs,
  getIndSong,
  addSong,
  deleteSong,
  updateIsLiked
}

function getSongs () {
  return db('songs')
}

function getIndSong (id) {
  return db('songs')
    .where('id', id).first()
}

function addSong (song) {
  return db('songs')
    .insert(song)
}

function deleteSong (id) {
  return db('songs')
    .where('id', id)
    .delete()
}

function updateIsLiked ({id, boolean}) {
  return db('songs')
    .where('id', id)
    .update({ isLiked: boolean })
}
