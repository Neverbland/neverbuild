import Home from 'containers/Home';
import Missing from 'containers/Missing';

// This is a static route configuration. It should include all of your top level
// routes, regardless of whether they are going to server render. In fact, you
// can totally point multiple routes to the same component! This is great for
// when you only need to server render a handful of routes and not your entire
// application!
const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    exact: true
  },
  {
    path: '/404',
    component: Missing,
    name: 'Missing',
    exact: true
  }
];

export default routes;
