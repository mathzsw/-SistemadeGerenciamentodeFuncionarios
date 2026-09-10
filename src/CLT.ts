import Funcionario from "./Funcionario";

export default class CLT extends Funcionario {
    private bonusAnual: number;

    constructor(nome: string, id: number, tipoFuncionario: string, cpf: string, salarioBase: number, bonusAnual: number) {
        super(nome, id, tipoFuncionario, cpf, salarioBase);
        this.bonusAnual = bonusAnual;
    }
    salarioTotal(): number {
        return super.getSalarioBase() + this.bonusAnual;
    }
    
    listarInformacoes(): void {
        super.listarInformacoes();
        console.log(`Bônus Anual: R$ ${this.bonusAnual.toFixed(2)}`);
        console.log(`Salário Total: R$ ${this.salarioTotal().toFixed(2)}`);
    }
}

