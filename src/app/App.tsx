import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { useTheme } from 'shared/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

import { AppRouter } from './providers/router';
import { NavBar } from 'widgets/NavBar';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar></NavBar>
      <button onClick={toggleTheme}>Сменить тему</button>
      <AppRouter />
    </div>
  );
};
