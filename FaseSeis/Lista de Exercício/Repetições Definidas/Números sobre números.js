/* Algoritmos - 13 - Em “números sobre números”, o programa solicita uma entrada inteira, mostra a sequência decrescente entre número até 1, e a soma de todos os valores da sequência. */

var ler = require("prompt-sync")();

var numero = parseInt(ler("Digite um número inteiro: "));
soma = 0;

for(var i = numero; i >0 ; i--){
    console.log(i);
    soma+= i;
}

console.log("Soma da sequência é: " + soma);