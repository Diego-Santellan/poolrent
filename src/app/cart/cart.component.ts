import { Component } from '@angular/core';

import { ModelsCartService } from '../models-cart.service';
@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  constructor(){
    // this.cart = new ModelsCartService();
  }
}
