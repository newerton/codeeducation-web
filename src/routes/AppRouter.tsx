/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import { Switch, Route as ReactRoute } from 'react-router-dom';

import routes from './index';

const AppRouter = (): any => {
  return (
    <Switch>
      {routes.map((route, key) => {
        const Route = ReactRoute;
        const routeParams = {
          key,
          component: route.component,
          ...(route.path && { path: route.path }),
          ...(route.exact && { exact: route.exact }),
        };
        return <Route {...routeParams} />;
      })}
    </Switch>
  );
};

export default AppRouter;
