import React, { useState } from 'react'

export default function AddSongForm () {
  const [showForm, setShowForm] = useState(true)

  return (
    <>
      <h2>songForm</h2>
      <button onClick={() => setShowForm(false)}>add Song</button>
    </>
  )
}
