import { Component } from '@angular/core';
import { Item, ShopItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day31workshop2';

  shoppingCart: ShopItem[] = []

  addItem(item:Item) {
    const existItem = this.shoppingCart.find(existItem => existItem.item.description == item.description)
    if (existItem == null){
      this.shoppingCart.push({
        item:item,
        quantity:1
      })
    } else {
      existItem.quantity ++
    }
    
  }

  removeItem(i:number) {
    this.shoppingCart.splice(i,1)
  }
}
