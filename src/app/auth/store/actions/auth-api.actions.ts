import { props, createAction } from '@ngrx/store';
import { UzedoError } from '@uzedo-app/api/common/error';

export const loginSuccess = createAction(
  '[Auth/API] Login Success'
);

export const loginFailure = createAction(
  '[Auth/API] Login Failure',
  props<{ error: UzedoError }>()
);
