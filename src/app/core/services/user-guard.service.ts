import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, skipWhile, take, tap } from 'rxjs/operators';
import { AuthApiActions } from '../../auth/store/actions';
import { RouterActions, UserApiActions } from '../store/actions';
import * as fromUser from '../store/reducers/user.reducer';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private store: Store<fromUser.State>) {}

  canActivate(): Observable<boolean> {
    return this.store.select(fromUser.selectStatus).pipe(
      map((status) => {
        console.log(status);
        if (!status.user && !status.isServiceLoaded) {
          this.store.dispatch(RouterActions.loginRedirect());
          return false;
        }

        return true;
      }),
      take(1)
    );
  }
}
