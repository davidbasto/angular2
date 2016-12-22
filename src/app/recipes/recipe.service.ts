import { RecipesComponent } from './recipes.component';
import { Headers, Http, Response } from '@angular/http';
import { Ingredient } from './../shared/ingredient';
import { Recipe } from './recipe';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class RecipeService {

  recipesChanged = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.simplyrecipes.com/photos/pork-schnitzel-1.jpg', [
      new Ingredient("Frend Fries", 2),
      new Ingredient("Pork Meat", 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2016/06/Summer-Green-Bean-Salad-02-600x779.jpg', [])
  ];

  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-6b41b.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://recipebook-6b41b.firebaseio.com/recipes.json')
      .map<Recipe[]>((response: Response) => {
        let recipes: Recipe[] = response.json().forEach((recipe: Recipe) => {
          if(!recipe.hasOwnProperty('ingredients')) recipe.ingredients = [];
        });
        return recipes;
      })
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      );
  }

}
