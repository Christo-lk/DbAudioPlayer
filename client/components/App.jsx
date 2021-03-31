import React, { useEffect, useState } from 'react'
import AudioPlayer from './AudioPlayer'
import RightPanel from './RightPanel'

import { getSongs } from '../api/songsApi'

import store from '../redux/store'
// Redux actions
import { loadTracks } from '../redux/actions/tracks'
import { setSelectedTrack } from '../redux/actions/selectedTrack'
import { connect } from 'react-redux'
import { setRefreshTracks } from '../redux/actions/refreshTracks'

function App ({ refreshTracks }) {
  const [isLoaded, setIsLoaded] = useState(false)

  // LOADS ALL TRACKS ON COMPONENT MOUNT
  useState(() => {
    getSongs()
      .then(result => {
        store.dispatch(loadTracks(result))
        store.dispatch(setSelectedTrack(result[0]))
        setIsLoaded(true)
        return null
      })
      .catch(err => console.log(err))
  }, [])

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

  return (
    <>
      <div className="w-full  flex flex-col justify-center">
        <h1 className="mx-auto my-3">DB Audio Player</h1>

        <div className="mx-auto p-10 rounded-md bg-blue-100 wfit flex">
          { isLoaded
            ? <>
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
    refreshTracks: state.refreshTracks
  }
}

export default connect(mapStateToProps)(App)
