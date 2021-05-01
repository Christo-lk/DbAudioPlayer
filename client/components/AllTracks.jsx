import React, { useState } from 'react'
import { connect } from 'react-redux'

import IndTrack from './IndTrack'

function AllTracks ({ tracks, showDeleteButton, trackOrder }) {
  console.log('filter test: ', tracks.filter(result => result.id !== 2))

  const alphabeticTracks = tracks.sort((a, b) => {
    if (a.title < b.title) {
      return -1
    } if (a.title > b.title) {
      return 1
    } else { return 0 }
  })

  function setTrackOrder () {
    switch (trackOrder) {
      case 'DEFAULT':
        return tracks

      case 'ALPHABETIC':
        return alphabeticTracks

      case 'REVERSE_ALPHABETIC':
        return alphabeticTracks.reverse()

      default:
        return tracks
    }
  }

  return (
    <>
      {setTrackOrder().map(track =>
        <IndTrack track={track} key={track.id} showDeleteButton={showDeleteButton} />
      )}
    </>
  )
}

function mapStateToProps (state) {
  return {
    tracks: state.tracks,
    selectedTrackId: state.selectedTrack.id,
    trackOrder: state.trackOrder
  }
}

export default connect(mapStateToProps)(AllTracks)
