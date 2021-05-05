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

    case 'UPDATE_QUEUED_TRACK_ISLIKED':
      return state.splice(1, 1, action.track)

    case 'CLEAR_QUEUED_TRACKS':
      return []

    default:
      return state
  }
}
