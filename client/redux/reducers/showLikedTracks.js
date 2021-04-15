export default function showLikedTracks (state = false, action) {
  switch (action.type) {
    case 'SET_SHOW_LIKED_TRACKS':
      return action.boolean

    default:
      return state
  }
}
