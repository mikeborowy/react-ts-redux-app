import { IStore } from './IStore';

export interface IRegisterReducer {
  (store: IStore, name: string, reducer: {});
}
