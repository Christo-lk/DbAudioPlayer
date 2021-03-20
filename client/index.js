import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import './style.css'

// Redux
import { Provider } from 'react-redux'
import store from './redux/store'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
