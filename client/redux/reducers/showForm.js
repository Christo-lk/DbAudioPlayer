export default function showForm (state = false, action) {
  switch (action.type) {
    case 'SET_SHOW_FORM':
      return action.boolean

    default: return state
  }
}
