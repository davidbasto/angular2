import { Ingredient } from './../shared/ingredient';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {
  private items: Ingredient[] = [];

  getItems() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items);
  }

  constructor() { }
}
