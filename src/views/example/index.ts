
import { withStore } from '../../shared/hoc/withStore/withStore';
import { Example } from './components/Example';
import { example } from './reducers/example/example';

export const Component: React.ReactType = Example;
export const reducers: object = {
  example,
};
export const Module: React.ReactType = withStore(Example);
