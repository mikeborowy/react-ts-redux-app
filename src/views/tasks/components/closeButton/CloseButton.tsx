import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { ITaskCloseButtonProps } from './@types/ITaskCloseButtonProps';
import { deleteTask } from '../../reducers/tasks/tasks';

const _CloseButton: React.FunctionComponent<ITaskCloseButtonProps> = (props: ITaskCloseButtonProps) => {
  const {
    id,
    onRemoveTask,
  } = props;

  const removeTaskHandler = () => {
    onRemoveTask(id);
  };

  return (
    <Button onClick={removeTaskHandler}>
      x
    </Button>
  );
};

const mapActionsToProps = {
  onRemoveTask: deleteTask,
};

export const CloseButton = connect(null, mapActionsToProps)(_CloseButton);
