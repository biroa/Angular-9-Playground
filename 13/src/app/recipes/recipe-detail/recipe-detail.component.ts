import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  ingredient: Ingredient[];
  ingrid: [];
  constructor(private shoppingListService: ShoppingListService ) { }

  ngOnInit() {
    this.ingredient = this.shoppingListService.getIngredientsList();
  }

  onAddToShoppingList(recipe): void {
    for (const recipeIngredient of recipe.ingredients) {
      this.ingredient.push(new Ingredient(recipeIngredient.name, recipeIngredient.amount));
    }

    console.log(this.ingredient);
  }

}
