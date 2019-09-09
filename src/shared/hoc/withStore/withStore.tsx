
import React from 'react';
import { Provider } from 'react-redux';
import { getDisplayName } from '../../helpers/getDisplayName';
import { IComponentProps } from './@types/IComponentProps';

export const withStore = (WrappedComponent: React.ReactType) => {
  const Component: React.FC<IComponentProps> = (props: IComponentProps) => {
    const {
      store,
    } = props;

    return (
      <Provider store={store}>
        <WrappedComponent />
      </Provider>
    );
  };
  Component.displayName = `WithStore(${getDisplayName(WrappedComponent)})`;
  return Component;
};
