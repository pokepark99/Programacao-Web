import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { InicialComponent } from './Inicial/inicial.component'; 
import { LoginComponent } from './login/login.component';
import { RegisteComponent } from './registe/registe.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: InicialComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'registe', component: RegisteComponent }
];
