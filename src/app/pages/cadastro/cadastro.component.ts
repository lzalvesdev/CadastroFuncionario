import { FuncionarioService } from './../../services/funcionario.service';
import { Component } from '@angular/core';
import { FuncionarioFormComponent } from '../../components/funcionario-form/funcionario-form.component';
import { Funcionario } from '../../models/Funcionarios';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FuncionarioFormComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  constructor(private FuncionarioService: FuncionarioService) {}

  createFuncionario(funcionario: Funcionario) {
    this.FuncionarioService.CreateFuncionario(funcionario).subscribe((data) => {
      console.log(data);
    });
  }
}
