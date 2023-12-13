import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { PageLayout } from './layouts/PageLayout.tsx';
import { Drink } from './pages/Drink.tsx';
import { Search } from './pages/Drinks.tsx';
import { Favorites } from './pages/Favorites.tsx';
import { Home } from './pages/Home.tsx';
import { NotFound } from './pages/NotFound.tsx';

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='' element={<PageLayout />}>
        <Route path='' element={<Home />} />
        <Route path='/drinks' element={<Search />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/drink/:id' element={<Drink />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </>,
  ),
);
