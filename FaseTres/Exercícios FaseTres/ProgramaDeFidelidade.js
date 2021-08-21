/*Algoritmos - 25 - O “Programa de fidelidade” solicitou a criação do sistema “Ver os seus pontos”, onde o cliente poderá consultar seu saldo de pontos. O cliente irá digitar um número inteiro correspondente aos seus cupons. Cada cupom corresponde a 1 ponto. */

var ler = require("prompt-sync")();

var qtdCupons = ler("Digite sua quantidade de cupons: ");

var qtdPontos = qtdCupons * 1;

console.log("\nDe acordo com a sua quantidade de cupons, você possui " + qtdPontos + " Pontos no programa de fidelidade!\n");