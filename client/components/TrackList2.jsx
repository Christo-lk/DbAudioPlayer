import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import store from '../redux/store'
import IndTrack from './IndTrack'

function TrackList2 ({ tracks, selectedTrackId }) {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <>
      {tracks.map(track =>
        <IndTrack track={track} key={track.id} title={track.title} artist={track.artist} id={track.id}/>
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
