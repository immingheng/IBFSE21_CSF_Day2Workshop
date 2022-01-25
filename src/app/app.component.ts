import { Component, Input } from '@angular/core';
import {Item} from './item';
import {ITEMS} from './mock-item';
import {cart} from './cartList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workshop2';
  // itemList contains the fixed inventory
  itemList: Item[] = ITEMS;
  // cart contains the empty array
  @Input() cartL:Item[]=cart;

  // @Input() lets a parent component update data in the child component. Conversely, @Output() lets the child send data to a parent component.

  // When a user add an item from the inventory,
  // The item should be passed onto a "cartlist" within the parent component that will be subsequently passed onto the cart component
  addItem(object: Item){
    object.quantity+=1;
    this.cartL.push(object);
  }

  removeItem(product: Item){
    product.quantity-=1;
    this.cartL.push(product);
  }


}
