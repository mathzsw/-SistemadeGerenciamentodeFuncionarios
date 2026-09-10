export default class funcionario {
    private nome: string;
    private id: number;
    private tipoFuncionario: string;
    private cpf: string;
    private salarioBase: number;

    constructor(nome: string, id: number, tipoFuncionario: string, cpf: string, salarioBase: number) {
        this.nome = nome;
        this.id = id;
        this.tipoFuncionario = tipoFuncionario;
        this.cpf = cpf;
        this.salarioBase = salarioBase;

    }
    getSalarioBase(): number {
            return this.salarioBase;
    }

    listarInformacoes(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`ID: ${this.id}`);
        console.log(`Tipo de Funcionário: ${this.tipoFuncionario}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Salário Base: R$ ${this.salarioBase.toFixed(2)}`);
    }
}