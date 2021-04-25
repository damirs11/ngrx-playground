import { Credentials } from '@api/auth/request/credentials';
import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page] Login',
  props<{ credentials: Credentials }>()
);
