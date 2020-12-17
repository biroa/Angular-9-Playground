import { Component } from '@angular/core';
import {MenuOptionInterface} from './interfaces/MenuOptionInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blockLogic: MenuOptionInterface = {recipeBlock: true, shoppingBlock: false};
  recipeBlock(data): any {
    this.blockLogic = data;
    console.log(this.blockLogic);
  }
}
