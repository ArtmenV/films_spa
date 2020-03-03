import { createStore, applyMiddleware } from 'redux'
import rootReducer from './root-reducer'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      loggerMiddleware,
      thunkMiddleware
    )
  )
)

export default store