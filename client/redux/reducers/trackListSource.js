export default function trackListSource (state = 'LIKED_SONGS', action) {
  switch (action.type) {
    case 'SET_TRACKLIST_SOURCE':
      return action.source

    default:
      return state
  }
}
