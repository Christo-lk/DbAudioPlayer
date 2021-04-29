export default function queuedTracks (state = [], action) {
  switch (action.type) {
    case 'ADD_QUEUED_TRACK':
      return [
        ...state,
        action.track
      ]

    default:
      return state
  }
}
