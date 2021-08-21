/* Algoritmos - 16 - O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob o signo de Aquário são mais inteligentes que os demais. */

var ler = require("prompt-sync")();

var mes = ler("Mês do seu nascimento: ");
var dia = ler("Seu dia de nascimento: ");
var inteligente = mes == 1;

console.log("Você é inteligente: " + inteligente);