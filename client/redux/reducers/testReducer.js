const reducer = (state = '', action) => {
  switch (action.type) {
    case 'TEST':
      return 'it Works'
    default: return state
  }
}

export default reducer
