import React, { useState } from 'react'

export default function AddSongForm () {
  const [showForm, setShowForm] = useState(true)

  const [form, setForm] = useState({
    title: '',
    artist: ''
  })

  return (
    <>
      <form className="flex flex-col" onChange={() => {}}>
        <label htmlFor='title'>title</label>
        <input type='text' id='title'/>
        <label htmlFor='artist'>artist</label>
        <input type="text" id='artist'/>
        <input type="file" id="upload" />
        <button onClick={() => setShowForm(false)}>add Song</button>
      </form>
    </>
  )
}
