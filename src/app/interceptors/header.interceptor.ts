import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  // if req is having header then skip header addtion if not then add content-type header with application/json
  console.log('hello from header interceptor');
  console.log(req.headers.get('Content-Type'));
  console.log(req.headers.has('Content-Type'));
  if (!req.headers.has('Content-Type')) {
    // then we will add it.
    console.log('inside the if condition');
    req = req.clone({
      headers: req.headers.set('Content-Type', 'application/json'),
    });
  }
  console.log(req.headers.get('Content-Type'));
  return next(req);
};
