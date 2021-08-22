/* Algoritmos - 15 - O programa “Três ângulos” lê os valores dos ângulos de uma forma, e escreve se as medidas formam um triângulo válido. */

var ler = require("prompt-sync")();

var a = ler("Digite o valor do primeiro ângulo do triangulo: ");
var b = ler("Digite o valor do segundo ângulo do triangulo: ");
var c = ler("Digite o valor do terceiro ângulo do triangulo: ");

/*Para existir um triângulo é necessário que a soma de sus angulos seja 180°*/
var teste1 = (parseInt(a)+ parseInt(b)+ parseInt(c)) == 180;

console.log("Triangulo existe? " + teste1);