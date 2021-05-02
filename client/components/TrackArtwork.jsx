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
import {updateSelectedTrackIsLiked} from '../redux/actions/setSelectedTrackIsLiked'


// API
import {updateIsLiked} from '../api/songsApi'

// db function that retrieves all songs
import { getSongs} from '../api/songsApi'

function TrackArtwork (props) {
  // destructuring props from redux
  const { image, title, artist, id } = props.selectedTrack
  const { isPlaying, showCatPic, tracks, selectedTrackIsLiked, refreshTracks } = props
  const { isLiked } = selectedTrackIsLiked

  const [catPic, setCatPic] = useState('')
  const [catPicLoaded, setCatPicLoaded] = useState(false)

  // cat API that retrieves photo of random cat
  useEffect(() => {

    if(showCatPic){
      request.get('https://aws.random.cat/meow')
      .then(res => {
        const { file } = res.body
        setCatPic(file)
        setCatPicLoaded(true)
        return null
      })
      .catch(err => console.log(err))
    }
  }, [title])


  // useEffect changes heart SVG when user likes track in tracklist
  useEffect(()=>{  

    getSongs()
      .then(result => { 
        result.map( track => {if (track.id === selectedTrackIsLiked.trackId){
          store.dispatch(updateSelectedTrackIsLiked(track.isLiked))
        } else{
          return null
        }
})
      })

},[refreshTracks])

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
  
    const unlike ={
      "id": `${id}`,
      "boolean": "0"
    }
    const like ={
      "id": `${id}`,
      "boolean": "1"
    }

    isLiked ? updateIsLiked(unlike) : updateIsLiked(like)
    isLiked ? store.dispatch(updateSelectedTrackIsLiked(0)) : store.dispatch(updateSelectedTrackIsLiked(1))
  }

  function heartSvgConditional(){
      if (isLiked){
        return <img className="opacity-80" src={heartFull}/>
      } else {
        return <img className="opacity-50 hover:opacity-80" src={heartEmpty}/>
      }
  }


  return (
    <>
      <div className="flex flex-col mt-9">
        <div className="w-auto relative">
          <img src={imageSrc} className={imgClassSelector()}/>
          {/* <div className="w-44 h-44 bg-yellow-400 z-0 absolute"></div> */}
        </div>
        <div className="flex flex-row relative py-1 mt-3">
          <div className="flex flex-col truncate">
            <h2 className=" truncate text-2xl font-semibold">{title}</h2>
            <h2 className=" text-italic italic">{artist}</h2>
          </div>
          {/* <button onClick={() => isLikedHandler()} className="w-5 mr-2 mt-2 absolute right-5 ">{isLiked ? <img className="opacity-80" src={heartFull}/> : <img className="opacity-50 hover:opacity-80" src={heartEmpty}/>}</button> */}
          <button onClick={() => isLikedHandler()} className="w-5 mr-2 mt-2 absolute right-5 ">{heartSvgConditional()}</button>
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
    tracks: state.tracks,
    selectedTrackIsLiked: state.selectedTrackIsLiked,
    refreshTracks: state.refreshTracks
  }
}

export default connect(mapStateToProps)(TrackArtwork)
