import { createStore, combineReducers, applyMiddleware } from 'redux'
import messageReducer from './reducers/message'
import key, * as keyReducer from './reducers/keyReducer';
// import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import { routerReducer } from 'react-router-redux'
import { createHashHistory } from 'history'
import { routerMiddleware} from 'react-router-redux'

// const logger = createLogger({ });

const history = createHashHistory()
const middleware = routerMiddleware(history)
const reducer = combineReducers({
  routerReducer,
  key
})
const store = createStore(
  reducer,
  applyMiddleware(middleware, promiseMiddleware({ promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']}))
)

export default store;
