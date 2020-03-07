import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../utils/constants';
import { Character } from '../../models/character';
import { Phrase } from '../../models/phrase';

@Injectable({
  providedIn: 'root'
})

export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${BASE_URL}/characters`);
  }

  getPhrases(): Observable<Phrase[]> {
    return this.http.get<Phrase[]>(`${BASE_URL}/phrases`);
  }
}
