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
