import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Funcionario } from '../../models/Funcionarios';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-funcionario-form',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './funcionario-form.component.html',
  styleUrl: './funcionario-form.component.css',
})
export class FuncionarioFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Funcionario>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosFuncionario: Funcionario | null = null;

  funcionarioForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.funcionarioForm = new FormGroup({
      id: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.id : 0),
      name: new FormControl(
        this.dadosFuncionario ? this.dadosFuncionario.name : '',
        [Validators.required]
      ),
      sobrenome: new FormControl(
        this.dadosFuncionario ? this.dadosFuncionario.sobrenome : '',
        [Validators.required]
      ),
      idade: new FormControl(
        this.dadosFuncionario ? this.dadosFuncionario.idade : '',
        [Validators.required]
      ),
      departamento: new FormControl(
        this.dadosFuncionario ? this.dadosFuncionario.departamento : '',
        [Validators.required]
      ),
      turno: new FormControl(
        this.dadosFuncionario ? this.dadosFuncionario.turno : '',
        [Validators.required]
      ),
      ativo: new FormControl(
        this.dadosFuncionario ? this.dadosFuncionario.ativo : true
      ),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date()),
    });
  }

  submit() {
    this.onSubmit.emit(this.funcionarioForm.value);
  }
}
