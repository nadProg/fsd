import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { useTheme } from 'shared/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';


import { AppRouter } from './providers/router';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to="/">Главная</Link>
      <br /> <br />
      <Link to="/about">О нас</Link>
      <br /> <br />
      <button onClick={toggleTheme}>Сменить тему</button>
      <AppRouter />
    </div>
  );
};
