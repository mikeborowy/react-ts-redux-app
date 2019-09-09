import * as React from 'react';
import { Grid, Table } from '@material-ui/core';
import { ITaskListProps } from './@types/ITaskListProps';
import { Task } from '../../models/Task';
import { TaskListItem } from './TaskListItem';

export const TaskList: React.FC<ITaskListProps> = (props: ITaskListProps) => {
  const {
    tasks,
  } = props;

  return (
    <Grid>
      <Table>
        <thead>
          <tr>
            <th>task</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task: Task) => {
            return (
              <TaskListItem
                key={task.id}
                {...task}
              />
            );
          })}
        </tbody>
      </Table>
    </Grid>
  );
};
