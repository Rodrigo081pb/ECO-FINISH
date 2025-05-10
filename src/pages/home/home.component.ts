// src/app/home/home.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  showModal = false;
  etapa = 0;
  darkMode = false;
  mobileMenu = false;

  // para o formulário do coletor
  sexo = '';
  estado = '';
  idade!: number;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {}

  ngOnInit(): void {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.darkMode = stored === 'dark' || (!stored && prefersDark);
    this.updateHtmlClass();
  }

  openModal(): void {
    this.showModal = true;
    this.etapa = 0;
  }
  closeModal(): void {
    this.showModal = false;
  }
  selecionar(op: string): void {
    if (op === 'visitante') {
      this.closeModal();
      this.router.navigate(['/pesquisa']);
    } else if (op === 'coletor') {
      this.etapa = 1;
    } else if (op === 'empreendedor') {
      this.etapa = 2;
    }
  }
  goToPesquisa(): void {
    this.closeModal();
    this.router.navigate(['/pesquisa']);
  }
  toggleMenu(): void {
    this.mobileMenu = !this.mobileMenu;
  }

  toggleDark(): void {
    this.darkMode = !this.darkMode;
    localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
    this.updateHtmlClass();
  }

  private updateHtmlClass(): void {
    this.document.documentElement.classList.toggle('dark', this.darkMode);
  }
}
