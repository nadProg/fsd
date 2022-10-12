import { Suspense, useState } from 'react';

import { Modal } from 'shared/ui/Modal';

import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';

import { AppRouter } from './providers/router';

export function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <Suspense fallback="App Suspense">
        <NavBar />
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <button type="button" onClick={() => setIsOpen(true)}>Modal</button>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>Content</Modal>
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
