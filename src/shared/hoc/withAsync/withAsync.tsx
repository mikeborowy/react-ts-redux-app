import * as React from 'react';
import { store } from '../../../store/store';
import { registerReducer } from '../../../store/reducers';
import { IAsync } from './@types/IAsync';
import { IModule } from './@types/IModule';

export const withAsync: IAsync = (importedModule, name, route): React.ReactType => {
  class WithAsync extends React.PureComponent {
    public static displayName: string;

    public static route: string;

    public state = {
      component: null,
    }

    public componentDidMount() {
      (importedModule as Promise<unknown>)
        .then((module: IModule) => {
          try {
            if (module.hasOwnProperty('reducers')) {
              for (const key in module.reducers) {
                registerReducer(store, key, module.reducers[key]);
              }
            }

            this.setState({
              component: module.Component,
            });
          }
          catch (error) {
            throw new Error(error);
          }
        });
    }

    public render() {
      const {
        component,
      } = this.state;

      const Component: React.ReactType = component;

      return Component ? <Component {...this.props} /> : <div>Loading....</div>;
    }
  }

  WithAsync.displayName = `WithAsync(${name})`;
  WithAsync.route = route;
  return WithAsync;
};
