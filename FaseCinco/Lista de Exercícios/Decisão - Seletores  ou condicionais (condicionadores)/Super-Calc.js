/* Algoritmos - 14 - A “SuperCalc” é a calculadora que, além dos números, lê o operador que será aplicado, e depois realiza a operação. Considere as entradas na ordem: primeiro número, sinal (+, -, * ou /) e segundo número. */

var ler = require("prompt-sync")();

var numero1 = parseInt(ler("Primeiro número: "));
var operador = ler("operador: ");
var numero2 = parseInt(ler("Segundo número: "));

var conta = (numero1 + operador + numero2);

switch(operador){
    case '+': resultado = (numero1 + numero2); break;
    case '-': resultado = (numero1 - numero2); break;
    case '*': resultado = (numero1 * numero2); break;
    case '/': resultado = (numero1 / numero2); break;
}

console. log(" "+ conta + " = " + resultado);

