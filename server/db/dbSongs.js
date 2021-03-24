const connection = require('./connection')
const db = connection

module.exports = {
  getSongs,
  getIndSong
}

function getSongs () {
  return db('songs')
}

function getIndSong (id) {
  return db('songs')
    .where('id', id).first()
}
