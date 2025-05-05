import { Component,EventEmitter, Input, Output } from '@angular/core';

import { Models } from '../models-list/Models';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})

export class InputIntegerComponent {

  @Input() quantity!: number; /* SOLUCIONAR el ! */   /* el primer quantity es el que recibo de contenedor padre y el number es para decir como tratrlo*/
  @Input() max!: number; /* SOLUCIONAR  LO MISMO QUE ARRIBA */

  
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output() maxReached: EventEmitter<string> = new EventEmitter<string>();//evento para emitir que se alcanso el limite maximo
  
  /* creo un evento click donde si clickean en el boton mas quantity aumenta en uno */
  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else{
      this.maxReached.emit("se alcanzo el limite maximo");//para avisar que se llego al maximo
    }
  }

  /* creo un evento click donde si clickean en el boton mas quantity aumenta en uno */
  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }


  changeQuantity(event: Event, ): void {
    //casteo para podes acceder al value del input
    const inputElement = event.target as HTMLInputElement;
    let newValue = parseInt(inputElement.value, 10); //10, indica que es numero decimal

    if (newValue < 0) {//chequeo si el valor ingresado es menor que 0
      this.quantity = 0; //si lo es asigna 0

    } else if (newValue > this.max) { //chequeo si el valor ingresado es mayor que el max
      this.quantity = this.max;//si lo es asigno el valor del max
      this.maxReached.emit("se alcanzo el limite maximo");//para avisar que se llego al maximo

    } else {//si no fue ninguna de las anteriores el valor esta dentro del rango
      this.quantity = newValue;// y por lo tanto es asignable
    
    }
    
    this.quantityChange.emit(this.quantity);
  }

}
