import React, { useState, useEffect } from 'react'
import AddSongForm from './AddSongForm'
import TrackList2 from './TrackList2'

export default function RightPanel ({ tracks }) {
  const [showForm, setShowForm] = useState(false)

  console.log(showForm)

  return (
    <>
      <div className="ml-10 px-3 border-2 border-black rounded-md overflow-auto">
        <div className="h-10 flex">
          <h2 className="text-xl font-semibold">Songs:</h2>
          <button className="text-3xl" onClick={() => setShowForm(true)}> +</button>
        </div>
        { showForm ? <AddSongForm/> : <TrackList2 tracks={tracks}/>
          // {tracks.map(track =>
          //   <div key={track.title} className="my-1 p-1 rounded-md bg-gray-100 hover:bg-blue-200">
          //     <li key={track.title}>{track.title}</li>
          //     <li className="text-sm italic" key={track.artist}>{track.artist}</li>
          //   </div>
          // )}

        }

      </div>
    </>
  )
}
