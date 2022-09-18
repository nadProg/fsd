import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routerConfig } from 'shared/config/router/routeConfig/routeConfig';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

export const AppRouter = () => (
  <Suspense
    fallback={
      <div>
        <p>Loading...</p>
      </div>
    }
  >
    <Routes>
      {Object.values(routerConfig).map((props) => (
        <Route key={props.path} {...props}></Route>
      ))}
    </Routes>
  </Suspense>
);
