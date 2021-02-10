import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from '../models/cocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor(private http: HttpClient) {}

  getCocktails(): Observable<any> {
    return this.http.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    );
  }

  getCocktailsByName(name): Observable<any> {
    return this.http.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name
    );
  }

  getCocktailsByCategory(category): Observable<any> {
    return this.http.get(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + category
    );
  }

  getCocktailsByIngredient(ingredient): Observable<any> {
    return this.http.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + ingredient
    );
  }
}
