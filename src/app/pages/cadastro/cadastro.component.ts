import { FuncionarioService } from './../../services/funcionario.service';
import { Component } from '@angular/core';
import { FuncionarioFormComponent } from '../../components/funcionario-form/funcionario-form.component';
import { Funcionario } from '../../models/Funcionarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FuncionarioFormComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  btnAcao = 'Cadastrar';
  btnTitulo = 'Cadastrar Funcionario';

  constructor(
    private FuncionarioService: FuncionarioService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createFuncionario(funcionario: Funcionario) {
    this.FuncionarioService.CreateFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
