import { combineReducers } from 'redux'

import isPlaying from './reducers/isPlaying'
import tracks from './reducers/tracks'
import selectedTrack from './reducers/selectedTrack'
import showForm from './reducers/showForm'
import refreshTracks from './reducers/refreshTracks'
import showCatPic from './reducers/showCatPic'

const rootReducer = combineReducers({
  // list reducers here
  isPlaying,
  tracks,
  selectedTrack,
  showForm,
  refreshTracks,
  showCatPic,

})

export default rootReducer
