import { Component } from '@angular/core';
import { Models } from './Models';
import { ModelsCartService } from '../models-cart.service';
import { ModelsDataService } from '../models-data.service';

@Component({
  selector: 'app-models-list',
  standalone: false,
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.scss'
})

export class ModelsListComponent {
  //models es un atributo de la clase 
  modelos: Models[] = [] ;

  
  constructor(
    private cart: ModelsCartService,
    private modelsDataService: ModelsDataService){
    // this.cart = new ModelsCartService();
  }

  ngOnInit(): void{//para deszplegar servicios o metodos al inicio del programa
    this.modelsDataService.getAll()
    .subscribe(modelos => this.modelos = modelos);
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
