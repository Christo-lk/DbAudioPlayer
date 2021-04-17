import React, { useState, useEffect } from 'react'
import store from '../redux/store'

// REDUX ACTIONS
import { setTrackListSource } from '../redux/actions/setTrackListSource'
import { connect } from 'react-redux'

function TrackListNav ({ trackListSource }) {
  return (
    <>
      <div className="  h-auto bg-blue-400 flex items-center flex-row sticky pt-1 pb-3 pl-1 ">
        <div className="flex flex-row">
          <div onClick={() => store.dispatch(setTrackListSource('ALL_TRACKS'))} className="h-5 w-20 bg-yellow-400 mr-4">
            <h2 className=" ml-1 mt-1 mr-2 text-2xl leading-tight font-bold hover:text-white">Library:</h2>
          </div>
          <div onClick={() => store.dispatch(setTrackListSource('LIKED_TRACKS'))} className="ml-5 h-5 w-14 bg-yellow-400 mr-4">
            <h2 className="ml-1 mt-1 text-2xl leading-tight font-bold hover:text-white" >Liked:</h2>
          </div>
          <div onClick={() => store.dispatch(setTrackListSource('ADD_SONG_FORM'))} className="h-7 w-7 flex-center bg-yellow-400 mx-2 ml-16">
            <button className="text-4xl hover:text-white">+</button>
          </div>
        </div>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    trackListSource: state.trackListSource
  }
}

export default connect(mapStateToProps)(TrackListNav)
