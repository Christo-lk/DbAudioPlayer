export const SELECTED_TRACK = 'SELECTED_TRACK'
export const SET_SELECTED_TRACK = 'SET_SELECTED_TRACK'

export function selectedTrack (track) {
  return {
    type: 'SELECTED_TRACK',
    track: track

  }
}

export function setSelectedTrack (track) {
  return {
    type: 'SET_SELECTED_TRACK',
    track: track
  }
}
