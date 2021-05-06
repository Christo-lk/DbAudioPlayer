import { ADD_TO_TRACK_HISTORY } from '../actions/trackHistory'

export default function TrackHistory (state = [], action) {
  switch (action.type) {
    case (ADD_TO_TRACK_HISTORY):
      return [
        ...state,
        action.track
      ]

    default:
      return state
  }
}
