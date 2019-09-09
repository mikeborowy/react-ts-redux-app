import { Name } from '../../models/Name';
import { NameAction } from './types/nameAction';

export const SET_NAME = 'name:set';

export function setName(name: Name) {
  return {
    type: SET_NAME,
    payload: {
      name,
    },
  };
}

const initialState: Name = {
  name: '',
};

export const name = (state: Name = initialState, action: NameAction) => {
  switch (action.type) {
    case SET_NAME:
      return action.payload.name;
    default:
      return state;
  }
};

