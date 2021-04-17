export function setSelectedTrackIsLiked (id, isLiked) {
  return {
    type: 'SET_SELECTED_TRACK_ISLIKED',
    trackId: id,
    isLiked: isLiked
  }
}

export function updateSelectedTrackIsLiked (isLiked) {
  return {
    type: 'UPDATE_SELECTED_TRACK_ISLIKED',
    isLiked: isLiked
  }
}
