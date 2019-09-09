import {
  withAsync,
} from '../shared/hoc/withAsync/withAsync';

const registeredViews = {
  Layout: withAsync(
    import(
      /* webpackChunkName: "layout" */
      './layout'
    ) as unknown,
    'Layout'
  ),
  Home: withAsync(
    import(
      /* webpackChunkName: "home" */
      './home'
    ) as unknown,
    'Home',
    '/home'
  ),
  Tasks: withAsync(
    import(
      /* webpackChunkName: "tasks" */
      './tasks'
    ) as unknown,
    'Tasks',
    '/tasks'
  ),
  Example: withAsync(
    import(
      /* webpackChunkName: "example" */
      './example'
    ) as unknown,
    'Example',
    '/example'
  ),
};

export const View = {
  ...registeredViews,
};
