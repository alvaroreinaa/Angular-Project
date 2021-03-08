import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseURL = "https://myheroacademiaapi.com/api/"
const charactersURL = "https://myheroacademiaapi.com/api/character?page="
const characterURL = baseURL + "character/"

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getCharacters(page: number) {
    return this.http.get(charactersURL + page);
  }

  getSpecificCharacter(characterId: string) {
    return this.http.get(characterURL + characterId);
  }
}
