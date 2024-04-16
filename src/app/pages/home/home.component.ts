import { Funcionario } from './../../models/Funcionarios';
import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from '../../components/excluir/excluir.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  funcionarioGeral: Funcionario[] = [];

  colunas = [
    'Situacao',
    'Nome',
    'Sobrenome',
    'Idade',
    'Departamento',
    'Ações',
    'Exlcuir',
  ];

  constructor(
    private funcioarioService: FuncionarioService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.funcioarioService.GetFuncionario().subscribe((data) => {
      const dados = data.dados;

      dados.map((item) => {
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString(
          'pt-BR'
        );
        item.dataDeAlteracao = new Date(
          item.dataDeAlteracao!
        ).toLocaleDateString('pt-BR');
      });

      this.funcionarios = data.dados;
      this.funcionarioGeral = data.dados;
    });
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLocaleLowerCase();

    this.funcionarios = this.funcionarioGeral.filter((funcionario) => {
      return funcionario.name.toLowerCase().includes(value);
    });
  }

  OpenDialog(
    id: number,
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ) {
    this.dialog.open(ExcluirComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        id: id,
      },
    });
  }
}
