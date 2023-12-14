export const profileRoutes = [
  {
    path: 'create-profile',
    loadComponent: () =>
      import('./components/forms/create-profile/create-profile.component').then(
        (c) => c.CreateProfileComponent
      ),
  },
  {
    path: 'add-experience',
    loadComponent: () =>
      import('./components/forms/add-experience/add-experience.component').then(
        (c) => c.AddExperienceComponent
      ),
  },
];
