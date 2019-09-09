import * as React from 'react';
import { connect } from 'react-redux';
import { IExampleProps } from '../@types/IExampleProps';
import { IExampleState } from '../@types/IExampleState';

const _ExampleChild: React.FC<IExampleProps> = (props: IExampleProps) => {
  const {
    text,
  } = props;

  return (
    <div>
      Component from external library:
      {' '}
      {`Child Componnet: ${text}`}
    </div>
  );
};

const mapStateToProps = (state: IExampleState) => {
  return {
    text: state.example.text,
  };
};

export const ExampleChild = connect(mapStateToProps)(_ExampleChild);
