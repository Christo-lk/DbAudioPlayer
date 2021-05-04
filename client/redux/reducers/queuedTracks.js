export default function queuedTracks (state = [], action) {
  switch (action.type) {
    case 'ADD_QUEUED_TRACK':
      return [
        ...state,
        action.track
      ]

    case 'REMOVE_QUEUED_TRACK':
      return state.filter(result => {
        return result.id !== action.track.id
      })

    case 'CLEAR_QUEUED_TRACKS':
      return []

    default:
      return state
  }
}
