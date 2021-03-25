const express = require('express')

const db = require('../db/dbSongs')

const router = express.Router()

module.exports = router

// RETURN ALL SONGS
router.get('/getsongs', (req, res) => {
  db.getSongs()
    .then(result => res.json(result))
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'cant get songs' })
    })
  // res.send('youve reached the api')
})

// RETURN INDIVIDUAL SONG
router.get('/getindsong/:id', (req, res) => {
  const id = req.params.id

  db.getIndSong(id)
    .then(result => res.json(result))
    .catch(err => console.log(err))
})

// ADD SONG
router.post('/addsong', (req, res) => {
  const song = {
    title: 'test',
    artist: 'christo',
    image: './test',
    audioSrc: './test'
  }

  db.addSong(song)
    .then(result => {
      res.status(201).json(result)
      return null
    })
    .catch(err => console.log(err))
})
