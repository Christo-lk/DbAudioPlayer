import { SET_SHUFFLE } from '../actions/shuffle'

export default function shuffle (state = false, action) {
  switch (action.type) {
    case SET_SHUFFLE:
      return action.shuffle

    default :
      return state
  }
}
