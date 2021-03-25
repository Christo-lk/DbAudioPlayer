import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import store from '../redux/store'

// redux actions:
import { setSelectedTrack } from '../redux/actions/selectedTrack'

function IndTrack ({ track, title, artist, id, selectedTrack }) {
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    if (id === selectedTrack.id) {
      setIsSelected(true)
    } else {
      return null
    }
  }, [selectedTrack])

  console.log('isSelected on IndTrack', isSelected)

  function clickHandler (track) {
    store.dispatch(setSelectedTrack(track))
  }

  return (
    <>
      <div onClick={() => clickHandler(track)} className="my-1 p-1 rounded-md bg-gray-100 hover:bg-blue-200">

        <li key={title}>{title}</li>
        <li className="text-sm italic" key={artist}>{artist}</li>
      </div>
    </>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    selectedTrack: state.selectedTrack,
    track: ownProps.track,
    title: ownProps.title,
    artist: ownProps.artist,
    id: ownProps.id
  }
}

export default connect(mapStateToProps)(IndTrack)
