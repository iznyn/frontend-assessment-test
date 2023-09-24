import { lazy } from 'react';
import { createRoutesFromElements, Route } from 'react-router-dom';
import Layout from '../components/Layout';

const HomePage = lazy(() => import('../containers/Home'));
const PlanetPage = lazy(() => import('../containers/Planet'));
const FavoritePage = lazy(() => import('../containers/Favorite'));

export const routesConfig = createRoutesFromElements(
  <>
    <Route path='/' element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path='/planet/:id' element={<PlanetPage />} />
      <Route path='/favorite' element={<FavoritePage />} />
    </Route>
  </>
);
