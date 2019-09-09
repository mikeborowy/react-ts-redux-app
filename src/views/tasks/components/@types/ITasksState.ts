import { Task } from '../../models/Task';
import { Name } from '../../models/Name';

export interface ITasksState {
  tasks: Task[];
  name: Name;
}
