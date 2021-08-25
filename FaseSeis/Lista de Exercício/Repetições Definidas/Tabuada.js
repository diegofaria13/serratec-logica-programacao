/*Algoritmo - 9 - Vou tomar a tabuada! O aluno de matemática escolhe o número, e o sistema lhe ensina a contar.
*/

var ler = require("prompt-sync")();

var numero = ler("Você deseja consultar a tabuada de que número?");

console.log("Tabuada:")

for(i = 1; i <= 10; i++){

var tabuada = numero * i;

var resposta = numero + " * " + i + " = " + tabuada;
console.log(resposta);
}

console.log("Fim da tabuada.");