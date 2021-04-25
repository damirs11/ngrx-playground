import { createAction, props } from '@ngrx/store';
import { User } from '@uzedo-app/api/auth/user';
import { UzedoError } from '@uzedo-app/api/common/error';

export const current = createAction(
  '[User/Api] Current',
);

export const currentSuccess = createAction(
  '[User/Api] Current success',
  props<{ user: User }>()
);

export const currentEmpty = createAction(
  '[User/Api] Current empty',
);

export const currentFailure = createAction(
  '[User/Api] Current failure',
  props<{ error: UzedoError }>()
);
