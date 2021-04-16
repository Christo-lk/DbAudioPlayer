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
    <div className="flex flex-col  ml-10 shadow-inner bg-gray-100 rounded-md">
      <div className="  h-auto bg-blue-400 flex items-center flex-row sticky pt-1 pb-4 pl-1 ">
        <div className="flex flex-row">
          <div className=" h-12 w-28 bg-yellow-400 mr-2">
            <h2 className="text-2xl leading-tight font-bold hover:text-white">All Tracks:</h2>
          </div>
          <div className="h-12 w-28 bg-yellow-400 mr-2">
            <h2 className="text-2xl leading-tight font-bold hover:text-white" onClick={() => store.dispatch(setShowLikedTracks(true))}>Liked Tracks:</h2>
          </div>
          <div className="h-7 w-7 flex-center bg-yellow-400 mx-2 ml-16">
            <button className="text-4xl hover:text-white" onClick={() => store.dispatch(setShowForm(true))}>+</button>
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
