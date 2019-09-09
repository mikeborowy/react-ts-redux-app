import { Task } from '../../../models/Task';

export interface ITaskFormProps {
  onAddTask: (task: Task) => {};
}
