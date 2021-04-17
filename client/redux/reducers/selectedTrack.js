export default function selectedTrack (state = {}, action) {
  switch (action.type) {
    case 'SELECTED_TRACK':
      return action.track

    case 'SET_SELECTED_TRACK':
      return action.track

    case 'UPDATE_ISLIKED_SELECTED_TRACK':
      return {
        ...state,
        isLiked: action.isLiked
      }

    default :
      return state
  }
}
