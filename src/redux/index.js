import {applyMiddleware, createStore} from 'redux';

import thunk from 'redux-thunk';

const middleware = [thunk];
import rootReducer from './reducers';

const initial_state = {};

export default createStore(
  rootReducer,
  initial_state,
  applyMiddleware(...middleware),
);
