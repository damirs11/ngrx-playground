import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Credentials } from "@api/auth/request/credentials";
import { LoginPageActions } from '../store/actions';
import * as fromAuth from '../store/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  pending$ = this.store.select(fromAuth.selectLoginPagePending);
  error$ = this.store.select(fromAuth.selectLoginPageError);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onLogin(credentials: Credentials) {
    this.store.dispatch(LoginPageActions.login({credentials}));
  }
}
