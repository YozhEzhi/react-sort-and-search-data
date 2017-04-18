import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from '../reducers';

function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk, createLogger()),
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default configureStore();

