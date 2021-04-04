import React, { useState } from 'react'
import { connect } from 'react-redux'
import request from 'superagent'

// redux action
import { setShowForm } from '../redux/actions/showForm'
import { setRefreshTracks } from '../redux/actions/refreshTracks'
import store from '../redux/store'

import { addSong, uploadFile } from '../api/songsApi'

function AddSongForm ({ showForm }) {
  const [form, setForm] = useState({
    title: '',
    artist: '',
    // audioSrc: `/public/${title}`,
    image: null
  })

  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')

  // state for uploading File:

  const [file, setFile] = useState()

  function handleChange (e) {
    const { name, value } = e.target

    console.log(name)
    setForm({
      ...form,
      [name]: value
      // audioSrc: `/public/${value}`

    })
  }

  function newOnSubmit (event) {
    event.preventDefault()
    store.dispatch(setShowForm(false))
    addSong(form)
    store.dispatch(setRefreshTracks(true))

    console.log('submitted form: ', form)
  }

  function submitFile (e) {
    e.preventDefault()
    console.log('file: ', file)
    const data = new FormData()
    data.append('file', file)

    request.post('/api/v1/uploadfile')
      .send(data)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <div className="w-62">
      {/* <form className="flex flex-col" onSubmit={(e) => newOnSubmit(e)}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' name="title" value={form.title} onChange={(e) => handleChange(e)}/>
        <label htmlFor='artist'>Artist</label>
        <input type="text" id='artist' name="artist" value={form.artist} onChange={(e) => handleChange(e)}/>
        <button className="button w-fit my-3">add Song</button>
      </form> */}

      <form encType="multipart/form-data" onSubmit={(e) => submitFile(e)}>
        <label htmlFor="song">Upload Song</label>
        <input type="file" id="song" onChange={e => {
          setFile(e.target.files[0])
        }} />
        <button className="button w-fit my-3">add real Song</button>
      </form>

    </div>
  )
}

function mapStateToProps (state) {
  return {
    showForm: state.showForm
  }
}

export default connect(mapStateToProps)(AddSongForm)
