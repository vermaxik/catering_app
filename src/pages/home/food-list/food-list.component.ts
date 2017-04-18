import { Component } from '@angular/core';

@Component({
  selector: 'food-list',
  templateUrl: 'food-list.html',
})
export class FoodList {

  items: Array<string> = ['Item 1', 'Item 2', 'Item 3', 'Item 4',
                          'Item 5', 'Item 6', 'Item 7', 'Item 8'];

  constructor() {
  }
}
