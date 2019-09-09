import { withStore } from '../../shared/hoc/withStore/withStore';
import { Tasks } from './components/Tasks';
import { name } from './reducers/name/name';
import { tasks } from './reducers/tasks/tasks';

export const Component: React.ReactType = Tasks;
export const reducers: object = {
  name,
  tasks,
};
export const Module: React.ReactType = withStore(Tasks);
