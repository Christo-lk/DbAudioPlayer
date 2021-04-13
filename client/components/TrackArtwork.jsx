import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import request from 'superagent'
import selectedTrack from '../redux/reducers/selectedTrack'

function TrackArtwork (props) {
  const { image, title, artist } = props.selectedTrack
  const { isPlaying, showCatPic } = props

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

  function imgClassSelector () {
    if (isPlaying) {
      return 'm-auto h-48 w-48 rounded-full rotate shadow-inner'
    } else {
      return 'm-auto h-48 w-48 rounded-full'
    }
  }

  return (
    <>
      <img src={imageSrc} className={imgClassSelector()}/>
      <div className="flex flex-col justify-center my-1 truncate">
        <h2 className="mx-auto truncate text-lg font-semibold">{title}</h2>
        <h2 className="mx-auto italic">{artist}</h2>
      </div>
    </>

  )
}

function mapStateToProps (state) {
  return {
    selectedTrack: state.selectedTrack,
    isPlaying: state.isPlaying,
    showCatPic: state.showCatPic
  }
}

export default connect(mapStateToProps)(TrackArtwork)
