import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

// COMPONENTS
import AddSongForm from './AddSongForm'
import LikedTracks from './LikedTracks'
import AllTracks from './AllTracks'

function TrackListSource ({ trackListSource }) {
  function componentSource () {
    switch (trackListSource) {
      case 'ALL_SONGS':
        return <AllTracks/>

      case 'LIKED_TRACKS':
        return <LikedTracks/>

      case 'ADD_SONG_FORM':
        return <AddSongForm/>

      default:
        return <AllTracks/>
    }
  }

  return (
    <>
      {componentSource()}
    </>
  )
}

function mapStateToProps (state) {
  return {
    trackListSource: state.trackListSource
  }
}

export default connect(mapStateToProps)(TrackListSource)
