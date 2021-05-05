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
    .then(result => {
      return {
        id: result.id,
        title: result.title,
        artist: result.artist,
        audioSrc: result.audioSrc,
        image: result.image,
        isLiked: result.isLiked
      }
    })
}

function addSong (song, db = connection) {
  return db('songs')
    .insert(song)
    .then(result => {
      return {
        title: song.title
      }
    })
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
