import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'

function TrackList2 ({ tracks }) {
  return (
    <>
      {tracks.map(track =>
        <div key={track.title} className="my-1 p-1 rounded-md bg-gray-100 hover:bg-blue-200">
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
