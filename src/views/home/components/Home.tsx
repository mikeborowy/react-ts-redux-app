import * as React from 'react';
import { svgGFX } from '../../../assets/index';

export class Home extends React.Component {
  public componentDidMount(): void {
    // eslint-disable-next-line
    console.log('This is Home Module');
  }

  public render() {
    return (
      <div>
        Home Sweet Home
        <img
          alt="omage"
          src={svgGFX.logo}
        />
      </div>
    );
  }
}
