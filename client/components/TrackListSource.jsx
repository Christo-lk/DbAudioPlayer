import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

// COMPONENTS
import TrackList2 from './TrackList2'
import AddSongForm from './AddSongForm'
import LikedTracks from './LikedTracks'
import AllTracks from './AllTracks'

function TrackListSource ({ trackListSource }) {
  console.log('TL sourrce: ', trackListSource)

  // const [component, setComponent] = useState()

  // console.log('component: ', component)

  // useEffect(() => {
  //   renderComponent()
  // }, [trackListSource])

  // function renderComponent (trackListSource) {
  //   switch (trackListSource) {
  //     case 'TRACKS':
  //       return () => setComponent(<TrackList2/>)

  //     case 'LIKED_SONGS':
  //       return () => setComponent(<LikedTracks/>)

  //     case 'ADD_SONG_FORM':
  //       return () => setComponent(<AddSongForm/>)

  //     default:
  //       return () => setComponent(<TrackList2/>)
  //   }
  // }

  function switchTest () {
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
      {switchTest()}
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
