import React from 'react'

import { connect } from 'react-redux'
import AllTracks from './AllTracks'
import IndTrack from './IndTrack'
import LikedTracks from './LikedTracks'


function TrackList2 ({ tracks, selectedTrackId }) {
  return (
    <>
      <AllTracks/>
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
