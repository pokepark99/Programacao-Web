import { Component } from '@angular/core';

@Component({
  selector: 'app-south-wales',
  standalone: true,
  imports: [],
  templateUrl: './south-wales.component.html',
  styleUrl: './south-wales.component.css'
})
export class SouthWalesComponent {

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
