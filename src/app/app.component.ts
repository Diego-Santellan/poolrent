import { Component } from '@angular/core';

@Component({  /* DEFINIMOS UN COMPONENTE CON @ */
  /* El @Component es el componente principal de la app que es el punto de entragada  de la app */
  selector: 'app-root', /* nombre que vaoaas a usar para referenciarlo cunado queremos usarlo (incluirlo en la vista) ---> <app-route> <-- Asi lo incluimos en el HTML*/
  templateUrl: './app.component.html',/*el html del componente */
  standalone: false, 
  styleUrl: './app.component.scss' /* hojas de esilo del componente  */
})
export class AppComponent {
  title: String = 'Pool Rent'; 
}
