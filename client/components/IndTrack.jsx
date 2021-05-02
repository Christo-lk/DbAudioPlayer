import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import store from '../redux/store'

// redux actions:
import { setSelectedTrack } from '../redux/actions/selectedTrack'
import { setRefreshTracks } from '../redux/actions/refreshTracks'
import { updateSelectedTrackIsLiked} from '../redux/actions/setSelectedTrackIsLiked'
import {setQueuedTrack, removeQueuedTrack} from '../redux/actions/setQueuedTrack'

// Api Calls
import { deleteSong, updateIsLiked } from '../api/songsApi'

// SVG ICON
import Delete from '../icons/delete.svg'
import heartEmpty from '../icons/heartEmpty.svg'
import heartFull from '../icons/heartFull.svg'
import Add from '../icons/add.svg'
import Remove from '../icons/remove.svg'
import VerticalOptions from '../icons/verticalOptions.svg'
import VerticalHollow from '../icons/verticalHollow.svg'

function IndTrack ({ track, selectedTrack,  trackListSource }) {
  // de structure props out of
  const { title, artist, id, isLiked } = track

  // state that selects selected track
  const [isSelected, setIsSelected] = useState(false)

  // hook to show add to queue/delete buttons
  const [showOptions, setShowOptions] = useState(false)

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

  // add track to Queued tracks
  function queuedHandler(){
    trackListSource === 'QUEUED_TRACKS' ? store.dispatch(removeQueuedTrack(track)) : store.dispatch(setQueuedTrack(track))
    showOptions && setShowOptions(false)

  }

  // handles option button click
  function optionsHandler(){
    setShowOptions(true)
    showOptions && setShowOptions(false)
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

  // CSS: Add to Queue Button
  function QueueButtonCss(){
    if(showOptions && trackListSource === 'QUEUED_TRACKS' ){
      return Remove
    } else if (showOptions){
      return Add
    }
  }

  // Conditionally render CSS display Hidden or Block
  function conditionallyRender(test){
    if(test){
      return 'block'
    }else{
      return 'hidden'
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
          <button onClick={() => isLikedHandler()} className="w-5">{isLiked ? <img className={isLiked && trackListSource === 'LIKED_TRACKS' ? `opacity-80 hover:opacity-40` : 'opacity-80'} src={heartFull}/> : <img className="opacity-50 hover:opacity-80" src={heartEmpty}/>}</button>
          <button onClick={()=> queuedHandler()}><img className={`${conditionallyRender(showOptions)} w-5 ml-1 opacity-40 hover:opacity-80`} src={QueueButtonCss()}/></button>
          <button onClick={() => deleteHandler()}><img className={`${conditionallyRender(showOptions)} w-4 ml-1 opacity-20 hover:opacity-60`}src={Delete}/></button>
          <button onClick={()=> optionsHandler()}><img className ={`w-5 opacity-40 ml-1 hover:opacity-80`} src={VerticalHollow}/></button>
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
