const { getIndSong } = require('../../../server/db/dbSongs')

export default function selectedTrack (state = {}, action) {
  switch (action.type) {
    case 'SELECTED_TRACK':
      return action.track

    case 'SET_SELECTED_TRACK':
      return action.track

      // case 'TO_NEXT_TRACK':
      //   return getIndSong()

    default :
      return state
  }
}
