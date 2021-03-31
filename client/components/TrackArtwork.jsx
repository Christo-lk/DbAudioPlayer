import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import request from 'superagent'
import selectedTrack from '../redux/reducers/selectedTrack'

function TrackArtwork (props) {
  const { image, title, artist } = props.selectedTrack
  const { isPlaying, showCatPic } = props

  const [catPic, setCatPic] = useState('')

  useEffect(() => {
    request.get('https://aws.random.cat/meow')
      .then(res => {
        console.log(res.body)
        const { file } = res.body
        setCatPic(file)
        return null
      })
      .catch(err => console.log(err))
  }, [title])

  console.log(catPic)

  // turnary operator sets image src for catpic or album art
  const imageSrc = showCatPic ? catPic : image

  return (
    <>
      <img src={imageSrc} className={isPlaying ? 'm-auto h-48 w-48 rounded-full rotate' : 'm-auto h-48 w-48 rounded-full' }/>
      <div className="flex flex-col justify-center my-1">
        <h2 className="mx-auto">{title}</h2>
        <h2 className="mx-auto italic text-sm">{artist}</h2>
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
