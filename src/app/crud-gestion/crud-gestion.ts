import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-gestion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crud-gestion.html',
  styleUrl: './crud-gestion.css',
})
export class CrudGestion implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  currentFilter: string = 'Todos';

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    // Initial dummy data as shown in the screenshot
    const defaultUsers = [
      { nombres: 'Juan Pérez', apellidos: 'Gómez', correo: 'j.perez@unab.edu.co', rol: 'Estudiante', estado: 'Activo', initials: 'JP', color: 'bg-blue' },
      { nombres: 'María Camila', apellidos: 'Torres', correo: 'm.torres@unab.edu.co', rol: 'Estudiante', estado: 'Activo', initials: 'MC', color: 'bg-orange' },
      { nombres: 'Andrés', apellidos: 'Santana R.', correo: 'a.santana@unab.edu.co', rol: 'Docente', estado: 'Activo', initials: 'AS', color: 'bg-green' },
      { nombres: 'Laura', apellidos: 'Moreno', correo: 'l.moreno@unab.edu.co', rol: 'Admin', estado: 'Inactivo', initials: 'LM', color: 'bg-purple' }
    ];

    // Try to get from localStorage
    const savedUsersStr = localStorage.getItem('users');
    let savedUsers = [];
    if (savedUsersStr) {
      savedUsers = JSON.parse(savedUsersStr).map((u: any) => ({
        ...u,
        nombres: u.nombres || u.usuario, // fallback
        estado: 'Activo',
        initials: (u.nombres?.charAt(0) || '') + (u.apellidos?.charAt(0) || ''),
        color: 'bg-blue' // Default color
      }));
    }

    // Merge default and saved
    this.users = [...defaultUsers, ...savedUsers];
    this.filteredUsers = this.users;
  }

  setFilter(filter: string) {
    this.currentFilter = filter;
    if (filter === 'Todos') {
      this.filteredUsers = this.users;
    } else if (filter === 'Estudiantes') {
      this.filteredUsers = this.users.filter(u => u.rol === 'Estudiante');
    } else if (filter === 'Docentes') {
      this.filteredUsers = this.users.filter(u => u.rol === 'Docente');
    } else if (filter === 'Admin') {
      this.filteredUsers = this.users.filter(u => u.rol === 'Admin');
    }
  }

  goToNewUser() {
    this.router.navigate(['/register-user']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  deleteUser(user: any) {
    if(confirm(`¿Estás seguro de que deseas eliminar a ${user.nombres}?`)) {
      this.users = this.users.filter(u => u !== user);
      this.setFilter(this.currentFilter);
      // Extra logic to delete from localStorage could be added here
    }
  }
}

