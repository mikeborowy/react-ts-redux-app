import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { store } from '../store/store';
import { history } from '../shared/helpers/history';
import { View } from '../views/views';

const _App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <View.Layout>
          <Switch>
            <Route
              component={View.Home}
              path={View.Home.route}
            />
            <Route
              component={View.Tasks}
              path={View.Tasks.route}
            />
            <Route
              component={View.Example}
              path={View.Example.route}
            />
          </Switch>
        </View.Layout>
      </Router>
    </Provider>
  );
};

export const App = module.hot ? hot(module)(_App) : _App;

