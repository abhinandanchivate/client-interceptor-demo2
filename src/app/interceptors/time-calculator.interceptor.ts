import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const timeCalculatorInterceptor: HttpInterceptorFn = (req, next) => {
  const startDateTime = Date.now();
  console.log('start time : ' + startDateTime);
  return next(req).pipe(
    tap(() => {
      const endDateTime = Date.now();
      console.log(endDateTime);
      console.log(endDateTime - startDateTime);
    })
  );
};
