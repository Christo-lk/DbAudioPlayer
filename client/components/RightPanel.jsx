import React, { useState, useEffect } from 'react'
import AddSongForm from './AddSongForm'
import TrackList2 from './TrackList2'

import store from '../redux/store'
import { connect } from 'react-redux'

// redux action
import { setShowForm } from '../redux/actions/showForm'
import { setShowCatPic } from '../redux/actions/setShowCatPic'

function RightPanel ({ showForm, showCatPic }) {
  function catPicClick () {
    if (showCatPic) {
      store.dispatch(setShowCatPic(false))
    } else {
      store.dispatch(setShowCatPic(true))
    }
  }

  return (
    <div className="flex flex-col w-62 ml-10 shadow-inner bg-gray-100 rounded-md">
      <div className="h-80 border-2 border-black rounded-md overflow-auto relative">
        <div className="h-16 flex flex-row sticky top-0 bg-gradient-to-b from-gray-300 p-3  ">
          <h2 className="text-2xl font-semibold">{showForm ? 'Add Song' : 'Songs:'}</h2>
          <button className="text-xl w-5 h-5 bg-blue-300 flex justify-center items-center rounded-md mx-1 hover:bg-blue-400" onClick={() => store.dispatch(setShowForm(true))}> +</button>
        </div>
        { showForm ? <AddSongForm/> : <TrackList2 />}
      </div>
      <div className="px-3 my-2">
        <label htmlFor="catPicButton">cat pic album art?</label>
        <button name="catPicbutton" className="button" onClick={() => catPicClick()}> {showCatPic ? 'Change it back!' : 'Yes Please!'}</button>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    showForm: state.showForm,
    showCatPic: state.showCatPic
  }
}

export default connect(mapStateToProps)(RightPanel)
