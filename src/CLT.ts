import Funcionario from "./Funcionario";

export default class CLT extends Funcionario {
    private bonusAnual: number;

    constructor(
        nome: string,
        id: number,
        tipoFuncionario: string,
        cpf: string,
        salarioBase: number,
        bonusAnual: number
    ) {
        super(nome, id, tipoFuncionario, cpf, salarioBase);
        this.bonusAnual = bonusAnual;
    }

    calcularSalario(): number {
        return super.getSalarioBase() + (this.bonusAnual / 12);
    }

    listarInformacoes(): void {
        super.listarInformacoes();
        console.log(`Bônus Anual: R$ ${this.bonusAnual.toFixed(2)}`);
        console.log(`Salário Calculado: R$ ${this.calcularSalario().toFixed(2)}`);
    }
}