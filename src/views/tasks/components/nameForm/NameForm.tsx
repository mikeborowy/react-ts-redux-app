import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Grid } from '@material-ui/core';
import * as styles from './NameForm.scss';
import { INameFormState } from './@types/INameFormState';
import { INameFormProps } from './@types/INameFormProps';
import { setName } from '../../reducers/name/name';
import { Name } from '../../models/Name';

class _NameForm extends React.Component<INameFormProps, INameFormState> {
  public constructor(props: INameFormProps) {
    super(props);
    this.state = {
      currentName: '',
    };
  }

  private setName(): void {
    const {
      onSetName,
    } = this.props;

    const {
      currentName,
    } = this.state;

    const name: Name = {
      name: currentName,
    };

    onSetName(name);
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    this.setName();
  }

  private inputChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      currentName: event.currentTarget.value,
    });
  }

  public render() {
    const {
      currentName,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Grid>
          <Grid
            item
            xs={12}
          >
            <input
              className={styles.FormInput}
              onChange={this.inputChange}
              placeholder="Select your board name"
              type="text"
              value={currentName}
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Button type="submit">
              Set name
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

const mapActionsToProps = {
  onSetName: setName,
};

export const NameForm = connect(null, mapActionsToProps)(_NameForm);
