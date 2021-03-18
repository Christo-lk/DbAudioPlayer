const connection = require('./connection')
const db = connection

module.exports = {
  getSongs
}

function getSongs () {
  return db('songs')
}
