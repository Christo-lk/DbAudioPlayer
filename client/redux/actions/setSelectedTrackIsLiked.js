
export const SET_SELECTED_TRACK_ISLIKED = 'SET_SELECTED_TRACK_ISLIKED'
export const UPDATE_SELECTED_TRACK_ISLIKED = 'UPDATE_SELECTED_TRACK_ISLIKED'

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
