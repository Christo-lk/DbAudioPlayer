import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import request from 'superagent'
import store from '../redux/store'

// SVG ICONS
import heartEmpty from '../icons/heartEmpty.svg'
import heartFull from '../icons/heartFull.svg'

// ACTION
import {setRefreshTracks} from '../redux/actions/refreshTracks'
import {updateIsLikedSelectedTrack} from '../redux/actions/selectedTrack'


// API
import {updateIsLiked} from '../api/songsApi'



function TrackArtwork (props) {
  const { image, title, artist, isLiked, id } = props.selectedTrack
  const { isPlaying, showCatPic, tracks } = props

  const [catPic, setCatPic] = useState('')
  const [catPicLoaded, setCatPicLoaded] = useState(false)

  useEffect(() => {
    request.get('https://aws.random.cat/meow')
      .then(res => {
        const { file } = res.body
        setCatPic(file)
        setCatPicLoaded(true)
        return null
      })
      .catch(err => console.log(err))
  }, [title])

  // turnary operator sets image src for catpic or album art
  const imageSrc = showCatPic ? catPic : image

  // return CSS class and makes track art spin
  function imgClassSelector () {
    if (isPlaying) {
      return 'm-auto h-52 w-52 rounded-full rotate shadow-inner'
    } else {
      return 'm-auto h-52 w-52 rounded-full z-10'
    }
  }

  // triggered when like heart is clicked
  function isLikedHandler (e) {
      store.dispatch(setRefreshTracks(true))
      // store.dispatch(setSelectedTrack())
  
    const unlike ={
      "id": `${id}`,
      "boolean": "0"
    }
    const like ={
      "id": `${id}`,
      "boolean": "1"
    }

    isLiked ? updateIsLiked(unlike) : updateIsLiked(like)
    // isLiked ? store.dispatch(updateIsLikedSelectedTrack(0)) : store.dispatch(updateIsLikedSelectedTrack(1))
  }

  function heartSvgConditional(){
    tracks.map(track => {
      if (track.id === id && track.isLiked === 1){
        return <img className="opacity-80" src={heartFull}/>
      } else {
        return <img className="opacity-50 hover:opacity-80" src={heartEmpty}/>
      }
    })
  }


  return (
    <>
      <div className="flex flex-col mt-10">
        <div className="w-auto relative">
          <img src={imageSrc} className={imgClassSelector()}/>
          {/* <div className="w-44 h-44 bg-yellow-400 z-0 absolute"></div> */}
        </div>
        <div className="flex flex-row relative py-1">
          <div className="flex flex-col truncate">
            <h2 className=" truncate text-2xl font-semibold">{title}</h2>
            <h2 className=" text-italic italic">{artist}</h2>
          </div>
          <button onClick={() => isLikedHandler()} className="w-5 mr-2 mt-2 absolute right-5 ">{isLiked ? <img className="opacity-80" src={heartFull}/> : <img className="opacity-50 hover:opacity-80" src={heartEmpty}/>}</button>
          {/* <button onClick={() => isLikedHandler()} className="w-5 mr-2 mt-2 absolute right-5 ">{heartSvgConditional()}</button> */}
        </div>
      </div>
    </>

  )
}

function mapStateToProps (state) {
  return {
    selectedTrack: state.selectedTrack,
    isPlaying: state.isPlaying,
    showCatPic: state.showCatPic,
    tracks: state.tracks
  }
}

export default connect(mapStateToProps)(TrackArtwork)
