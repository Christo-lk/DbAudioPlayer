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
import { setSelectedTrackIsLiked } from '../redux/actions/setSelectedTrackIsLiked'
import { setSelectedTrack } from '../redux/actions/selectedTrack'
import { removeQueuedTrack } from '../redux/actions/setQueuedTrack'

function AudioPlayer ({ selectedTrack, tracks, isPlaying, queuedTracks }) {
  const [progress, setProgress] = useState(0)

  // returns true or false if there are queued tracks.
  const [tracksInQueue, setTracksInQueue] = useState(false)

  // Plays song and starts progress bar
  useEffect(() => {
    if (isPlaying) {
      audio.current.play()
      startProgressBar()
    } else {
      audio.current.pause()
    }
  }, [isPlaying])

  // Use Effect to check whether there are any queued Tracks
  useEffect(() => {
    queuedTracks.length >= 1 ? setTracksInQueue(true) : setTracksInQueue(false)
  }, [queuedTracks])

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

  const { id, audioSrc } = selectedTrack

  // Defines audio source
  const audio = useRef(new Audio(audioSrc))

  // destructure song duration out of the 'current' property
  const { duration } = audio.current

  // returns position of current track for toNext and toPrev functions
  const trackIndex = tracks.map(result => result.title).indexOf(selectedTrack.title)

  // changes to next track
  function toNext () {
    if (tracksInQueue) {
      queuedTrackToNext()
    } else {
      if (trackIndex < tracks.length - 1) {
        const nextTrack = tracks[trackIndex + 1]
        store.dispatch(setSelectedTrack(nextTrack))
        store.dispatch(setSelectedTrackIsLiked(nextTrack.id, nextTrack.isLiked))
      } else {
        store.dispatch(setSelectedTrack(tracks[0]))
      }
    }
  }

  function queuedTrackToNext () {
    console.log('inQueuedTracks')

    // sets selected track as the first item in the queuedTracks Array
    store.dispatch(setSelectedTrack(queuedTracks[0]))
    const queuedTrackIndex = queuedTracks.map(result => result.id).indexOf(selectedTrack.id)

    if (queuedTrackIndex < queuedTracks.length - 1) {
      const nextQueuedTrack = queuedTracks[queuedTrackIndex + 1]
      // dispatch next selected track and remove previous queued track from redux
      store.dispatch(setSelectedTrack(nextQueuedTrack))
      store.dispatch(removeQueuedTrack(queuedTracks[queuedTrackIndex]))
    } else if (queuedTracks.length === 1) {
      store.dispatch(removeQueuedTrack(queuedTracks[0]))
    } else {
      setTracksInQueue(false)
      store.dispatch(removeQueuedTrack(queuedTracks[0]))
      toNext()
    }
  }

  // changes to previous track
  function toPrev () {
    if (trackIndex > 0) {
      const prevTrack = tracks[trackIndex - 1]
      store.dispatch({
        type: 'SET_SELECTED_TRACK',
        track: prevTrack
      })
      store.dispatch(setSelectedTrackIsLiked(prevTrack.id, prevTrack.isLiked))
    } else {
      store.dispatch({
        type: 'SET_SELECTED_TRACK',
        track: tracks[tracks.length - 1]
      })
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
      <div className="flex flex-col w-auto mr-10">
        <div className="overflow-visible w-auto pt-1 pl-3 h-7 bg-red-400">
          <h1 className="-mr-5 text-4xl font-bold">Db Audio Player</h1>
        </div>

        <TrackArtwork/>

        <div className="flex justify-between px-6 mt-1">
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
    selectedTrack: state.selectedTrack,
    queuedTracks: state.queuedTracks
  }
}

export default connect(mapStateToProps)(AudioPlayer)
