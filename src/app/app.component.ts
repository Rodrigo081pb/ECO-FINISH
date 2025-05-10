// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterModule, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eco-web';
}
