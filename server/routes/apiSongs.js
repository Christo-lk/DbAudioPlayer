const express = require('express')

const db = require('../db/dbSongs')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getSongs()
    .then(result => res.json(result))
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'cant get songs' })
    })
  // res.send('youve reached the api')
})