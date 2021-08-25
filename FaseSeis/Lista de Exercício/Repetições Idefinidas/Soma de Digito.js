/*Desafio - 12 - Na “soma de dígitos”, o programa mostra a soma dos algarismos do número inteiro.
Seu número: 2021
A soma é 5
*/

var ler = require("prompt-sync")();

var numero = parseInt(ler("Seu número é: "));

var soma = 0;

while(numero != 0){
    soma+= Math.floor(numero) % 10;
    numero = Math.floor(numero) / 10;
}

console.log("A soma é: " + soma);