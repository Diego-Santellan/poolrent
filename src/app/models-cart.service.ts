import { Injectable} from '@angular/core';

import { Models } from './models-list/Models';
import { log } from 'console';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ModelsCartService {
  //maneja la logica del carrito

  //convertimos la variable que queremos observar en pribada:
  private _cartList: Models[] = []; //variable pribada de atriuto de  clase... empieza con "_" para poder  utilizar el "mismo" nombre en ambas variables

  //observamos la variable con BehaviorSubject:
  cartList: BehaviorSubject<Models[]> = new BehaviorSubject(this._cartList); //BehaviorSubject sirve para encapsular una variable 
  
  constructor() { }
  
  addToCart(models: Models){
    let item: Models | undefined = this._cartList.find((v1) => v1.modelo == models.modelo);
    if(!item){
      this._cartList.push({... models});  //{... } con esto creamos un objeto con igual valores y propiedades de la cerveza. Se utiliza para que cuando descontamos cantidad en la lista deproductos no descuente en el carritox
    } else {
      item.quantity +=models.quantity;
    }

    console.log(this._cartList);
    this.cartList.next(this._cartList); //le actualizamos el valor al BehaviotSubject, con la lista del carrito
  }
}
