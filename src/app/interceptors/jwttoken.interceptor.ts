import { HttpInterceptorFn } from '@angular/common/http';

export const jwttokenInterceptor: HttpInterceptorFn = (req, next) => {
  // token to the req except the login and register

  if (req.url.includes('login') && req.url.includes('register')) {
    return next(req);
  }

  req = req.clone({
    headers: req.headers.set(
      'x-auth-token',
      localStorage.getItem('token') || ''
    ),
  });

  return next(req);
};
