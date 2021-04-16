import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// COMPONENTS
import TrackList2 from './TrackList2'
import AddSongForm from './AddSongForm'
import LikedTracks from './LikedTracks'

function TrackListSource ({ trackListSource }) {
  console.log('TL sourrce: ', trackListSource)

  function setComponent (trackListSource) {
    switch (trackListSource) {
      case 'TRACKS':
        return <TrackList2/>

      case 'LIKED_SONGS':
        return <LikedTracks/>

      case 'ADD_SONG_FORM':
        return <AddSongForm/>

      default:
        return <TrackList2/>
    }
  }

  return (
    <>
      {setComponent()}
    </>
  )
}

function mapStateToProps (state) {
  return {
    trackListSource: state.trackListSource,
    tracks: state.tracks
  }
}

export default connect(mapStateToProps)(TrackListSource)
