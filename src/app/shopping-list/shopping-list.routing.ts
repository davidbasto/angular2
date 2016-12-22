import { ShoppingListComponent } from './shopping-list.component';
import { Routes, RouterModule } from '@angular/router';

const SHOPPING_LIST_ROUTES: Routes = [
    { path: '', component: ShoppingListComponent}
];

export const shoppingListRouting = RouterModule.forChild(SHOPPING_LIST_ROUTES);
