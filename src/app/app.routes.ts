import { provideRouter, Route } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
// import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { CadastroComponent } from '../pages/cadastro/cadastro.component';
// import { HomeEmpreendedorComponent } from './home-empreendedor/home-empreendedor.component';

export const routes: Route[] = [
  { path: '', component: HomeComponent },
  // { path: 'pesquisa', component: PesquisaComponent },
  { path: 'cadastro', component: CadastroComponent },
  // { path: 'home-empreendedor', component: HomeEmpreendedorComponent },
  { path: '**', redirectTo: '' }
];

export const router = provideRouter(routes);
