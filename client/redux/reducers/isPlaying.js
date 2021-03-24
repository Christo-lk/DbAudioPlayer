export default function reducer (state = '', action) {
  switch (action.type) {
    case 'IS_PLAYING':
      return true

    case 'IS_NOT_PLAYING':
      return false
    default : return state
  }
}
