import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import store from '../redux/store'

// redux actions:
import { setSelectedTrack } from '../redux/actions/selectedTrack'
import { setRefreshTracks } from '../redux/actions/refreshTracks'

// Api Calls
import { deleteSong } from '../api/songsApi'

// SVG ICON
import Delete from '../icons/delete.svg'

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

  function deleteHandler () {
    deleteSong(id)
      .then(res => {
        console.log(res, 'clicked')
        store.dispatch(setRefreshTracks(true))
        return null
      })
      .catch(err => console.log(err))
  }

  // returns CSS for the background of the currently selected track
  function indTrackBackground () {
    if (isSelected) {
      return 'flex items-center ml-3 mb-1 h-12 my-1 rounded-md bg-gradient-to-r from-gray-200 hover:from-blue-50'
    } else {
      return 'flex items-center ml-3 mb-1 h-12 my-1 rounded-md bg-gradient-to-r hover:from-blue-50'
    }
  }

  // returns CSS for conditionally rendered div on currently selected track
  function indTrackDiv () {
    if (isSelected) {
      return 'relative visible h-12 rounded-l-md mr-1 w-1 bg-blue-500'
    } else {
      return 'relative invisible h-12 rounded-l-md mr-1 w-1'
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
        <button className="absolute right-5" onClick={() => deleteHandler()}><img className="w-4 opacity-20 hover:opacity-60"src={Delete}/></button>
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
