import { NgIf } from '@angular/common';
import { Funcionario } from './../../models/Funcionarios';
import { FuncionarioService } from './../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [NgIf, RouterLink, MatButtonModule, MatInputModule, MatCardModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css',
})
export class DetalhesComponent implements OnInit {
  funcionario?: Funcionario;
  id!: number;

  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.GetFuncionarioById(this.id).subscribe((data) => {
      const dados = data.dados;

      dados.dataDeCriacao = new Date(dados.dataDeCriacao!).toLocaleDateString(
        'pt-BR'
      );
      dados.dataDeAlteracao = new Date(
        dados.dataDeAlteracao!
      ).toLocaleDateString('pt-BR');

      this.funcionario = data.dados;
    });
  }

  InativaFuncionario() {
    this.funcionarioService.InativaFuncionario(this.id).subscribe((data) => {
      this.router.navigate(['']);
    });
  }
}
