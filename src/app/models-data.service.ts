import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Models } from './models-list/Models';
import { log } from 'console';

const URL = 'https://681a1c811ac115563507d7c3.mockapi.io/modelos/Minipiscinas'//url de mockapi con los ojetos
@Injectable({
  providedIn: 'root'
})
export class ModelsDataService {
  constructor(private http: HttpClient) { }

  /* Consume la API y devuelve un obserbvable a la respuesta~~ */
  public getAll(): Observable<Models[]>{//sintasis de angular: despues del dos puntos (:) pones que tipo devuelve el metodo.
    //el observable no existe como tipo, por eso se castea: hay que decir que extructura esta observando el observable. es como el miron esta chusmeando.
  
    //es como una analogi de " fetch(úrl, {method: 'GET'}) "
    return this.http.get<Models[]>(URL) //devuelve un observable del arreglo de mockapi, a ese observable hay que observarlo,... 
      //... para eso hay que usarlo sacndolo para afuera donde otro componente se suscribe a el para enterarse de cada vez que cambia.
      
      .pipe(//tranformamos lo que viene en lo que necesitamos... deberia hacerlo el back-end
        tap((modelos: Models[]) => modelos.forEach(models => models.quantity = 0))//el tap toca lo que viene antes de emitirlo con eso podemos tranformarlo
      );
      
  }

}
