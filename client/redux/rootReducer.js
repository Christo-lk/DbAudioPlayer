import { combineReducers } from 'redux'

import testReducer from './reducers/testReducer'
import isPlaying from './reducers/isPlaying'
import tracks from './reducers/tracks'

const rootReducer = combineReducers({
  // list reducers here
  isPlaying: isPlaying,
  tracks: tracks

})

export default rootReducer
