import HomePage from './pages/home-page';
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
];

export default routes;
