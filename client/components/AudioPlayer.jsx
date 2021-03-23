import React, { useState, useRef, useEffect } from 'react'

import { getSongs } from '../api/songsApi'
import { connect } from 'react-redux'
import store from '../redux/store'

// action creators
import { setIsPlaying, setIsNotPlaying } from '../redux/actions/isPlaying'

function AudioPlayer ({ selectedTrack, tracks, isPlaying }) {
  const [trackIndex, setTrackIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isReady, setIsReady] = useState(false)

  const [currentTrack, setCurrentTrack] = useState(selectedTrack.title)

  // handles play and stop playing
  useEffect(() => {
    console.log('isPLayingUseEffect')
    if (isPlaying) {
      audio.current.play()
      startProgressBar()
    } else {
      audio.current.pause()
    }
  }, [isPlaying])

  // ON TRACK CHANGE
  // useEffect(() => {
  //   audio.current.pause()
  //   audio.current = new Audio(audioSrc)

  //   if (isReady) {
  //     audio.current.play()
  //     startProgressBar()
  //   } else {
  //     setIsReady(true)
  //   }
  // }, [trackIndex])

  // REDUX ON TRACK CHANGE
  useEffect(() => {
    console.log('useState selected track')
    audio.current.pause()
    audio.current = new Audio(audioSrc)

    if (isPlaying) {
      audio.current.play()
    } else {
      return null
    }
  }, [selectedTrack])

  // const { title, artist, audioSrc, image } = tracks[trackIndex]
  const { title, artist, audioSrc, image } = selectedTrack

  // console.log(audioSrc)
  // console.log('selectedTrack:', selectedTrack)

  // Defines audio source
  const audio = useRef(new Audio(audioSrc))

  // destructure song duration out of the 'current' property
  const { duration } = audio.current

  // changes to next track
  function toNext () {
    // if (trackIndex < tracks.length - 1) {
    //   setTrackIndex(trackIndex + 1)
    // } else {
    //   setTrackIndex(0)
    // }
  }
  // changes to previous track
  function toPrev () {
    // if (trackIndex - 1 < 0) {
    //   setTrackIndex(tracks.length - 1)
    // } else {
    //   setTrackIndex(trackIndex - 1)
    // }
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
      <div className="flex flex-col">
        <img src={image} className={isPlaying ? 'w-48 rounded-full rotate' : 'w-48 rounded-full' }/>
        <div className="flex flex-col justify-center my-1">
          <h2 className="mx-auto">{title}</h2>
          <h2 className="mx-auto italic text-sm">{artist}</h2>
        </div>

        <div className="">
          <button onClick={() => toPrev()}>Prev</button>
          {isPlaying ? <button onClick={() => store.dispatch(setIsNotPlaying())}> pause</button> : <button onClick={() => store.dispatch(setIsPlaying())}> play </button>}
          <button onClick={() => toNext()} >Next</button>
        </div>

        <input
          className="my-3"
          type="range"
          min='0'
          max={duration || `${duration}`}
          step='1'
          value={`${progress}`}
          onChange={(e) => onScrub(e.currentTarget.value)}
          // onMouseUp={}
          // onKeyUp={}
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
