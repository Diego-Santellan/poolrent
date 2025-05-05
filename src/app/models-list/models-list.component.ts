import { Component } from '@angular/core';
import { Models } from './Models';
import { ModelsCartService } from '../models-cart.service';
@Component({
  selector: 'app-models-list',
  standalone: false,
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.scss'
})

export class ModelsListComponent {
  //models es un atributo de la clase 
  modelos: Models[] = [
    {
      modelo: 'Napoleon',
      dimenciones: '3.10 x 2.30',
      precio: 1900000,
      image: 'img/napoleon.jpeg',
      stock: 10,
      promo: false,
      quantity: 0,
    },
    {
      modelo: 'Chavito',
      dimenciones: '3.10 x 2.30',
      precio: 1900000,
      image: 'img/napoleon.jpeg',
      stock: 0,
      promo: false,
      quantity: 0,
    },
    {
      modelo: 'Frankling',
      dimenciones: '4.10 x 2.50',
      precio: 2500000,
      image: 'img/napoleon.jpeg',
      stock: 9,
      promo: true,
      quantity: 0,
    },
    {
      modelo: 'Fraseo',
      dimenciones: '5.10 x 3.30',
      precio: 3000000,
      image: 'img/napoleon.jpeg',
      stock: 12,
      promo: false,
      quantity: 0,
    }
  ];

  
  constructor(private cart: ModelsCartService){
    // this.cart = new ModelsCartService();
  }

  /* aviso de alcanzo el maximo por stock */
  maxReached(m: string){
    alert(m);
  }

  /* agregar al carrito */
  addToCart(models: Models): void{
    this.cart.addToCart(models);
    models.stock -= models.quantity;
    models.quantity = 0;
  }
}
