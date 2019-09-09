import * as React from 'react';
import { Link } from 'react-router-dom';
import { ILayoutProps } from './@types/ILayoutProps';

export class Layout extends React.PureComponent<{}, ILayoutProps> {
  public render() {
    const {
      children,
    } = this.props;
    return (
      <div>
        This is Layout shared among app
        <nav>
          <Link to="/home">Home | </Link>
          <Link to="/tasks">Tasks | </Link>
          <Link to="/example">Example</Link>
        </nav>
        {children}
      </div>
    );
  }
}
