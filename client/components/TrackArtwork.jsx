import React from 'react'
import { connect } from 'react-redux'

function TrackArtwork (props) {
  const { image, title, artist } = props.selectedTrack
  const { isPlaying } = props

  return (
    <>
      <img src={image} className={isPlaying ? 'm-auto w-48 rounded-full rotate' : 'm-auto w-48 rounded-full' }/>
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
    catPic: state.catPic
  }
}

export default connect(mapStateToProps)(TrackArtwork)
