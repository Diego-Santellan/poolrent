import { Component } from '@angular/core';

import { ModelsCartService } from '../models-cart.service';
import { Models } from '../models-list/Models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartList$: Observable<Models[]>;

  constructor(private cart: ModelsCartService){
    //si necesitamos hacer algo en el ts con el arrglo debemos utilizar este
    // cart.cartList.subscribe(c => this.cartList = c); borrar

    //si solo neceitamos imprimir en la vista usamos este
    this.cartList$ = cart.cartList.asObservable();

  }

}
