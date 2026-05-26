import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  usuario: string = '';
  contrasena: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Verificar credenciales quemadas (Admin default)
    if (this.usuario === 'Jduarte814' && this.contrasena === 'admin123') {
      this.errorMessage = '';
      this.router.navigate(['/home']);
      return;
    }

    // Verificar en LocalStorage ("JSON en el navegador")
    const existingUsersString = localStorage.getItem('users');
    if (existingUsersString) {
      const users = JSON.parse(existingUsersString);
      const userFound = users.find((u: any) => u.usuario === this.usuario && u.contrasena === this.contrasena);
      
      if (userFound) {
        this.errorMessage = '';
        this.router.navigate(['/home']);
        return;
      }
    }

    this.errorMessage = 'Credenciales incorrectas';
  }
}


