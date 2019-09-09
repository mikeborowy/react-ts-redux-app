
import * as React from 'react';
import { connect } from 'react-redux';
import * as styles from './Tasks.scss';
import { TodoHeader } from './todoHeader/TodoHeader';
import { TaskList } from './taskList/TaskList';
import { NameForm } from './nameForm/NameForm';
import { ITasksProps } from './@types/ITasksProps';
import { ITasksState } from './@types/ITasksState';
import { TaskForm } from './taskForm/TaskForm';

const _Tasks: React.FC<ITasksProps> = (props: ITasksProps) => {
  const {
    name,
    tasks,
  } = props;

  return (
    <div className={styles.Tasks}>
      <div className={styles.TasksHeader}>To do list (external library) tes</div>
      <TodoHeader name={name} />
      <TaskForm />
      <br />
      <NameForm />
      <br />
      <TaskList tasks={tasks} />
    </div>
  );
};

const mapStateToProps = (state: ITasksState) => {
  return {
    tasks: state.tasks,
    name: state.name.name,
  };
};

export const Tasks = connect(mapStateToProps)(_Tasks);
