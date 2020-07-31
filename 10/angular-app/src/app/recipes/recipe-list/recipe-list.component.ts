import {Component} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
  // styleUrls:['']
})

export class RecipeListComponent {
  recipes: RecipeModel[] = [
    new RecipeModel(
      'Test Recipe',
      'My test description',
      'https://www.seriouseats.com/2020/05/20200504-vegetable-pancakes-sho-spaeth1.jpg'),
    new RecipeModel(
      'Test Recipe fdsfffffffffffffffffff',
      'My test description fdsd fdfdddddddddddddddddddddd',
      'https://realfood.tesco.com/media/images/Ritas-enchiladas-recipe-1400x919-1c7ff22b-ea5e-44cf-9ada-d7b04420002f-0-1400x919.jpg'),

  ];

  constructor() {
  }
}
