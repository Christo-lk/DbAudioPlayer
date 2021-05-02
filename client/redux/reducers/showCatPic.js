import { SHOW_CAT_PIC } from '../actions/setShowCatPic'

export default function showCatPic (state = false, action) {
  switch (action.type) {
    case SHOW_CAT_PIC:
      return action.boolean

    default:
      return state
  }
}
