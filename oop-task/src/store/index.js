import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';

import rootReducer from '../reducers';

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);
export default store;
