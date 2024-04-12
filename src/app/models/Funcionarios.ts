export interface Funcionario {
  id?: number;
  name: string;
  sobrenome: string;
  idade: number;
  departamento: string;
  ativo: boolean;
  turno: string;
  dataDeCriacao?: string;
  dataDeAlteracao?: string;
}
