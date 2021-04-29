import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

// COMPONENTS
import AddSongForm from './AddSongForm'
import LikedTracks from './LikedTracks'
import AllTracks from './AllTracks'
import QueuedTracks from './QueuedTracks'

function TrackListSource ({ trackListSource, showDeleteButton }) {
  function componentSource () {
    switch (trackListSource) {
      case 'ALL_TRACKS':
        return <AllTracks showDeleteButton={showDeleteButton}/>

      case 'LIKED_TRACKS':
        return <LikedTracks showDeleteButton={showDeleteButton}/>

      case 'QUEUED_TRACKS':
        return <QueuedTracks showDeleteButton={showDeleteButton}/>

      case 'ADD_SONG_FORM':
        return <AddSongForm showDeleteButton={showDeleteButton}/>

      default:
        return <AllTracks showDeleteButton={showDeleteButton}/>
    }
  }

  return (
    <>
      <div className="h-80 rounded-md overflow-auto relative">
        {componentSource()}
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    trackListSource: state.trackListSource
  }
}

export default connect(mapStateToProps)(TrackListSource)
