import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Home } from './home';
import { FoodList } from './food-list/food-list.component';

@NgModule({
  declarations: [
    Home,
    FoodList,
  ],
  imports: [
    IonicModule.forRoot(Home),
  ],
  exports: [
    Home,
    FoodList
  ]
})
export class HomeModule {}
