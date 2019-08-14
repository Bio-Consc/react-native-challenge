import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';

/**
 * Reducers
 */
import RootReducer from './Reducer';

export default createStore(
  RootReducer,
  applyMiddleware(Thunk)
);