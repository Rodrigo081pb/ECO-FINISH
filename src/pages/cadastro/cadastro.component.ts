// src/app/cadastro/cadastro.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpreendedorService } from '../../../services/EmpreendedorService.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup;
  materiaisList = ['Papel','Plástico','Vidro','Metal','Eletrônicos','Outros'];
  loading = false;
  sucesso = false;
  errorMsg = '';

  constructor(
    private fb: FormBuilder,
    private empreService: EmpreendedorService,
    private router: Router
  ) {
    this.cadastroForm = this.fb.group({
      empresa:        ['', Validators.required],
      email:          ['', [Validators.required, Validators.email]],
      telefone:       ['', Validators.required],
      senha:          ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', Validators.required],
      municipio:      ['', Validators.required],
      cnpj:           ['', Validators.required],
      cep:            ['', Validators.required],
      biografia:      [''],
      fotoUrl:        ['', Validators.required],
      materiais:      [[], Validators.required],
      horario:        ['', Validators.required]
    }, { validators: this.senhasIguais });
  }

  ngOnInit(): void {}

  senhasIguais(group: FormGroup) {
    const s = group.get('senha')?.value;
    const c = group.get('confirmarSenha')?.value;
    return s === c ? null : { mismatch: true };
  }

  /**
   * Adiciona ou remove material do array 'materiais' de forma segura.
   */
  toggleMaterial(material: string, checked: boolean): void {
    const control = this.cadastroForm.get('materiais');
    if (!control) return;
    const list: string[] = control.value || [];
    control.setValue(
      checked
        ? [...list, material]
        : list.filter(m => m !== material)
    );
  }

  onSubmit(): void {
    if (this.cadastroForm.invalid) return;
    this.loading = true;
    const data = { ...this.cadastroForm.value };
    delete data.confirmarSenha;
    this.empreService.criar(data).subscribe({
      next: () => {
        this.sucesso = true;
        setTimeout(() => this.router.navigate(['/home-empreendedor']), 2000);
      },
      error: () => {
        this.errorMsg = 'Falha ao cadastrar. Tente novamente.';
        this.loading = false;
      }
    });
  }
}
