import { combineReducers } from 'redux'

import isPlaying from './reducers/isPlaying'
import tracks from './reducers/tracks'
import selectedTrack from './reducers/selectedTrack'
import refreshTracks from './reducers/refreshTracks'
import showCatPic from './reducers/showCatPic'
import selectedTrackIsLiked from './reducers/selectedTrackIsLiked'

import trackListSource from './reducers/trackListSource'

const rootReducer = combineReducers({
  // list reducers here
  isPlaying,
  tracks,
  selectedTrack,
  refreshTracks,
  showCatPic,
  trackListSource,
  selectedTrackIsLiked

})

export default rootReducer
