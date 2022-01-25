import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {cart} from '../cartList';
import {Item} from '../item';
import {ITEMS} from '../mock-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  inventoryList = ITEMS;

  @Input() cartList: Item[] = cart;

  @Output() newEvent = new EventEmitter<Item>();

  removeItem(product: Item){
    this.newEvent.emit(product);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
