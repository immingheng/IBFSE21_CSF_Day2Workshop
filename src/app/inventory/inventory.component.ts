import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../item';
import {ITEMS} from '../mock-item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventoryList = ITEMS;
  //@Input() and @Output() give a child component a way to communicate with its parent component.

  //@Input() -> Decorator that marks a class field as an input property and supplies configuration metadata. The input property is bound to a DOM property in the template. During change detection, Angular automatically updates the data property with the DOM property's value.
  @Input() items!: Item[];

  //@Output() -> Decorator that marks a class field as an output property and supplies configuration metadata. The DOM property bound to the output property is automatically updated during change detection.
  @Output() newItemEvent = new EventEmitter<Item>();

  addNewItem(product: Item){
    this.newItemEvent.emit(product);
  }






  constructor() { }

  ngOnInit(): void {
  }

}
