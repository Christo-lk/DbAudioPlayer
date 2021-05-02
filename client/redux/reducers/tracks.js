import { LOAD_TRACKS } from '../actions/tracks'

export default function tracks (state = [], action) {
  switch (action.type) {
    case LOAD_TRACKS:
      return action.tracks

    default: return state
  }
}
