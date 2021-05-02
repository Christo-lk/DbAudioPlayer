import { SELECTED_TRACK, SET_SELECTED_TRACK } from '../actions/selectedTrack'

export default function selectedTrack (state = {}, action) {
  switch (action.type) {
    case SELECTED_TRACK:
      return action.track

    case SET_SELECTED_TRACK:
      return action.track

    default :
      return state
  }
}
