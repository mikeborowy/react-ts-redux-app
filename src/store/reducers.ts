import { combineReducers } from 'redux';
import { IRegisterReducer } from './@types/IRegistrerReducer';
import { ICreateReducer } from './@types/ICreateReducer';

export const createReducer: ICreateReducer = (reducer) => {
  return combineReducers({
    root: (state = null) => {
      return state;
    },
    ...reducer,
  });
};

export const registerReducer: IRegisterReducer = (store, name, reducer) => {
  store.async[name] = reducer;
  store.replaceReducer((createReducer(store.async) as ICreateReducer));
};

