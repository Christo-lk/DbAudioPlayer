const initialState = {
  color: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GREEN':
      return 
      {

        color: 'GREEN'
      }

    default: return state
  }
}

export default reducer
