export const profileRoutes = [
  {
    path: 'create-profile',
    loadComponent: () =>
      import('./components/forms/create-profile/create-profile.component').then(
        (c) => c.CreateProfileComponent
      ),
  },
];
