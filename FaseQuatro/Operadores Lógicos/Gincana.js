/* Desafio - 18 - Na gincana de arrecadação de alimentos, as equipes A e B têm uma semana para formar uma pilha com as doações. Sendo que a empresa irá dobrar a quantidade de quilos de feijão arrecadados. Ganha um ponto extra a equipe cuja quantidade de pacotes permitir a montagem de kits com 3 alimentos. O programa “Gincana” irá apurar as quantidades recolhidas e exibir o nome da equipe vencedora. */

var ler = require("prompt-sync")();

console.log("Equipe A:")
var pctsA = ler("Pacotes: ");
var feijaoA = ler("Feijão: ");

console.log("\nEquipe B: ");
var pctsB = ler("Pacotes: ");
var feijaoB = ler("Feijão: ");

var totalA = (feijaoA * 2) + parseInt(pctsA);
var extraA = pctsA % 3 == 0;
var totFinalA = extraA + totalA;


var totalB = (feijaoB * 2) + parseInt(pctsB);
var extraB = pctsB % 3 == 0;
var totFinalB = extraB + totalB;

console.log("\n[Apuração]");
console.log("Equipe A: " + totFinalA);
console.log("Equipe B: " + totFinalB);

var AfoiMelhor = totFinalA > totFinalB;
var BfoiMelhor = totFinalB > totFinalA;

var campeaoA = AfoiMelhor || "Equipe B!";
var campeaoB = BfoiMelhor || "Equipe A!";

var resultfinal = campeaoB && campeaoA;

console.log("E a vencedora é: " + resultfinal);