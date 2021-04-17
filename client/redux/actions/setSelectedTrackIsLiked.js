export function setSelectedTrackIsLiked (id, isLiked) {
  return {
    type: 'SET_SELECTED_TRACK_ISLIKED',
    trackId: id,
    isLiked: isLiked
  }
}
