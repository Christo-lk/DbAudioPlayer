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

  // returns CSS for the background of the currently selected track
  function indTrackBackground () {
    if (isSelected) {
      return 'flex ml-3 mb-1 h-12 my-1 rounded-md bg-gradient-to-r from-gray-200 hover:from-blue-50'
    } else {
      return 'flex ml-3 mb-1 h-12 my-1 rounded-md bg-gradient-to-r hover:from-blue-50'
    }
  }

  // returns CSS for conditionally rendered div on currently selected track
  function indTrackDiv () {
    if (isSelected) {
      return 'visible h-12 rounded-l-md mr-1 w-1 bg-blue-500'
    } else {
      return 'invisible h-12 rounded-l-md mr-1 w-1'
    }
  }

  return (
    <>
      <div onClick={() => clickHandler(track)} className={indTrackBackground()} >
        <div className={indTrackDiv()}></div>
        <div>
          <li className="" key={id}>{title}</li>
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
