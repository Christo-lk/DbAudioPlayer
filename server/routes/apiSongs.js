const express = require('express')

const db = require('../db/dbSongs')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  res.send('youve reached the api')
})
