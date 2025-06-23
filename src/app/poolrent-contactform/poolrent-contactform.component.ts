import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-poolrent-contactform',
  standalone: false,
  templateUrl: './poolrent-contactform.component.html',
  styleUrl: './poolrent-contactform.component.scss'
})

export class PoolrentContactformComponent {
  // creo el formgroup  
  FormSignUp = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    confirmEmail: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
  },[this.isMismatch]);

  /** FUNCION QUE PIDE UN CONTROL COMO PARAMETRO Y DEVUELVE UNA ValidationErros o null **/
  isMismatch(control: AbstractControl): ValidationErrors | null {

    //FORMA UNO
    return control.get('email')?.value !== control.get('confirmEmail')?.value //si la password y la confirmacion de la password son distintas...
    ? { emailMismatch : true}  //retorna un objeto "claver:valor", cuando envia esto suponemos que esta enviando un error ...
    : null; // de lo contrario (si son iguales) retorna null 

  };


  onSubmit() {
    // console.log(this.FormSignUp.value);
    if (this.FormSignUp.valid) {
      console.log(this.FormSignUp.value);
    }else{
      //si es invalido podemos enviar un aviso o cartel
    }
  }
}
