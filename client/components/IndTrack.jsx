import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import store from '../redux/store'

// redux actions:
import { setSelectedTrack } from '../redux/actions/selectedTrack'
import { setRefreshTracks } from '../redux/actions/refreshTracks'

// Api Calls
import { deleteSong, updateIsLiked } from '../api/songsApi'

// SVG ICON
import Delete from '../icons/delete.svg'
import heartEmpty from '../icons/heartEmpty.svg'
import heartFull from '../icons/heartFull.svg'

function IndTrack ({ track, selectedTrack }) {
  // de structure props out of
  const { title, artist, id, isLiked } = track

  // state that selects selected track
  const [isSelected, setIsSelected] = useState(false)

 

  // changes the currently selected track on selectedTrack change
  useEffect(() => {
    if (id === selectedTrack.id) {
      setIsSelected(true)
    } else {
      setIsSelected(false)
    }
  }, [selectedTrack])

  // sets selected track on click
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

  // handles like / unliking song
  function isLikedHandler (e) {
  
    store.dispatch(setRefreshTracks(true))
  

    const unlike ={
      "id": `${id}`,
      "boolean": "0"
    }
    const like ={
      "id": `${id}`,
      "boolean": "1"
    }

    isLiked ? updateIsLiked(unlike) : updateIsLiked(like)
  }

  // returns CSS for the background of the currently selected track
  function indTrackBackground () {
    if (isSelected) {
      return 'flex relative items-center ml-3 mb-1 h-12 my-1 rounded-md bg-gradient-to-r from-gray-200 hover:from-blue-50'
    } else {
      return 'flex relative items-center ml-3 mb-1 h-12 my-1 rounded-md bg-gradient-to-r hover:from-blue-50'
    }
  }

  // returns CSS for conditionally rendered div on currently selected track
  function selectedTrackDiv () {
    if (isSelected) {
      return 'relative visible h-12 rounded-l-md mr-1 w-1 bg-blue-500'
    } else {
      return 'relative invisible h-12 rounded-l-md mr-1 w-1'
    }
  }

  return (
    <>
      <div onClick={() => clickHandler(track)} className={indTrackBackground()} >

        <div className={selectedTrackDiv()}></div>
        <div>
          <li className="" key={id}>{title}</li>
          <li className="text-sm italic" key={artist}>{artist}</li>
        </div>

        <div className="flex items-center absolute right-5">
          <button onClick={() => isLikedHandler()} className="w-5 mr-2">{isLiked ? <img src={heartFull}/> : <img src={heartEmpty}/>}</button>
          <button onClick={() => deleteHandler()}><img className="w-4 opacity-20 hover:opacity-60"src={Delete}/></button>
        </div>
      </div>
    </>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    selectedTrack: state.selectedTrack,
    track: ownProps.track
  }
}

export default connect(mapStateToProps)(IndTrack)
