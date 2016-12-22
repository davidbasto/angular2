import { SharedModule } from './../shared/shared.module';
import { shoppingListRouting } from './shopping-list.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,  } from '@angular/forms';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { ShoppingListComponent } from './shopping-list.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [ShoppingListComponent, ShoppingListAddComponent],
    imports: [SharedModule, FormsModule, shoppingListRouting]
})
export class ShoppingListModule {}