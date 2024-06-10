import { Component } from '@angular/core';

@Component({
  selector: 'app-registe',
  standalone: true,
  imports: [],
  templateUrl: './registe.component.html',
  styleUrl: './registe.component.css'
})
export class RegisteComponent {


  registerUser() {
    // Exibe um aviso de "Registado com sucesso"
    alert('Registado com sucesso');
  }
}
