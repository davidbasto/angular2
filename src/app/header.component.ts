import { RecipeService } from './recipes/recipe.service';
import { Recipe } from './recipes/recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  private menuItems = [
      { 'name': 'Recipes', 'routerLink': '/recipes'},
      { 'name': 'Shopping List', 'routerLink': '/shopping-list'}
    ];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onStore() {
    this.recipeService.storeData().subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }

  onFetch() {
    this.recipeService.fetchData();
  }

}
