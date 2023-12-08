import { Injectable } from '@angular/core';
import { IRegisterUser } from '../model/iregister-user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
}) // this is a serivice and singleton instance should be created.

// httpClient Service : httpmodule .
export class AuthService {
  // httpClient service : we have to inject hte service via constructor
  constructor(private httpClient: HttpClient) {}

  registerUser(user: IRegisterUser) {
    //http://localhost:5000/api/users
    //post method
    return this.httpClient.post('/api/users', user);
  }
}
