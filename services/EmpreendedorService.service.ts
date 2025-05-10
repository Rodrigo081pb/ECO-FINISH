import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Empreendedor {
  id?: number;
  empresa: string;
  email: string;
  telefone: string;
  senha: string;
  municipio: string;
  estado: string;
  cnpj: string;
  cep: string;
  biografia: string;
  fotoUrl: string;
  materiais: string[];
  horario: string;
}

@Injectable({ providedIn: 'root' })
export class EmpreendedorService {
  private base = 'http://localhost:3000/api/empreendedores';
  constructor(private http: HttpClient) {}

  criar(data: Empreendedor): Observable<Empreendedor> {
    return this.http.post<Empreendedor>(this.base, data);
  }

  login(email: string, senha: string): Observable<Empreendedor[]> {
    return this.http.get<Empreendedor[]>(`${this.base}?email=${email}&senha=${senha}`);
  }

  listarTodos(): Observable<Empreendedor[]> {
    return this.http.get<Empreendedor[]>(this.base);
  }
}
