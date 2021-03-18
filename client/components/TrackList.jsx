import React from 'react'

export default function TrackList ({ tracks }) {
  return (
    <>
      <div>
        <h1>Songs:</h1>
        {tracks.map(track => <li key={track.title}>{track.title}</li>)}
      </div>
    </>
  )
}
