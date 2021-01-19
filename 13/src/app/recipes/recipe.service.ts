import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private ingridient: Ingredient[];
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A delicious Schnitzel',
      'https://upload.wikimedia.org/wikipedia/commons/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('FrenchFries', 20)
      ]),
    new Recipe(
      'Big Fat Burger',
      'Bigi Burger',
'https://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visuals_Food_Hamburger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    )
  ];

  // Slice with empty param returns a copy of the recipes object
  // tslint:disable-next-line:typedef
  getRecipes() {
    return this.recipes;
  }
}
