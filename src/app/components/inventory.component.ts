import { Component, Output } from '@angular/core';
import { Item, ShopItem } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {

  @Output()
  onAddItem = new Subject<Item>()

  itemList:Item[] = [{description:"apple"},
                    {description:"orange"},
                    {description:"pear"},
                    {description:"grape"}] 

  addItem(i:number) {
    this.onAddItem.next(this.itemList[i])
  }

}
