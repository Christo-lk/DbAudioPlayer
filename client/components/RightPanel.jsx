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
          <h2 className="text-xl font-semibold">{showForm ? 'Add Song' : 'Songs:'}</h2>
          <button className="text-3xl" onClick={() => setShowForm(true)}> +</button>
        </div>
        { showForm ? <AddSongForm/> : <TrackList2 tracks={tracks}/>}
      </div>
    </>
  )
}
