import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  loginUser() {
    // Lógica de autenticação aqui
    // Após autenticação bem-sucedida, redirecionar para a página inicial
    this.router.navigate(['/home']);
  }

  navigateToRegist() {
    this.router.navigate(['/registe']);
  }

  
  }
