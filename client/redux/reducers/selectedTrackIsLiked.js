export default function selectedTrackIsLiked (state = {}, action) {
  switch (action.type) {
    case 'SET_SELECTED_TRACK_ISLIKED':
      return {
        trackId: action.trackId,
        isLiked: action.isLiked
      }
    default:
      return state
  }
}
