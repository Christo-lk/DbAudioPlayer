export function selectedTrack (track) {
  return {
    type: 'SELECTED_TRACK',
    track: track

  }
}

export function setSelectedTrack (track) {
  return {
    type: 'SET_SELECTED_TRACK',
    track: track
  }
}

export function updateIsLikedSelectedTrack (isLiked) {
  return {
    type: 'UPDATE_ISLIKED_SELECTED_TRACK',
    isLiked: isLiked
  }
}
