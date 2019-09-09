import React from 'react';
import { EditButton } from '../editButton/EditButton';
import { CloseButton } from '../closeButton/CloseButton';
import { ITaskListItemProps } from './@types/ITaskListItemProps';
import * as styles from './TaskList.scss';

export const TaskListItem: React.FC<ITaskListItemProps> = (props: ITaskListItemProps) => {
  const {
    id,
    description,
  } = props;

  return (
    <tr className={styles.TaskListItem}>
      <td>{description}</td>
      <td>
        <EditButton id={id} />
        <CloseButton id={id} />
      </td>
    </tr>
  );
};
