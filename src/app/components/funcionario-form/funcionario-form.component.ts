import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Funcionario } from '../../models/Funcionarios';

@Component({
  selector: 'app-funcionario-form',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './funcionario-form.component.html',
  styleUrl: './funcionario-form.component.css',
})
export class FuncionarioFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Funcionario>();

  funcionarioForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.funcionarioForm = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', [Validators.required]),
      sobrenome: new FormControl('', [Validators.required]),
      idade: new FormControl('', [Validators.required]),
      departamento: new FormControl('', [Validators.required]),
      turno: new FormControl('', [Validators.required]),
      ativo: new FormControl(true),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date()),
    });
  }

  submit() {
    this.onSubmit.emit(this.funcionarioForm.value);
  }
}
