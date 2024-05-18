import { Component } from '@angular/core';

@Component({
  selector: 'app-inicial',
  standalone: true,
  imports: [],
  templateUrl: './inicial.component.html',
  styleUrl: './inicial.component.css'
})
export class InicialComponent {

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
