import { SET_TRACKLIST_SOURCE } from '../actions/setTrackListSource'

export default function trackListSource (state = 'ALL_TRACKS', action) {
  switch (action.type) {
    case SET_TRACKLIST_SOURCE:
      return action.source

    default:
      return state
  }
}
