const express = require('express')

const db = require('../db/dbSongs')

const router = express.Router()

const multer = require('multer')
const upload = multer({ dest: '../public' })

// const storage = multer.diskStorage({
//   destination: '../server/public/tracks'
// },
// {
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// })

// const upload = multer({ storage: storage })

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
  const song = req.body
  db.addSong(song)
    .then(indSong => {
      res.status(201).json({ result: 'success!' })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ result: 'failed to add song' })
    })
})

// DELETE SONG BY ID
router.delete('/deletesong', (req, res) => {
  db.deleteSong(4)
    .then(result => {
      res.json({ result: 'song was deleted!' })
      return null
    })
    .catch(err => console.log(err))
})

router.post('/uploadfile', upload.single('file'), (req, res) => {
  // const file = req.file

  console.log(req.file)

  res.send(req.file)
})
