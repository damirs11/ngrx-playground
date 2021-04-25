import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import {
  RouterActions,
  UserApiActions
} from '../actions';
import { UzedoError } from '@uzedo-app/api/common/error';
import { User } from '@uzedo-app/api/auth/user';
import { UserService } from '@uzedo-app/core/services/user.service';
import { INIT } from '@ngrx/store';

@Injectable()
export class UserEffects {

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map(() => UserApiActions.current())
    )
  );

  current$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserApiActions.current),
      exhaustMap(() => {
        return this.userService.current().pipe(
          map((user) => {
            if (!user) {
              return UserApiActions.currentEmpty();
            } else {
              return UserApiActions.currentSuccess({ user });
            }
          }),
          catchError((error) => of(UserApiActions.currentFailure({ error })))
        );
      })
    ),
  );

  currentSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserApiActions.currentSuccess),
      map(() => RouterActions.homeRedirect())
    ),
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
