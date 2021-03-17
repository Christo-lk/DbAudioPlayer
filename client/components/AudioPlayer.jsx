import React, { useState, useRef } from 'react'

export default function AudioPlayer ({ tracks }) {
  console.log(tracks)

  // useState
  const [trackIndex, setTrackIndex] = useState(0)

  const { title, artist, audioSrc, image } = tracks[trackIndex]

  // useRefs

  const audio = useRef(new Audio(audioSrc))

  return (
    <>
      <div>
        <img src={image} className="w-32"/>
        <h2>{title}</h2>
        <h2>{artist}</h2>
        <button onClick={() => audio.current.play()}> play </button>
      </div>
    </>
  )
}
