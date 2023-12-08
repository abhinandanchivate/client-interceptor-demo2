import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

const headerData = {
  headers: new HttpHeaders({
    'X-Auth-Token': localStorage.getItem('token') || '',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private httpClient: HttpClient) {}

  getUserDetails() {
    return this.httpClient.get('/api/auth', headerData);
  }
}
