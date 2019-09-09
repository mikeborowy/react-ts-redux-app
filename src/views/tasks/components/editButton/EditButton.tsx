import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { ITaskEditButtonProps } from './@types/ITaskEditButtonProps';
import { deleteTask } from '../../reducers/tasks/tasks';
import * as styles from './EditButton.scss';

const _EditButton: React.FunctionComponent<ITaskEditButtonProps> = (props: ITaskEditButtonProps) => {
  const {
    id, onEditTask,
  } = props;

  const editTaskHandle = () => {
    onEditTask(id);
  };

  return (
    <Button
      className={styles.EditButton}
      onClick={editTaskHandle}
    >
      edit
    </Button>
  );
};

const mapActionsToProps = {
  onEditTask: deleteTask,
};

export const EditButton = connect(null, mapActionsToProps)(_EditButton);

