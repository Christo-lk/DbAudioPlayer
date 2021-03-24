import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import store from '../redux/store'
import { selectedTrack } from '../redux/actions/selectedTrack'

function TrackList2 ({ tracks }) {
  function clickHandler (track) {
    store.dispatch(selectedTrack(track))
  }

  return (
    <>
      {tracks.map(track =>
        <div key={track.title} onClick={() => clickHandler(track)}className="my-1 p-1 rounded-md bg-gray-100 hover:bg-blue-200">
          <li key={track.title}>{track.title}</li>
          <li className="text-sm italic" key={track.artist}>{track.artist}</li>
        </div>
      )}
    </>
  )
}

function mapStateToProps (state) {
  return {
    tracks: state.tracks
  }
}

export default connect(mapStateToProps)(TrackList2)
