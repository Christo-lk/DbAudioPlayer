export default function trackOrder (state = 'DEFAULT', action) {
  switch (action.type) {
    case 'SET_TRACK_ORDER':
      return action.trackOrder

    default:
      return state
  }
}
