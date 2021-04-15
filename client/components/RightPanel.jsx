import React, { useState, useEffect } from 'react'
import AddSongForm from './AddSongForm'
import TrackList2 from './TrackList2'

import store from '../redux/store'
import { connect } from 'react-redux'

// redux action
import { setShowForm } from '../redux/actions/showForm'
import { setShowCatPic } from '../redux/actions/setShowCatPic'
import { setShowLikedTracks } from '../redux/actions/setShowLikedTracks'

// SVG
import CatOn from '../icons/catOn.svg'
import CatOff from '../icons/catOff.svg'

function RightPanel ({ showForm, showCatPic }) {
  function catPicClick () {
    if (showCatPic) {
      store.dispatch(setShowCatPic(false))
    } else {
      store.dispatch(setShowCatPic(true))
    }
  }

  return (
    <div className="flex flex-col w-72 ml-10 shadow-inner bg-gray-100 rounded-md">
      <div className=" h-auto bg-red-400 flex items-center flex-row sticky p-3  ">
        <div className="flex flex-row">
          <div className=" h-12 bg-yellow-400 mx-2">
            <h2 className="text-2xl font-semibold">All Tracks:</h2>
          </div>
          <div className="h-12 w-32 bg-yellow-400 mx-2">
            <h2 className="text-2xl font-semibold" onClick={() => store.dispatch(setShowLikedTracks(true))}>Liked Tracks:</h2>
          </div>
          <div className="h-12 w-12 flex-center bg-yellow-400 mx-2">
            <button className="text-4xl" onClick={() => store.dispatch(setShowForm(true))}>+</button>
          </div>
        </div>
      </div>
      <div className="h-80 rounded-md overflow-auto relative">
        { showForm ? <AddSongForm/> : <TrackList2 />}
      </div>
      <div className="px-3 my-2">
        <button name="catPicbutton" className="" onClick={() => catPicClick()}> <img className="w-10 opacity-20 hover:opacity-90"src={showCatPic ? CatOn : CatOff}/></button>
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
