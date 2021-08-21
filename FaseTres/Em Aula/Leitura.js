//A linha pra adicionar o prompt ao VS
var prompt = require("prompt-sync")();

var nome = prompt("Qual seu nome?");
var idade = prompt("Qual a sua idade?");
var cidade = prompt("Qual a sua cidade?");
console.log("Bom dia, "+ nome + "! Voce tem "+ idade+ " anos e mora na cidade de "+ cidade);

