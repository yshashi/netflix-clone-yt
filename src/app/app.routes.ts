import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/login/login.component').then(a => a.LoginComponent) },
   { path: 'browse', loadComponent: () => import('./pages/browse/browse.component').then(a => a.BrowseComponent) }
];
