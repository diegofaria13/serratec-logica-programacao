/* Algoritmos - 17 - Doar sangue é muito importante. Porém, nem todos podem fazê-lo, existem alguns impedimentos (que podem ser temporários). Ajude o “Banco de sangue” a fazer a triagem dos voluntários que responderam “Sim” para as restrições. */

var ler = require("prompt-sync")();

console.log("== Banco de Sangue ==");
console.log("[Digite 'S' para Sim ou 'N' para Não nas restrições a seguir: ");

var idade = ler("Idade abaixo de 16 ou acima de 69 anos? ");
var peso = ler("Pesa menos de 50kg? ");
var hepatite = ler("Portador de hepatite? ");
var malaria = ler("Já teve malária? ");
var doou = ler("Fez doações recentes? ");

var result = (idade == "N") && (peso == 'N') && (hepatite == 'N') && (malaria == 'N') && (doou == 'N');

console.log("\n[Resultado da triagem]");
console.log("Pode doar sangue: " + result);
