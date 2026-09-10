import Funcionario from "./Funcionario";
import CLT from "./CLT";
import PJ from "./PJ";
import FT from "./FT";

let funcionario1 = new CLT("João", 1, "CLT", "123.456.789-00", 3000, 10);
let funcionario2 = new PJ("Maria", 2, "PJ", "987.654.321-00", 5000, 20, 50);
let funcionario3 = new FT("Carlos", 3, "FT", "456.789.123-00", 4000, 15);

let salario1 = funcionario1.salarioTotal();
let salario2 = funcionario2.salarioTotal();
let salario3 = funcionario3.salarioTotal();


