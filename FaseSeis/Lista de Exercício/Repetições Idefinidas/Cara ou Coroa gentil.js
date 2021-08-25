/*Algoritmos - 10 - O “cara ou coroa gentil” irá perguntar sua escolha e depois fica jogando a moeda até que ela caia do jeito que você queria! Cada jogada será exibida no console. */

var ler = require("prompt-sync")();

var escolha = parseInt(ler("Escolha 0 para cara ou 1 para coroa: "));
var cont = 0;

do{

    var numero = Math.floor(Math.random() * 2);
    console.log(numero)
    cont++;

}while(escolha != numero);

console.log("Voce ganhou na jogada " + cont);