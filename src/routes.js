import HomePage from './pages/home-page';
import CountryPage from './pages/country-page';
import ContinentPage from './pages/continent-page';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/continent/:code',
    component: ContinentPage,
  },
  {
    path: '/country/:code',
    component: CountryPage,
  },
];

export default routes;
