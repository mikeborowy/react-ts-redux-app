import { Task } from '../../../models/Task';

export interface TaskAction {
  type: string;
  payload: {
    id?: number;
    task?: Task;
  };
}
