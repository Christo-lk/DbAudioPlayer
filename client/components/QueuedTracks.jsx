import React from 'react'
import { connect } from 'react-redux'
import IndTrack from './IndTrack'

function QueuedTracks ({ queuedTracks }) {
  return (
    <>
      {queuedTracks.map(track => {
        return <IndTrack key={track.id} track={track}/>
      })}
    </>
  )
}

function mapStateToProps (state) {
  return {
    queuedTracks: state.queuedTracks
  }
}

export default connect(mapStateToProps)(QueuedTracks)
