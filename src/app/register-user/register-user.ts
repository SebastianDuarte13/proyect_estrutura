import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register-user.html',
  styleUrl: './register-user.css',
})
export class RegisterUser {
  user = {
    nombres: '',
    apellidos: '',
    documento: '',
    correo: '',
    rol: 'Estudiante' // Default selection
  };

  successMessage: string = '';

  constructor(private router: Router) {}

  onCreateUser() {
    if (this.user.nombres && this.user.apellidos && this.user.documento && this.user.correo) {
      // Get existing users from localStorage or initialize empty array
      const existingUsersString = localStorage.getItem('users');
      let users = [];
      if (existingUsersString) {
        users = JSON.parse(existingUsersString);
      }

      // Add the new user
      // The document will serve as both the "Código de usuario" (username) and the "Contraseña" for simplicity.
      users.push({
        usuario: this.user.documento,      // We'll use the document as the username for login
        contrasena: this.user.documento,   // We'll use the document as the password for login
        nombres: this.user.nombres,
        apellidos: this.user.apellidos,
        rol: this.user.rol
      });

      // Save back to localStorage
      localStorage.setItem('users', JSON.stringify(users));

      // Show success message and clear form
      this.successMessage = `Usuario creado con éxito! Puedes iniciar sesión con Documento: ${this.user.documento} como usuario y contraseña.`;
      
      this.user = {
        nombres: '',
        apellidos: '',
        documento: '',
        correo: '',
        rol: 'Estudiante'
      };

      setTimeout(() => {
        this.successMessage = '';
      }, 6000);
    }
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToGestion() {
    this.router.navigate(['/crud-gestion']);
  }
}

