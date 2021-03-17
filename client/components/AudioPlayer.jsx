import React, { useState, useRef, useEffect } from 'react'

export default function AudioPlayer ({ tracks }) {
  // useState
  const [trackIndex, setTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playPause, setPlayPause] = useState(false)

  const { title, artist, audioSrc, image } = tracks[trackIndex]

  // useRefs
  // Defines audio source
  const audio = useRef(new Audio(audioSrc))

  // USE EFFECTS

  useEffect(() => {
    playPause ? audio.current.pause() : audio.current.play()
  }, [playPause])

  // FUNCTIONS

  // handles play and stop playing
  function clickPlayPause () {
    playPause ? setPlayPause(false) : setPlayPause(true)

    console.log(playPause)
  }

  return (
    <>
      <div>
        <img src={image} className="w-32"/>
        <h2>{title}</h2>
        <h2>{artist}</h2>
        <button onClick={() => { clickPlayPause() }}> play </button>
      </div>
    </>
  )
}
