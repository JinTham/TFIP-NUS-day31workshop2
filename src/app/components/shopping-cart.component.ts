import { Component, Input, Output } from '@angular/core';
import { ShopItem } from '../models';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  @Input()
  shoppingCart!:ShopItem[]

  @Output()
  onRemoveItem = new Subject<number>()

  removeItem(i:number) {
    this.onRemoveItem.next(i)
  }

}
