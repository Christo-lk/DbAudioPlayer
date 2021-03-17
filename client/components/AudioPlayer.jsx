import React, { useState, useRef, useEffect } from 'react'

export default function AudioPlayer ({ tracks }) {
  const [trackIndex, setTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const { title, artist, audioSrc, image } = tracks[trackIndex]

  console.log(isPlaying)
  // Defines audio source
  const audio = useRef(new Audio(audioSrc))
  console.log('audio.current:', audio.current)
  console.log('audio:', audio)

  // handles play and stop playing
  useEffect(() => {
    isPlaying ? audio.current.play() : audio.current.pause()
  }, [isPlaying])

  useEffect(() => {
    audio.current = new Audio(audioSrc)
  }, [trackIndex])

  function toNext () {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1)
    } else {
      setTrackIndex(0)
    }
  }

  function toPrev () {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1)
    } else {
      setTrackIndex(trackIndex - 1)
    }
  }

  return (
    <>
      <div>
        <img src={image} className="w-32"/>
        <h2>{title}</h2>
        <h2>{artist}</h2>
        <button onClick={() => toPrev()}>Prev</button>
        {isPlaying ? <button onClick={() => setIsPlaying(false)}> pause</button> : <button onClick={() => setIsPlaying(true)}> play </button>}
        <button onClick={() => toNext()} >Next</button>

      </div>
    </>
  )
}
