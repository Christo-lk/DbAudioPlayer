import React, { useState, useEffect } from 'react'
import store from '../redux/store'

// REDUX ACTIONS
import { setTrackListSource } from '../redux/actions/setTrackListSource'

export default function TrackListNav () {
  return (
    <>
      <div className="  h-auto bg-blue-400 flex items-center flex-row sticky pt-1 pb-4 pl-1 ">
        <div className="flex flex-row">
          <div onClick={() => store.dispatch(setTrackListSource('ALL_SONGS'))} className=" h-12 w-28 bg-yellow-400 mr-2">
            <h2 className="text-2xl leading-tight font-bold hover:text-white">All Tracks:</h2>
          </div>
          <div onClick={() => store.dispatch(setTrackListSource('LIKED_TRACKS'))} className="h-12 w-28 bg-yellow-400 mr-2">
            <h2 className="text-2xl leading-tight font-bold hover:text-white" >Liked Tracks:</h2>
          </div>
          <div onClick={() => store.dispatch(setTrackListSource('ADD_SONG_FORM'))} className="h-7 w-7 flex-center bg-yellow-400 mx-2 ml-16">
            <button className="text-4xl hover:text-white">+</button>
          </div>
        </div>
      </div>
    </>
  )
}
