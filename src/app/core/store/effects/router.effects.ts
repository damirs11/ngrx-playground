import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { RouterActions } from '../actions';

@Injectable()
export class RouterEffects {

  loginRedirect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RouterActions.loginRedirect),
      tap(() => {
        this.router.navigate(['/auth']);
      })
    ),
    { dispatch: false}
  );

  homeRedirect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RouterActions.homeRedirect),
      tap(() => {
        this.router.navigate(['/']);
      })
    ),
    { dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private router: Router
  ) {}
}
