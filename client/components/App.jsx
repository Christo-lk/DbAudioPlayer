import React, { useEffect, useState } from 'react'
import AudioPlayer from './AudioPlayer'
import RightPanel from './RightPanel'
import store from '../redux/store'

import { getSongs } from '../api/songsApi'

// Redux actions
import { loadTracks } from '../redux/actions/tracks'
import { setSelectedTrack } from '../redux/actions/selectedTrack'
import { connect } from 'react-redux'
import { setRefreshTracks } from '../redux/actions/refreshTracks'
import { setSelectedTrackIsLiked, updateSelectedTrackIsLiked } from '../redux/actions/setSelectedTrackIsLiked'

function App ({ refreshTracks, selectedTrack }) {
  const [isLoaded, setIsLoaded] = useState(false)

  // LOADS ALL TRACKS ON COMPONENT MOUNT
  useEffect(() => {
    getSongs()
      .then(result => {
        store.dispatch(loadTracks(result))
        store.dispatch(setSelectedTrack(result[0]))
        store.dispatch(setSelectedTrackIsLiked(result[0].id, result[0].isLiked))
        setIsLoaded(true)
        return null
      })
      .catch(err => console.log(err))
  }, [])

  // changes selectedTrackIsLiked redux state on selectedTrack change
  useEffect(() => {
    const { id, isLiked } = selectedTrack
    store.dispatch(setSelectedTrackIsLiked(id, isLiked))
  }, [selectedTrack])

  // REFRESHES TRACKS AFTER SONG HAS BEEN ADDED
  useEffect(() => {
    if (refreshTracks) {
      getSongs()
        .then(result => {
          store.dispatch(loadTracks(result))
          store.dispatch(setRefreshTracks(false))
          return null
        })
        .catch(err => console.log(err))
    } else {
      return null
    }
  }, [refreshTracks])

  // function that refreshes the queued tracks to show updates in like/unlike
  function updateQueuedTrackIsLiked()




  return (
    <>
      <div className="w-full  flex flex-col justify-center">

        <div className="mx-auto p-10 bg-gray-50 shadow-2xl wfit flex">
          { isLoaded ? <>
            <AudioPlayer />
            <RightPanel />
          </>
            : <h1 className= "my-auto">loading...</h1>
          }
        </div>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    refreshTracks: state.refreshTracks,
    selectedTrack: state.selectedTrack
  }
}

export default connect(mapStateToProps)(App)
