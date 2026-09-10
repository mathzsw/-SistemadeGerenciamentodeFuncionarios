import CLT from "./CLT";
import PJ from "./PJ";
import FT from "./FT";

let funcionario1 = new CLT(
    "João",
    1,
    "CLT",
    "123.456.789-00",
    3000,
    1200
);

let funcionario2 = new PJ(
    "Maria",
    2,
    "PJ",
    "987.654.321-00",
    0,
    20,
    50
);

let funcionario3 = new FT(
    "Carlos",
    3,
    "Terceirizado",
    "456.789.123-00",
    4000,
    15
);

funcionario1.listarInformacoes();
console.log("");

funcionario2.listarInformacoes();
console.log("");

funcionario3.listarInformacoes();
console.log("");

let funcionarios = [funcionario1, funcionario2, funcionario3];

let totalFolha = 0;

for (let funcionario of funcionarios) {
    totalFolha += funcionario.calcularSalario();
}

console.log(`Folha de Pagamento: R$ ${totalFolha.toFixed(2)}`);