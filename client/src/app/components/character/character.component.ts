import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Character } from 'src/app/models/character';
import { Observable } from 'rxjs';

interface CharactersState {
  character: Character,
  hasError: boolean,
  isFetching: boolean
}

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  character$: Observable<Character>;
  isFetching$: Observable<boolean>;
  hasError$: Observable<boolean>;

  constructor(private store: Store<{ state: CharactersState }>) {
    this.character$ = this.store.select(({ state: { character } }) => character);
    this.isFetching$ = this.store.select(({ state: { isFetching } }) => isFetching);
    this.hasError$ = this.store.select(({ state: { hasError } }) => hasError);
  }
}
