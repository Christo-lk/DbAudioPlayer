import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import store from '../redux/store'

// redux actions:
import { setSelectedTrack } from '../redux/actions/selectedTrack'
import { setRefreshTracks } from '../redux/actions/refreshTracks'
import { updateSelectedTrackIsLiked} from '../redux/actions/setSelectedTrackIsLiked'
import {setQueuedTrack} from '../redux/actions/setQueuedTrack'

// Api Calls
import { deleteSong, updateIsLiked } from '../api/songsApi'

// SVG ICON
import Delete from '../icons/delete.svg'
import heartEmpty from '../icons/heartEmpty.svg'
import heartFull from '../icons/heartFull.svg'
import Add from '../icons/add.svg'

function IndTrack ({ track, selectedTrack, showDeleteButton, trackListSource }) {
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
    // store.dispatch(setSelectedTrackIsLiked(track.id, track.isLiked))
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

  // add track to Qued tracks
  function queuedHandler(){
    store.dispatch(setQueuedTrack(track))
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
      return 'relative visible h-12 mr-1 w-1 bg-blue-500'
    } else {
      return 'relative invisible h-12 mr-1 w-1'
    }
  }

  return (
    <>
      <div className={indTrackBackground()} >
        <div className={selectedTrackDiv()}></div>
        <div onClick={() => clickHandler(track)} className="w-full">
          <li className="font-semibold" key={id}>{title}</li>
          <li className="text-sm italic" key={artist}>{artist}</li>
        </div>

        <div className="flex items-center absolute right-5">
          <button onClick={() => isLikedHandler()} className="w-5 mr-2">{isLiked ? <img className={isLiked && trackListSource === 'LIKED_TRACKS' ? `opacity-80 hover:opacity-40` : 'opacity-80'} src={heartFull}/> : <img className="opacity-50 hover:opacity-80" src={heartEmpty}/>}</button>
          <button onClick={()=> queuedHandler()}><img className="w-5 opacity-40 hover:opacity-80" src={Add}/></button>
          <button onClick={() => deleteHandler()}><img className={`${showDeleteButton ? 'block' : 'hidden'} w-4 opacity-20 hover:opacity-60`}src={Delete}/></button>
        </div>
      </div>
    </>
  )
} 

function mapStateToProps (state, ownProps) {
  return {
    selectedTrack: state.selectedTrack,
    track: ownProps.track,
    selectedTrackIsLiked: state.selectedTrackIsLiked,
    trackListSource: state.trackListSource
  }
}

export default connect(mapStateToProps)(IndTrack)
