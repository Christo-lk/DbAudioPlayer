import React from 'react'
import { connect } from 'react-redux'

import IndTrack from './IndTrack'

function AllTracks ({ tracks, selectedTrackId }) {
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

export default connect(mapStateToProps)(AllTracks)
