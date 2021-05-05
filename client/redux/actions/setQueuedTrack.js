export const ADD_QUEUED_TRACK = 'ADD_QUEUED_TRACK'
export const REMOVE_QUEUED_TRACK = 'REMOVE_QUEUED_TRACK'
export const CLEAR_QUEUED_TRACKS = 'CLEAR_QUEUED_TRACKS'

export function setQueuedTrack (track) {
  return {
    type: 'ADD_QUEUED_TRACK',
    track: track
  }
}

export function removeQueuedTrack (track) {
  return {
    type: 'REMOVE_QUEUED_TRACK',
    track: track
  }
}

export function clearQueuedTracks () {
  return {
    type: 'CLEAR_QUEUED_TRACKS'
  }
}

export function updateQueuedTrackIsLiked (track) {
  return {
    type: 'UPDATE_QUEUED_TRACK_ISLIKED',
    id: track.id,
    track: track,
    index: track.index
    // isLiked: track.isLiked
  }
}
