/* Algoritmos - 15 - A “continha oposta” lê um número e mostra seu valor negativo. */

var ler = require("prompt-sync")();

var numero = ler("Digite um número: ");
var negativo = numero * (-1);

console.log("\nO oposto do número é: " + negativo + "\n");