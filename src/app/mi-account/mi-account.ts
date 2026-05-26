import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-account',
  imports: [],
  templateUrl: './mi-account.html',
  styleUrl: './mi-account.css',
})
export class MiAccount {
  user = {
    initials: 'JP',
    name: 'Juan Pérez Gómez',
    code: '20241001',
    semester: 4,
    gpa: 4.2,
    credits: '68/180',
    document: '1098765432',
    email: 'j.perez@unab.edu.co',
    phone: '310 456 7890',
    program: 'Ingeniería de Sistemas',
    assignedSemester: 'Semestre 4 - 2025-I',
    faculty: 'Ingeniería',
    status: 'Activo'
  };
}
