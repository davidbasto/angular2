import { RecipeService } from './recipes/recipe.service';
import { Component } from '@angular/core';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: [],
  providers: [RecipeService]
})
export class AppComponent {
  title = 'rb works!';
}
