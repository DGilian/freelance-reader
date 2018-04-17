import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/Pages/App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './index.css'
import rootReducer from './reducers'
import middleWares from './middleWares'

const store = createStore(rootReducer, middleWares)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
