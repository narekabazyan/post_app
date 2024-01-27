interface NavigationRoute {
  displayName: string;
  url: string;
}

export const navigationRoutes: NavigationRoute[] = [
  {
    displayName: 'Home',
    url: '/',
  },
  {
    displayName: 'Users',
    url: '/users',
  },
];
export default navigationRoutes;
