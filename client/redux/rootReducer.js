import { combineReducers } from 'redux'

import isPlaying from './reducers/isPlaying'
import tracks from './reducers/tracks'
import selectedTrack from './reducers/selectedTrack'
import { showForm } from './reducers/showForm'

const rootReducer = combineReducers({
  // list reducers here
  isPlaying,
  tracks,
  selectedTrack,
  showForm

})

export default rootReducer
