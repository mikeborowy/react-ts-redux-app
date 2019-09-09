import { Example } from '../../models/example/Example';
import { IAction } from './@types/IAction';

const initialState: Example = {
  text: 'example init',
};

export const example = (state: Example = initialState, action: IAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
