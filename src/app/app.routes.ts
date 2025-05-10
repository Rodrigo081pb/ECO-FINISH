// src/app/app.routes.ts
import { provideRouter, Route } from '@angular/router';
import { HomeComponent }      from '../pages/home/home.component';
import { PesquisaComponent }  from '../pages/pesquisa/pesquisa.component';
import { CadastroComponent }  from '../pages/cadastro/cadastro.component';
import { HomeAdminComponent } from '../pages/home-admin/home-admin.component';
import { LoginComponent }     from '../pages/login/login.component';
import { CatalogoComponent }  from '../pages/catalogo/catalogo.component';
import { withHashLocation } from '@angular/router';

export const routes: Route[] = [
  { path: '',                 component: HomeComponent },
  { path: 'pesquisa',         component: PesquisaComponent },
  { path: 'cadastro',         component: CadastroComponent },
  { path: 'super-admin-home', component: HomeAdminComponent },
  { path: 'login',            component: LoginComponent },
  // Rota de catálogo agora com parâmetro :id
  { path: 'catalogo/:id', component: CatalogoComponent },

  // fallback
  { path: '**', redirectTo: '' },
];


export const router = provideRouter(routes, withHashLocation());

