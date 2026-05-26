import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToGestion() {
    this.router.navigate(['/crud-gestion']);
  }

  goToCreateUser() {
    this.router.navigate(['/register-user']);
  }

  goToAccount() {
    this.router.navigate(['/mi-account']);
  }
}



