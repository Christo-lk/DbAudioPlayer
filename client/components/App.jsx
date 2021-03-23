import React, { useState } from 'react'
import AudioPlayer from './AudioPlayer'
import RightPanel from './RightPanel'

import { getSongs } from '../api/songsApi'

import store from '../redux/store'
// Redux actions
import { loadTracks } from '../redux/actions/tracks'
import { setSelectedTrack } from '../redux/actions/selectedTrack'

const App = () => {
  const [tracks1, setTracks] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useState(() => {
    getSongs()
      .then(result => {
        setTracks(result)
        store.dispatch(loadTracks(result))
        store.dispatch(setSelectedTrack(result[1]))
        console.log('result:', result)
        setIsLoaded(true)
        return null
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className="w-full  flex flex-col justify-center">
        <h1 className="mx-auto">DB Audio Player</h1>

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

export default App
