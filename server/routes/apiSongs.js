const express = require('express')

const db = require('../db/dbSongs')

const router = express.Router()
const path = require('path')

// Express file-upload
const fileUpload = require('express-fileupload')
router.use(fileUpload())

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
router.delete('/deletesong/:id', (req, res) => {
  const id = Number(req.params.id)
  console.log('id:', id)
  db.deleteSong(id)
    .then(result => {
      res.json({ result: 'song was deleted!' })
      return null
    })
    .catch(err => console.log(err))
})

// UPDATE ISLIKED 
router.patch('/updateIsLiked', (req,res) =>{
 
  db.updateIsLiked(req.body)
    .then(result => {
      res.json({result: 'isLiked was updated'})
      return null  
  })
  .catch(err => console.log(err))
})

router.post('/uploadfile', (req, res) => {
  if (req.file === null) {
    return res.status(400).json({ msg: 'no file uploaded' })
  }

  const file = req.file.file

  file.mv(`../public/${file.name}`, err => {
    if (err) {
      console.log(err)
      return res.status(500).send(err)
    }
  })

  res.json({fileName: file.name, filePatch:  `../public/${file.name}`})

})
