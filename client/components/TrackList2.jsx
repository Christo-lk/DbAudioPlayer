import React from 'react'

import { connect } from 'react-redux'
import AllTracks from './AllTracks'
import IndTrack from './IndTrack'
import LikedTracks from './LikedTracks'

function TrackList2 ({ tracks, selectedTrackId, showLikedTracks }) {
  return (
    <>
      {showLikedTracks ? <LikedTracks/> : <AllTracks/>}
    </>
  )
}

function mapStateToProps (state) {
  return {
    tracks: state.tracks,
    selectedTrackId: state.selectedTrack.id,
    showLikedTracks: state.showLikedTracks
  }
}

export default connect(mapStateToProps)(TrackList2)
