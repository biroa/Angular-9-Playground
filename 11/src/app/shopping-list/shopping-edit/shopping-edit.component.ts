import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter, Output
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingredient: Ingredient;
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;
  @Output() newIngredients = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  /*onAddProduct(
    nameInput: HTMLElementInput,
    amountInput: HTMLElementInput
  ){
    console.log(nameInput.value, amountInput.value);
  }*/
  onAddProduct(){
    this.ingredient = {
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value
    };
    this.newIngredients.emit(this.ingredient);
  }
}
