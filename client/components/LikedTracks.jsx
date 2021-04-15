import React from 'react'
import { connect } from 'react-redux'
import IndTrack from './IndTrack'

function LikedTracks ({ tracks }) {
  const LikedTracks = tracks.filter(track => track.isLiked === 1)
  console.log('likedtracks: ', LikedTracks)

  return (
    <>
      {LikedTracks.map(track => <IndTrack key={track.id} track={track}/>)}
    </>
  )
}

function mapStateToProps (state) {
  return {
    tracks: state.tracks

  }
}

export default connect(mapStateToProps)(LikedTracks)
