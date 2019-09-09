import * as React from 'react';
import { connect } from 'react-redux';
import { IExampleProps } from './@types/IExampleProps';
import { IExampleState } from './@types/IExampleState';
import { ExampleChild } from './exampleChild/ExampleChild';

class _Example extends React.PureComponent<IExampleProps, {}> {
  public render() {
    const {
      text,
    } = this.props;

    return (
      <div>
        Component from external library:
        {' '}
        {text}
        <br />
        <ExampleChild />
      </div>
    );
  }
}

const mapStateToProps = (state: IExampleState) => {
  return {
    text: state.example.text,
  };
};

export const Example = connect(mapStateToProps)(_Example);
