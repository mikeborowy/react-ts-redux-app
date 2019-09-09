import { Store } from 'redux';

export interface IStore extends Store {
  async: {
    [key: string]: unknown;
  };
}
