import * as React from 'react';
import './TaskForm.scss';
import { connect } from 'react-redux';
import { Button, Grid } from '@material-ui/core';
import { ITaskFormState } from './@types/ITaskFormState';
import { addTask } from '../../reducers/tasks/tasks';
import { ITaskFormProps } from './@types/ITaskFormProps';
import { Task } from '../../models/Task';

class _TaskForm extends React.Component<ITaskFormProps, ITaskFormState> {
  public constructor(props: ITaskFormProps) {
    super(props);
    this.state = {
      currentTask: '',
      nextTaskId: 0,
    };
  }

  private onAddTask() {
    const {
      onAddTask,
    } = this.props;

    const {
      nextTaskId,
      currentTask,
    } = this.state;

    const task: Task = {
      id: nextTaskId,
      description: currentTask,
    };

    onAddTask(task);
    this.updateStateOnSubmit();
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.onAddTask();
  }

  private inputChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      currentTask: event.currentTarget.value,
    });
  }

  private updateStateOnSubmit() {
    this.setState((prevState) => {
      return {
        currentTask: '',
        nextTaskId: prevState.nextTaskId + 1,
      };
    });
  }

  public render() {
    const {
      currentTask,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Grid container>
          <Grid
            item
            xs={12}
          >
            <input
              className="form-input"
              onChange={this.inputChange}
              placeholder="add a task"
              type="text"
              value={currentTask}
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Button
              type="submit"
            >
              Add task
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

const mapActionsToProps = {
  onAddTask: addTask,
};

export const TaskForm = connect(null, mapActionsToProps)(_TaskForm);
