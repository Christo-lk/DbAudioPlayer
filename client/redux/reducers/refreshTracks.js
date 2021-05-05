import { REFRESH_TRACKS } from '../actions/refreshTracks'

export default function refreshTracks (state = false, action) {
  switch (action.type) {
    case REFRESH_TRACKS:
      return action.boolean

    default: return state
  }
}
