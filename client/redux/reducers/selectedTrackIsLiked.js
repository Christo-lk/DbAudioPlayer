import { SET_SELECTED_TRACK_ISLIKED, UPDATE_SELECTED_TRACK_ISLIKED } from '../actions/setSelectedTrackIsLiked'

export default function selectedTrackIsLiked (state = {}, action) {
  switch (action.type) {
    case SET_SELECTED_TRACK_ISLIKED:
      return {
        trackId: action.trackId,
        isLiked: action.isLiked
      }

    case UPDATE_SELECTED_TRACK_ISLIKED:
      return {
        ...state,
        isLiked: action.isLiked
      }

    default:
      return state
  }
}
