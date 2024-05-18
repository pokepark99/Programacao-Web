import { Component } from '@angular/core';

@Component({
  selector: 'app-gerra-australia',
  standalone: true,
  imports: [],
  templateUrl: './gerra-australia.component.html',
  styleUrl: './gerra-australia.component.css'
})
export class GerraAustraliaComponent {

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
