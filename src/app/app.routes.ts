import { Routes } from '@angular/router';
import { LandingComponent } from './core/components/layouts/landing/landing.component';
import { autRoutes } from './auth/auth.routes';
import { LoginComponent } from './auth/components/auth/login/login.component';
import { dashboadRoutes } from './dashboard/dashboard.routes';
import { profileRoutes } from './profile/profile.routes';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  ...autRoutes,
  ...dashboadRoutes,
  ...profileRoutes,
];
