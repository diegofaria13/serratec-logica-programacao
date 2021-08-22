/*Serratec - Lógica de programação - 2021.2
Professor: Moisés do Amaral Baddini.
Atividade: Elicitação de requisitos.
Squad: Esquadrão TICida.
Proposto por: Carol Tardin
Autor: Diego Dias Faria da Silveira.
Data: 21/08/2021
Algoritmo: Olá, dev. Estou criando um novo mapa astral para minhas previsões astrológicas. 
Para isso, os signos serão remodelados conforme a seguir:
Quem nasceu no 1º trimestre do ano será do signum mar, quem nasceu no 2º trimestre será terra, no 3º trimestre será Sol e por fim, no
4º trimestre, será lua. 
Preciso que colete a data de nascimento mas eu não preciso do ano, somente do dia e o mês. Após o usuário informar sua data o sistema deve dizer qual signum. 
Por fim, faça uma pesquisa de satisfação para saber se ele gostou ou não gostou. */

var ler = require("prompt-sync")();
var esolha='';
var signo='';
var b = ''

console.log(" _______________________________________");
console.log("| ........... Mapa Astral ...........   |");
console.log("|_______________________________________|");
console.log("    |       |       |        |       |  ");
console.log("    *       *       *        *       *  ");

do{
var dia = ler("  Qual é o dia do seu nascimento?  ");
var mes = ler("  Qual o mês do seu nascimento?    ");

if(mes < 4){
    signo = 'Mar'
    console.log("\nDe acordo com o seu aniversário, você é do signum " + signo + ".\n");
}
if(mes >= 4 && mes <= 6){
    signo = 'Terra'
    console.log("\nDe acordo com o seu aniversário, você é do signum " + signo + ".\n");
}
if(mes >= 7 && mes <= 9){
    signo = 'Sol'
    console.log("\nDe acordo com o seu aniversário, você é do signum " + signo + ".\n");
}
if(mes >= 10 && mes <= 12){
    signo = 'Lua'
    console.log("\nDe acordo com o seu aniversário, você é do signum " + signo + ".\n");
}

    escolha = ler("Deseja consultar outra data? (Digite 's' para sim e 'n' para não)");
    console.log("\n");

}while(escolha == 'S' || escolha == 's');

console.log("\nObrigado por participar!")
