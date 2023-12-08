import { RouterModule, Routes } from '@angular/router';

export const dashboadRoutes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dash/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
];
