import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err) => {
      console.log('inside the error interceptor');
      return throwError({
        status: err.status,
        statusText: err.statusText,
        er: err.error.errors,
      });
    })
  );
};
