import Funcionario from "./Funcionario";

export default class PJ extends Funcionario {
    private horasTrabalhadas: number;
    private valorHora: number;

    constructor(nome: string, id: number, tipoFuncionario: string, cpf: string, salarioBase: number, horasTrabalhadas: number, valorHora: number) {
        super(nome, id, tipoFuncionario, cpf, salarioBase);
        this.horasTrabalhadas = horasTrabalhadas;
        this.valorHora = valorHora;
    }

    salarioTotal(): number {
        return super.getSalarioBase() + (this.horasTrabalhadas * this.valorHora);
    }

    listarInformacoes(): void {
        super.listarInformacoes();
        console.log(`Horas Trabalhadas: ${this.horasTrabalhadas}`);
        console.log(`Valor por Hora: R$ ${this.valorHora.toFixed(2)}`);
        console.log(`Salário Total: R$ ${this.salarioTotal().toFixed(2)}`);
    }
}