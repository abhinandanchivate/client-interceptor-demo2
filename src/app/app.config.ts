import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { retryInterceptor } from './interceptors/retry.interceptor';
import { loggerInterceptor } from './interceptors/logger.interceptor';
import { timeCalculatorInterceptor } from './interceptors/time-calculator.interceptor';
import { headerInterceptor } from './interceptors/header.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        headerInterceptor,
        // timeCalculatorInterceptor,
        // loggerInterceptor,
        // retryInterceptor({ count: 3, delay: 2000 }),
      ]) // seq of declarations : its gooing to follow the seq for execution.
    ),
    // list of all interceptors
    // if server is down still it try for 2 more attempts after every 2000
  ],
};
