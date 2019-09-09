import { Task } from '../../models/Task';
import { TaskAction } from './types/taskActions';

export const ADD_TASK = 'tasks:addTask';
export const DELETE_TASK = 'tasks:deleteTask';

export function addTask(newTask: Task) {
  return {
    type: ADD_TASK,
    payload: {
      task: newTask,
    },
  };
}

export function deleteTask(id: number) {
  return {
    type: DELETE_TASK,
    payload: {
      id,
    },
  };
}

const initialState: Task[] = [];

export const tasks = (state: Task[] = initialState, action: TaskAction) => {
  let newState: Task[] = [];
  switch (action.type) {
    case ADD_TASK:
      newState = [
        ...state,
        action.payload.task,
      ];
      return newState;
    case DELETE_TASK:
      return state.filter((task) => {
        return task.id !== action.payload.id;
      });
    default:
      return state;
  }
};
