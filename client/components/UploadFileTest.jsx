import React, { useState } from 'react'
import { connect } from 'react-redux'
import request from 'superagent'

// redux action
import { setShowForm } from '../redux/actions/showForm'
import { setRefreshTracks } from '../redux/actions/refreshTracks'
import store from '../redux/store'

import { addSong, uploadFile } from '../api/songsApi'

function uploadFileTest ({ showForm }) {
  // state for uploading File:
  const [file, setFile] = useState()

  return (
    <div className="px-3">

      <form >
        <label htmlFor="song">Upload Song</label>
        <input type="file" id="song" onChange={(e) => handleChange(e) }/>
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

export default connect(mapStateToProps)(uploadFileTest)
