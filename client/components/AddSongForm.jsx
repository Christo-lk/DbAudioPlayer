import React, { useState } from 'react'
import { connect } from 'react-redux'

// redux action
import { setShowForm } from '../redux/actions/showForm'
import { setRefreshTracks } from '../redux/actions/refreshTracks'
import store from '../redux/store'

import { addSong } from '../api/songsApi'

function AddSongForm ({ showForm }) {
  const [form, setForm] = useState({
    title: '',
    artist: '',
    // audioSrc: `/public/${title}`,
    image: null
  })

  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')

  // console.log('artist: ', artist)
  // console.log('title: ', title)

  function handleChange (e) {
    const { name, value } = e.target

    console.log(name)
    setForm({
      ...form,
      [name]: value,
      audioSrc: `/public/${value}`

    })
  }

  function newOnSubmit (event) {
    event.preventDefault()
    store.dispatch(setShowForm(false))
    addSong(form)
    store.dispatch(setRefreshTracks(true))


    console.log('submitted form: ', form)
  }

  function onSubmit () {
    const song = {
      title: title,
      artist: artist,
      image: null,
      audioSrc: './test'
    }

    console.log('submit song: ', song)
    // console.log('form: ', form)

  }

  return (
    <div className="w-62">
      <form className="flex flex-col" onSubmit={(e) => newOnSubmit(e)}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' name="title" value={form.title} onChange={(e) => handleChange(e)}/>
        <label htmlFor='artist'>Artist</label>
        <input type="text" id='artist' name="artist" value={form.artist} onChange={(e) => handleChange(e)}/>
        <label htmlFor="song">Upload Song</label>
        <input type="file" id="song" />
        <button className="button w-fit my-3">add Song</button>

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
