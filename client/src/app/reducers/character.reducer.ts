import { createReducer, on } from '@ngrx/store';
import { Character } from '../models/character';
import { SearchCharactersAction } from '../actions';

export interface State {
  character: Character,
  isFetching: boolean,
  hasError: boolean
}

export const initialState: State = {
  character: {
    _id: '',
    firstName: '',
    lastName: '',
    picture: '',
    age: 0
  },
  isFetching: false,
  hasError: false
}

export const reducer = createReducer(
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
