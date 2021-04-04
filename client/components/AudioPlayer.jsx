import React, { useState, useRef, useEffect } from 'react'

import { getIndSong } from '../api/songsApi'
import { connect } from 'react-redux'
import store from '../redux/store'

// SVG icons
import Play from '../icons/play.svg'
import Pause from '../icons/pause.svg'
import Prev from '../icons/prev.svg'
import Next from '../icons/next.svg'

// action creators
import { setIsPlaying, setIsNotPlaying } from '../redux/actions/isPlaying'
import TrackArtwork from './TrackArtwork'

function AudioPlayer ({ selectedTrack, tracks, isPlaying }) {
  const [trackIndex, setTrackIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isReady, setIsReady] = useState(false)

  const [currentTrack, setCurrentTrack] = useState(selectedTrack.title)

  // handles play and stop playing
  useEffect(() => {
    if (isPlaying) {
      audio.current.play()
      startProgressBar()
    } else {
      audio.current.pause()
    }
  }, [isPlaying])

  // REDUX ON TRACK CHANGE
  useEffect(() => {
    audio.current.pause()
    audio.current = new Audio(audioSrc)

    if (isPlaying) {
      audio.current.play()
    } else {
      return null
    }
  }, [selectedTrack])

  const { id, title, artist, audioSrc, image } = selectedTrack

  // Defines audio source
  const audio = useRef(new Audio(audioSrc))

  // destructure song duration out of the 'current' property
  const { duration } = audio.current

  // changes to next track
  function toNext () {
    const songId = id + 1

    if (id < tracks.length) {
      getIndSong(songId)
        .then(indSong => {
          store.dispatch({
            type: 'SET_SELECTED_TRACK',
            track: indSong
          })
          return null
        })
        .catch(err => console.log(err))
    } else {
      getIndSong(1)
        .then(indSong => {
          store.dispatch({
            type: 'SET_SELECTED_TRACK',
            track: indSong
          })
          return null
        })
        .catch(err => console.log(err))
    }
  }

  // changes to previous track
  function toPrev () {
    const songId = id - 1

    if (id > 1) {
      getIndSong(songId)
        .then(indSong => {
          store.dispatch({
            type: 'SET_SELECTED_TRACK',
            track: indSong
          })
          return null
        })
        .catch(err => console.log(err))
    } else {
      getIndSong(selectedTrack.id)
        .then(indSong => {
          store.dispatch({
            type: 'SET_SELECTED_TRACK',
            track: indSong
          })
          return null
        })
        .catch(err => console.log(err))
    }
  }

  // moves song progressbar
  function startProgressBar () {
    setInterval(() => {
      setProgress(audio.current.currentTime)
    }, 1000)
  }

  function onScrub (e) {
    audio.current.currentTime = e
    setProgress(e)
  }

  return (
    <>
      <div className="flex flex-col w-52">
        <TrackArtwork/>

        <div className="flex justify-between px-6">
          <button onClick={() => toPrev()}> <img className="svg opacity-60 hover:opacity-80" src={Prev}/> </button>
          {isPlaying ? <button onClick={() => store.dispatch(setIsNotPlaying())}> <img className="playButton" src={Pause}/> </button> : <button onClick={() => store.dispatch(setIsPlaying())}> <img className="playButton" src={Play}/> </button>}
          <button onClick={() => toNext()}> <img className="svg opacity-60 hover:opacity-80" src={Next}/> </button>
        </div>

        <input
          className="my-3"
          type="range"
          min='0'
          max={duration || `${duration}`}
          step='1'
          value={`${progress}`}
          onChange={(e) => onScrub(e.currentTarget.value)}
        />
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    tracks: state.tracks,
    isPlaying: state.isPlaying,
    selectedTrack: state.selectedTrack
  }
}

export default connect(mapStateToProps)(AudioPlayer)
