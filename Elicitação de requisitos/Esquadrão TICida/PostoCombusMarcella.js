/*Serratec - Lógica de programação - 2021.2
Professor: Moisés do Amaral Baddini.
Atividade: Elicitação de requisitos.
Squad: Esquadrão TICida.
Proposto por: Marcella Alzuguir
Autor: Diego Dias Faria da Silveira.
Data: 21/08/2021
Algoritmo: Posto de combustível quer saber qual de seus combustíveis tem a preferência de seus clientes. Primeiramente, o cliente deve informar o tipo de combustível através dos seguintes códigos: 1.Gasolina, 2. alcool, 3.GNV e 4. diesel 5.fim. Se o cliente informar um código inválido, devemos pedir um novo código até que o mesmo seja válido. O programa encerrará caso ele informe o código 5. Após o encerramento, deve aparecer a mensagem "Obrigado" e também a quantidade de cada combustivel. */

var ler = require("prompt-sync")();

var gasolina = 0;
var alcool = 0;
var gnv = 0;
var diesel = 0;


console.log("\n _________________________________________________ ");
console.log("|       ==== Pesquisa de Combustíveis: ====       |");
console.log("|    Escolha o combustível de sua preferência:    |");
console.log("|     1 - Gasolina    2 - Alcool     3 - GNV      |");
console.log("|           4 - Diesel     5 - Sair               |");
console.log("|_________________________________________________|");

do{
    var escolha = 0;
    escolha = ler("Qual a sua preferência: ");

    switch (escolha) {
        case '1':
            console.log("Obrigado por votar! Você escolheu Gasolina.\n");
            gasolina++;
            break;
        case '2':
            console.log("Obrigado por votar! Você escolheu Álcool.\n")
            alcool++;
            break;
        case '3':
            console.log("Obrigado por votar! Você escolheu GNV.\n")
            gnv++;
            break;
        case '4':
            console.log("Obrigado por votar! Você escolheu Diesel.\n")
            diesel++;
            break;
        case '5':
            console.log("Esperamos contar com seu voto numa próxima vez.\n");
            break;
        default:
            console.log("Opção inválida! \n")
            break;
    }

    var continuar = ''
    continuar = ler("Há mais alguém para votar? (Responda 'S' para sim e 'N' para não)");

    
}
while (continuar == 'S' || continuar == 's');

console.log(" _____________________________________")
console.log("|  ===== Resultado da pesquisa =====  |")
console.log("|   Gasolina ........... " + gasolina + " votos.     |");
console.log("|   Álcool ............. " + alcool +   " votos.     |");
console.log("|   GNV ................ " + gnv + " votos.     |");
console.log("|   Diesel ............. " + diesel + " votos.     |");
console.log("|_____________________________________|\n");


console.log("Obrigado por votar!\n");