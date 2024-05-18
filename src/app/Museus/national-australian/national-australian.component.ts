import { Component } from '@angular/core';

@Component({
  selector: 'app-national-australian',
  standalone: true,
  imports: [],
  templateUrl: './national-australian.component.html',
  styleUrl: './national-australian.component.css'
})
export class NationalAustralianComponent {

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
