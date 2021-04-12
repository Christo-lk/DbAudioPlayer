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
      setIsSelected(false)
    }
  }, [selectedTrack])

  function clickHandler (track) {
    store.dispatch(setSelectedTrack(track))
  }

  return (
    <>
      <div onClick={() => clickHandler(track)} className='flex h-12 my-1 rounded-md bg-gray-100 hover:bg-blue-200' >
        <div className={isSelected ? 'visible h-12 rounded-l-md mr-1 w-1 bg-blue-600' : ' invisible h-12 rounded-l-md mr-1 w-1 bg-blue-600' }></div>
        <div>
          <li key={id}>{title}</li>
          <li className="text-sm italic" key={artist}>{artist}</li>
        </div>
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
