const getSongs = require('../../api/songsApi')

export function selectedTrack (track) {
  // const { id, title, audioSrc, image } = track

  return {
    type: 'SELECTED_TRACK',
    track: track
    // title,
    // audioSrc,
    // image
  }
}

export function setSelectedTrack (track) {
  return {
    type: 'SET_SELECTED_TRACK',
    track: track
  }
}

export function toNextTrack () {
  return {
    action: 'TO_NEXT_TRACK'

  }
}
