import React from 'react'
import { connect } from 'react-redux'

import IndTrack from './IndTrack'

function AllTracks ({ tracks, selectedTrackId, trackOrder }) {
  const alphabeticTracks = tracks.sort((a, b) => {
    if (a.title < b.title) {
      return -1
    } if (a.title > b.title) {
      return 1
    } else { return 0 }
  })

  console.log('TO: ', trackOrder)

  function setTrackOrder () {
    switch (trackOrder) {
      case 'DEFAULT':
        return tracks.map(track =>
          <IndTrack track={track} key={track.id} />
        )

      case 'ALPHABETIC':
        return alphabeticTracks.map(track =>
          <IndTrack track={track} key={track.id} />
        )

      case 'REVERSE_ALPHABETIC':
        return alphabeticTracks.reverse().map(track =>
          <IndTrack track={track} key={track.id} />
        )

      default:
        return tracks.map(track =>
          <IndTrack track={track} key={track.id} />
        )
    }
  }

  return (
    <>

      {/* {tracks.map(track =>
        <IndTrack track={track} key={track.id} />
      )} */}

      {setTrackOrder()}
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
