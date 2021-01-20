import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

export interface Character {
  id: string;
  name: string;
  status: string;
  gender: string;
  image: string;
  created: string;
}

@Injectable({
  providedIn: 'root',
})

export class CharacterService {
  apiUrl = 'https://rickandmortyapi.com/api/character/?page=19';
  apiUrl2 = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl).pipe(pluck('results'));
  }

  getCharacter(id: string): Observable<Character> {
    return this.http.get<Character>(this.apiUrl2 + id).pipe();
  }
}
