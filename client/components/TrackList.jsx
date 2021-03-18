import React from 'react'

export default function TrackList ({ tracks }) {
  return (
    <>
      <div className="ml-10 px-3 bg-yellow-200">
        <div className="bg-red-200 h-10 ">
          <h2>Songs:</h2>
        </div>
        {tracks.map(track =>
          <div key={track.title} className="my-1 p-1 rounded-md bg-gray-100 hover:bg-blue-100">
            <li key={track.title}>{track.title}</li>
            <li className="text-sm italic" key={track.artist}>{track.artist}</li>
          </div>
        )}
      </div>
    </>
  )
}
