import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { CrudGestion } from './crud-gestion/crud-gestion';
import { MiAccount } from './mi-account/mi-account';
import { RegisterUser } from './register-user/register-user';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: 'crud-gestion', component: CrudGestion },
  { path: 'mi-account', component: MiAccount },
  { path: 'register-user', component: RegisterUser }
];
