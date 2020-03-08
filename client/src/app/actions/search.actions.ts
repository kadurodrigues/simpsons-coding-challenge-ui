import { createAction, props } from '@ngrx/store';

export const search = createAction(
  '[Search Character] Search',
  props<{ query: string }>()
);

export const success = createAction(
  '[Search Character] Success',
  props<{ payload: any }>()
);

export const error = createAction(
  '[Search Character] Error'
);
