import { Action, createReducer, on } from '@ngrx/store';
import { Character } from '../models/character';
import { SearchCharactersAction } from '../actions';

export interface State {
  characters: Character[],
  character: any,
  isFetching: boolean,
  hasError: boolean
}

export const initialState: State = {
  characters: [],
  character: {},
  isFetching: false,
  hasError: false
}

const characterReducer = createReducer(
  initialState,
  on(SearchCharactersAction.search, state => ({
    ...state,
    isFetching: true,
    hasError: false
  })),
  on(SearchCharactersAction.success, (state, { payload }) => ({
    ...state,
    character: payload,
    isFetching: false,
    hasError: false
  })),
  on(SearchCharactersAction.error, state => ({
    ...state,
    character: {},
    isFetching: false,
    hasError: true
  }))
)

export function reducer(state: State | undefined, action: Action) {
  return characterReducer(state, action);
}
