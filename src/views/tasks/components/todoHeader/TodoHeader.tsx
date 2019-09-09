import * as React from 'react';
import { ITodoHeaderProps } from './@types/ITodoHeaderProps';
import * as styles from './TodoHeader.scss';

export const TodoHeader: React.FunctionComponent<ITodoHeaderProps> = (props: ITodoHeaderProps) => {
  const {
    name,
  } = props;

  return (
    <h1 className={styles.Header}>
      React typescript todo list
      {' '}
      {name}
    </h1>
  );
};
