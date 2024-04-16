import { Router } from '@angular/router';
import { FuncionarioService } from './../../services/funcionario.service';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Funcionario } from '../../models/Funcionarios';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-excluir',
  standalone: true,
  imports: [NgIf, MatButtonModule, MatCardModule, MatDialogModule],
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css',
})
export class ExcluirComponent implements OnInit {
  inputData: any;
  funcionario!: Funcionario;

  constructor(
    private FuncionarioService: FuncionarioService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<ExcluirComponent>
  ) {}

  ngOnInit(): void {
    this.inputData = this.data;
    this.FuncionarioService.GetFuncionarioById(this.inputData.id).subscribe(
      (data) => {
        this.funcionario = data.dados;
      }
    );
  }

  Excluir() {
    this.FuncionarioService.ExcluirFuncionario(this.inputData.id).subscribe(
      (data) => {
        this.ref.close();
        window.location.reload();
      }
    );
  }
}
