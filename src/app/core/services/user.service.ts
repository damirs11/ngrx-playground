import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from '@api/auth/request/credentials';
import { User } from '@uzedo-app/api/auth/user';


@Injectable()
export class UserService {

  private BASE_URL = '/client_api/user';

  constructor(private http: HttpClient) { }

  current(): Observable<User> {
    const url = `${this.BASE_URL}/current`;
    return this.http.get<User>(url);
  }
}
