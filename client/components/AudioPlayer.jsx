import React, { useState, useRef, useEffect } from 'react'

export default function AudioPlayer ({ tracks }) {
  const [trackIndex, setTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const { title, artist, audioSrc, image } = tracks[trackIndex]

  console.log(isPlaying)
  // Defines audio source
  const audio = useRef(new Audio(audioSrc))

  // handles play and stop playing
  useEffect(() => {
    isPlaying ? audio.current.play() : audio.current.pause()
  }, [isPlaying])

  return (
    <>
      <div>
        <img src={image} className="w-32"/>
        <h2>{title}</h2>
        <h2>{artist}</h2>

        {isPlaying ? <button onClick={() => setIsPlaying(false)}> pause</button> : <button onClick={() => setIsPlaying(true)}> play </button>}

      </div>
    </>
  )
}
