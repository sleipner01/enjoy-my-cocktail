import './PageLayout.css';

import type { FC } from 'react';
import { Outlet } from 'react-router';

import { Navbar } from '../components/navbar/Navbar';

export const PageLayout: FC = () => (
  <main>
    <Navbar />
    <section>
      <Outlet />
    </section>
  </main>
);
