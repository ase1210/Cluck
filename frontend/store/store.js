import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from '../middleware/thunk';
import rootReducer from '../reducers/root_reducer';
import {
  logger
} from 'redux-logger';

const configureStore = (preloadedState = {}) => (
  process.env.NODE_ENV === 'production' ?
  createStore(rootReducer, preloadedState, applyMiddleware(thunk)) :
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))

);

export default configureStore;