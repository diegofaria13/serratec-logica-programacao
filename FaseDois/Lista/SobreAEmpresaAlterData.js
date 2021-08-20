/* Algoritmos - 18 - Escrever o programa “Sobre a Empresa Alterdata”. Sua saída será a mensagem: “A Alterdata tem x anos.”, onde o x é a idade da empresa. A idade será atribuída em uma variável inteira. */

var ler = require("prompt-sync")();
var idade = ler("Quantos anos tem a empresa Alterdata?");

console.log("A Alterdata tem "+ idade + " anos.");