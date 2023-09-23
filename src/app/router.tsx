import { lazy } from 'react';
import { createRoutesFromElements, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../containers/Home'));
const PlanetPage = lazy(() => import('../containers/Planet'));
const WishlistPage = lazy(() => import('../containers/Wishlist'));

export const routesConfig = createRoutesFromElements(
  <>
    <Route path='/' element={<HomePage />} />
    <Route path='/planet/:id' element={<PlanetPage />} />
    <Route path='/wishlist' element={<WishlistPage />} />
  </>
);
