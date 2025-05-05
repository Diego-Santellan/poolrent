import { Injectable} from '@angular/core';

import { Models } from './models-list/Models';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})

export class ModelsCartService {
  //maneja la logica del carrito

  cartList: Models[] =[];
  
  constructor() { }
  
  addToCart(models: Models){
    let item: Models | undefined = this.cartList.find((v1) => v1.modelo == models.modelo);
    if(!item){
      this.cartList.push({... models});  //{... } con esto creamos un objeto con igual valores y propiedades de la cerveza. Se utiliza para que cuando descontamos cantidad en la lista deproductos no descuente en el carritox
    } else {
      item.quantity +=models.quantity;
    }

    console.log(this.cartList);
    
  }
}
