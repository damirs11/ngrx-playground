import { InjectionToken } from "@angular/core";
import { ActionReducerMap, Action, createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromStatus from "../core/store/reducers/user.reducer"

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  [fromStatus.statusFeatureKey]: fromStatus.State;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>(
  'Root reducers token', {
    factory: () => ({
      [fromStatus.statusFeatureKey]: fromStatus.reducer
    }),
  }
);

/**
 * Status Selectors
 */
export const statusLayoutState = createFeatureSelector<fromStatus.State>(
  fromStatus.statusFeatureKey
);

export const selectUser = createSelector(
  statusLayoutState,
  fromStatus.getUser
);
