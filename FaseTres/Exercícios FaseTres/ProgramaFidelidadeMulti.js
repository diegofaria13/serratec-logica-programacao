/* ALgoritmos - 26 - O “Programa de fidelidade” aumentou o sistema, criando o “Multiplique seus pontos”. O cliente irá digitar quantos cupons tem, e o sistema irá triplicar o valor. */

var ler = require("prompt-sync")();

var qtdCupons = ler("Digite sua quantidade de cupons: ");

var qtdPontos = qtdCupons * 3;

console.log("\nSeus cupons agora valem " + qtdPontos + " Pontos no programa de fidelidade!\n");