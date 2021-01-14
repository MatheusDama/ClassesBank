import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupança } from "./ContaPoupança.js";

const cliente1 = new Cliente("Matheus", 8182821828);
const cliente2 = new Cliente("Javascript", 8182821828);

const conta1Cliente1 = new ContaCorrente(cliente1, 1001);
const conta2Cliente1 = new ContaPoupança(100, cliente1, 1002);

const conta1Cliente2 = new ContaCorrente(cliente2, 1001);
const conta2Cliente2 = new ContaPoupança(200, cliente2, 1002);

// console.log(conta1Cliente1);
// console.log(conta2Cliente1);

// console.log(conta1Cliente2);
// console.log(conta2Cliente2);
