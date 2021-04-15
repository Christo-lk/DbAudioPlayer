import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import IndTrack from './IndTrack'

function TrackList2 ({ tracks, selectedTrackId }) {
  return (
    <>
      {tracks.map(track =>
        <IndTrack track={track} key={track.id} />
      )}
    </>
  )
}

function mapStateToProps (state) {
  return {
    tracks: state.tracks,
    selectedTrackId: state.selectedTrack.id
  }
}

export default connect(mapStateToProps)(TrackList2)
