import {Component, EventEmitter, Output} from '@angular/core';
import {MenuOptionInterface} from '../interfaces/MenuOptionInterface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {

  @Output() showMenuEvent = new EventEmitter<object>();
  menus: MenuOptionInterface = {recipeBlock: undefined, shoppingBlock: undefined};

  showRecipes(): void {
    this.menus.recipeBlock = true;
    this.menus.shoppingBlock = false;
    // console.log('showRecipes' , this.menus);
    this.showMenuEvent.emit(this.menus);
  }

  showShoppingList(): void {
    this.menus.recipeBlock = false;
    this.menus.shoppingBlock = true;
    // console.log('showShoppingList' , this.menus);
    this.showMenuEvent.emit(this.menus);
  }
}
