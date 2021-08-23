/*Algoritmos - 12 - O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.*/

var ler = require("prompt-sync")();

var limite = 10;

var numPesso = ler("Quantas pessoas estão dentro da loja?");

var liberado = numPesso < 10;

console.log("Cliente pode entrar? " + liberado);