const connection = require('./connection')
const db = connection

module.exports = {
  getSongs,
  getIndSong,
  addSong
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
