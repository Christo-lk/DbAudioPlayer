export const ADD_TO_TRACK_HISTORY = 'ADD_TO_TRACK_HISTORY'

export function addToTrackHistory (track) {
  return {
    type: ADD_TO_TRACK_HISTORY,
    track: track
  }
}
