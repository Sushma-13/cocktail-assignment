import { Component, OnInit } from '@angular/core';
import { Cocktail, Drinks } from 'src/app/models/cocktail';
import { CocktailService } from 'src/app/services/cocktail.service';

enum LodingStatus {
  loading,
  loaded,
  notFound,
  error,
}

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  drinks: Cocktail[] = [];
  status: LodingStatus = LodingStatus.loading;

  sortAscending = true;
  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.getCocktails();
  }

  getCocktails(): void {
    this.status = LodingStatus.loading;
    this.cocktailService.getCocktails().subscribe(
      (response: Drinks) => {
        this.drinks = response.drinks;
        this.status = LodingStatus.loaded;
        if (this.drinks === null) {
          this.status = LodingStatus.notFound;
        }
      },
      (err) => {
        this.status = LodingStatus.error;
      }
    );
  }

  searchByName(name: string): void {
    this.drinks = [];
    if (!name) {
      this.getCocktails();
    }
    this.status = LodingStatus.loading;
    this.cocktailService.getCocktailsByName(name).subscribe(
      (response: Drinks) => {
        this.drinks = response.drinks;
        this.status = LodingStatus.loaded;
        if (this.drinks === null) {
          this.status = LodingStatus.notFound;
        }
      },
      (err) => {
        this.status = LodingStatus.error;
      }
    );
  }

  searchByCategory(category: string): void {
    this.drinks = [];
    if (!category) {
      this.getCocktails();
    }
    this.status = LodingStatus.loading;
    this.cocktailService.getCocktailsByCategory(category).subscribe(
      (response: Drinks) => {
        this.drinks = response.drinks;
        this.status = LodingStatus.loaded;
        if (this.drinks === null) {
          this.status = LodingStatus.notFound;
        }
      },
      (err) => {
        this.status = LodingStatus.error;
      }
    );
  }
  searchByIngredient(ingredient: string): void {
    this.drinks = [];
    if (!ingredient) {
      this.getCocktails();
    }
    this.status = LodingStatus.loading;
    this.cocktailService.getCocktailsByIngredient(ingredient).subscribe(
      (response: Drinks) => {
        this.drinks = response.drinks;
        this.status = LodingStatus.loaded;
        if (this.drinks === null) {
          this.status = LodingStatus.notFound;
        }
      },
      (err) => {
        this.status = LodingStatus.error;
      }
    );
  }
  sortByAscending(): void {
    this.drinks.sort((a, b) =>
      a.strDrink > b.strDrink ? 1 : b.strDrink > a.strDrink ? -1 : 0
    );
    this.sortAscending = !this.sortAscending;
  }
  sortByDescending(): void {
    this.drinks.sort((a, b) =>
      a.strDrink < b.strDrink ? 1 : b.strDrink < a.strDrink ? -1 : 0
    );
    this.sortAscending = !this.sortAscending;
  }
}
