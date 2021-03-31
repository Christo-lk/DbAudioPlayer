import React, { useState, useEffect } from 'react'
import AddSongForm from './AddSongForm'
import TrackList2 from './TrackList2'

import store from '../redux/store'
import { connect } from 'react-redux'

// redux action
import { setShowForm } from '../redux/actions/showForm'

function RightPanel ({ showForm }) {
  return (
    <div className="flex flex-col w-62 ml-10">
      <div className="h-80 px-3 border-2 border-black rounded-md overflow-auto">
        <div className="h-10 flex items-center sticky top-0 bg-blue-100">
          <h2 className="text-xl font-semibold">{showForm ? 'Add Song' : 'Songs:'}</h2>
          <button className="text-xl w-5 h-5 bg-blue-300 flex justify-center items-center rounded-md mx-1 hover:bg-blue-400" onClick={() => store.dispatch(setShowForm(true))}> +</button>
        </div>
        { showForm ? <AddSongForm/> : <TrackList2 />}
      </div>
      <div className="px-3 my-2">
        <label htmlFor="catPicButton">cat pic album art?</label>
        <button name="catPicbutton" className="button">Yes Please</button>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    showForm: state.showForm
  }
}

export default connect(mapStateToProps)(RightPanel)
