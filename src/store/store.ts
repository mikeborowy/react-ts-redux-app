import { createStore, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import { createReducer } from './reducers';
import { ICreateReducer } from './@types/ICreateReducer';
import { IStore } from './@types/IStore';

const middlewareConfig = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(reduxThunk, reduxPromise);
  }

  return compose(
    applyMiddleware(reduxThunk, reduxPromise),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (func: Function) => {
        return func;
      },
  );
};

export const store: IStore = (() => {
  const initialState = {};

  const store = createStore(
    (createReducer() as ICreateReducer),
    initialState,
    middlewareConfig()
  );

  return {
    ...store,
    async: {},
  };
})();
