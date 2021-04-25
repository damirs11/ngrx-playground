import { createFeatureSelector, createReducer, on,  } from '@ngrx/store';
import { User } from '@uzedo-app/api/auth/user';
import { UserApiActions } from '../actions';

export const statusFeatureKey = 'status';

export interface State {
  isServiceLoaded: boolean;
  user: User | null;
};

export const initialState: State = {
  isServiceLoaded: false,
  user: null
};

export const reducer = createReducer(
  initialState,
  on(UserApiActions.currentSuccess, (state, payload) => {
      return {
        ...state,
        isServiceLoaded: true,
        user: payload.user
      }
    }
  ),
  on(UserApiActions.currentEmpty, UserApiActions.currentFailure, (state) => {
      return {
        ...state,
        isServiceLoaded: true,
        user: null
      }
    }
  ),
)

export const getUser = (state: State) => state.user;
export const getServiceStatus = (state: State) => state.isServiceLoaded;
export const selectStatus = createFeatureSelector<State>(
  statusFeatureKey
);
