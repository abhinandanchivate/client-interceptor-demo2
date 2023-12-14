import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRegisterUser } from '../../../model/iregister-user';
import { AuthService } from '../../../services/auth.service';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
  provideHttpClient,
  withInterceptors,
  withRequestsMadeViaParent,
} from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  providers: [HttpClient, AuthService, Router], // providers are responsible for loading the service instance / singleton
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  // DI.
  err: any = {};
  constructor(private authService: AuthService, private router: Router) {}
  user: IRegisterUser = {
    email: 'abhi@gmai.com',
    password: '',
    password2: '',
    name: 'advik',
  };
  // control the overall acitivties of our component
  registerSubmit() {
    console.log('hello from register');
    console.log(this.user);
    if (this.user.password === this.user.password2) {
      this.authService.registerUser(this.user).subscribe(
        (res: any) => {
          console.log(res.token);
          // in memory or cookie or local storage/session storage
          // user to Dahsboard page.
          localStorage.setItem('token', res.token);
          this.router.navigate(['/dashboard']);
        },
        (err) => {
          err.error.errors.forEach((e: any) => {
            // console.log(e.param);
            // console.log(e.msg);
            this.err[e.param] = e.msg;
          });
          console.log(this.err);
          // console.log(err.error.errors[0].param);
          // console.log(err.error.errors[0].msg);
        }
      );
    } else {
      this.err.password2 = 'passwords are not matching';
    }
  }
}
