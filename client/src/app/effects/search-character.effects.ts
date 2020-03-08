import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CharacterService } from '../components/character/character.service';
import { SearchCharactersAction } from '../actions';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class SearchCharacterEffects {

  searchCharacter$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(SearchCharactersAction.search),
      switchMap(action => this.characterService.getCharacters()
        .pipe(
          map(characters => characters.filter(character => character.firstName === action.query))
        )
      ),
      switchMap(([character]) => this.characterService.getPhrases()
        .pipe(
          map(phrases => phrases.filter(phrase => phrase.character === character._id)),
          map(phrases => phrases.map(({ phrase }) => phrase)),
          map(phrases => SearchCharactersAction.success({
            payload: {...character, phrases: [...phrases]}
          })),
          catchError(() => of(SearchCharactersAction.error()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}
}

