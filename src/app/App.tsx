import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { useTheme } from 'shared/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

import { NavBar } from 'widgets/NavBar';

import { AppRouter } from './providers/router';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <AppRouter />
    </div>
  );
};
