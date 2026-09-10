import Funcionario from "./Funcionario";

export default class FT extends Funcionario {
    private taxaAdicional: number;

    constructor(nome: string, id: number, tipoFuncionario: string, cpf: string, salarioBase: number, taxaAdicional: number) {
        super(nome, id, tipoFuncionario, cpf, salarioBase);
        this.taxaAdicional = taxaAdicional;
    }

    salarioTotal(): number {
        return super.getSalarioBase() + (super.getSalarioBase() * this.taxaAdicional / 100);
    }

    listarInformacoes(): void {
        super.listarInformacoes();
        console.log(`Taxa Adicional: ${this.taxaAdicional}%`);
        console.log(`Salário Total: R$ ${this.salarioTotal().toFixed(2)}`);
    }
}