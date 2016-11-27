import { Ingredient } from './../shared/ingredient';
import { Recipe } from './recipe';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.simplyrecipes.com/photos/pork-schnitzel-1.jpg', [
      new Ingredient("Frend Fries", 2),
      new Ingredient("Pork Meat", 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2016/06/Summer-Green-Bean-Salad-02-600x779.jpg', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
