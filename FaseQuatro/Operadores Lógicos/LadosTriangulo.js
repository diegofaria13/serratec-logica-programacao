/* Algoritmos - 15 - O programa “Três ângulos” lê os valores dos ângulos de uma forma, e escreve se as medidas formam um triângulo válido. */

var ler = require("prompt-sync")();

var a = ler("Digite o valor do primeiro lado do triangulo: ");
var b = ler("Digite o valor do primeiro lado do triangulo: ");
var c = ler("Digite o valor do primeiro lado do triangulo: ");

/*Para construir um triângulo é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.*/
var teste1 = (Math.abs(b-c)) < a < (b + c);
var teste2 = (Math.abs(a-c)) < b < (a + c);
var teste3 = (Math.abs(a-b)) < c < (a + b);

var existe = teste1 && teste2 && teste3;

console.log("Triangulo existe? " + existe);