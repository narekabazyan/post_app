interface NavigationRoute {
  displayName: string;
  url: string;
}

export const NavigationRoutes: NavigationRoute[] = [
  {
    displayName: 'Home',
    url: '/',
  },
  {
    displayName: 'Users',
    url: '/users',
  },
];
export default NavigationRoutes;
