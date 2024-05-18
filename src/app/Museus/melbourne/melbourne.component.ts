import { Component } from '@angular/core';

@Component({
  selector: 'app-melbourne',
  standalone: true,
  imports: [],
  templateUrl: './melbourne.component.html',
  styleUrl: './melbourne.component.css'
})
export class MelbourneComponent {

  traduzirPagina(){
    // codigo para traduzir pag
    // o alerta e so para confirmar que a funcao esta a funcionar
    alert('Page will be translated to English');
  }
  
  SignUp(){
    //codigo para sign up
    alert("Sign up");
  }

  Login(){
    //codigo para login
    alert("Login");
  }
}
