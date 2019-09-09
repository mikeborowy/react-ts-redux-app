import { Task } from '../../../models/Task';

export interface ITaskListItemProps extends Task {
  [key: string]: number | string;
}
