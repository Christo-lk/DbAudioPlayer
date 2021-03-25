import React, { useState } from 'react'
import { connect } from 'react-redux'

// redux action
import { setShowForm } from '../redux/actions/showForm'
import { setRefreshTracks } from '../redux/actions/refreshTracks'
import store from '../redux/store'

import { addSong } from '../api/songsApi'

function AddSongForm ({ showForm }) {
  function clickHandler () {
    const song = {
      title: 'itworksbaubebeebe',
      artist: 'christo',
      image: './test',
      audioSrc: './test'
    }

    store.dispatch(setShowForm(false))
    addSong(song)
    store.dispatch(setRefreshTracks(true))
  }

  return (
    <div className="w-62">
      <form className="flex flex-col" onChange={() => {}}>
        <label htmlFor='title'>title</label>
        <input type='text' id='title'/>
        <label htmlFor='artist'>artist</label>
        <input type="text" id='artist'/>
        <input type="file" id="upload" />
        <button className="button w-fit" onClick={() => clickHandler() }>add Song</button>
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
