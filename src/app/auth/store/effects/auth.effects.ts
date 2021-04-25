import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import {
  LoginPageActions,
  AuthApiActions,
} from '../actions';
import { Credentials } from '@uzedo-app/api/auth/request/credentials';
import { AuthService } from '@uzedo-app/auth/services/auth.service';
import { UzedoError } from '@uzedo-app/api/common/error';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.login),
      map((action) => action.credentials),
      exhaustMap((auth: Credentials) =>
        this.authService.login(auth).pipe(
          map(() => AuthApiActions.loginSuccess()),
          catchError((error: UzedoError) => {
              if(error.error.description.includes("Пользователь уже аутентифицирован")) {
                return of(AuthApiActions.loginSuccess());
              }
              return of(AuthApiActions.loginFailure({ error }));
            }
          )
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthApiActions.loginSuccess),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}
}
