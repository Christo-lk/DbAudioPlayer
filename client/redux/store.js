import { createStore } from 'redux'

import rootReducer from './rootReducer'

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
    trace: true, // (action) => { return ‘trace as string’; }
    traceLimit: 25
  })
)

export default store
// export const dispatch = store.dispatch
// export const getState = store.getState
