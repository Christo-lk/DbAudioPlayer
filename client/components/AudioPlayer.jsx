import React, { useState } from 'react'

export default function AudioPlayer ({ tracks }) {
  console.log(tracks)

  // useState
  const [trackIndex, setTrackIndex] = useState(0)

  const {title, artist, audioSrc, image} = tracks[trackIndex]


  return (
    <>
      <img src={image} className="w-32"/>
      <h2>{title}</h2>
      <h2>{artist}</h2>
    </>
  )
}
