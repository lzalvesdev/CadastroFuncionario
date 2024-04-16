import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { Funcionario } from '../models/Funcionarios';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  private apiUrl = `${environment.ApiUrl}/Funcionario`;

  constructor(private http: HttpClient) {}

  GetFuncionario(): Observable<Response<Funcionario[]>> {
    return this.http.get<Response<Funcionario[]>>(this.apiUrl);
  }

  GetFuncionarioById(id: number): Observable<Response<Funcionario>> {
    return this.http.get<Response<Funcionario>>(`${this.apiUrl}/${id}`);
  }

  CreateFuncionario(
    funcionario: Funcionario
  ): Observable<Response<Funcionario[]>> {
    return this.http.post<Response<Funcionario[]>>(
      `${this.apiUrl}`,
      funcionario
    );
  }

  EditarFuncionario(
    funcionario: Funcionario
  ): Observable<Response<Funcionario[]>> {
    return this.http.put<Response<Funcionario[]>>(
      `${this.apiUrl}`,
      funcionario
    );
  }

  InativaFuncionario(id: number): Observable<Response<Funcionario[]>> {
    return this.http.put<Response<Funcionario[]>>(
      `${this.apiUrl}/inativaFuncionario?id=${id}`,
      id
    );
  }

  ExcluirFuncionario(id: number): Observable<Response<Funcionario[]>> {
    return this.http.delete<Response<Funcionario[]>>(`${this.apiUrl}?id=${id}`);
  }
}
