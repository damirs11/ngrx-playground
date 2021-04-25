import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from '@api/auth/request/credentials';
import { User } from '@uzedo-app/api/auth/user';


@Injectable()
export class AuthService {

  private BASE_URL = '/client_api';

  constructor(private http: HttpClient) { }

  login(payload: Credentials): Observable<null> {
    const url = `${this.BASE_URL}/login`;
    return this.http.post<null>(url, payload);
  }
}
