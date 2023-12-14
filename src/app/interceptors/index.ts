import { errorInterceptor } from './error.interceptor';
import { headerInterceptor } from './header.interceptor';
import { jwttokenInterceptor } from './jwttoken.interceptor';
import { loggerInterceptor } from './logger.interceptor';
import { retryInterceptor } from './retry.interceptor';
import { timeCalculatorInterceptor } from './time-calculator.interceptor';

export const httpInterceptors = [
  headerInterceptor,
  loggerInterceptor,
  // retryInterceptor({ count: 3, delay: 2000 }),
  timeCalculatorInterceptor,
  jwttokenInterceptor,
  errorInterceptor,
];
