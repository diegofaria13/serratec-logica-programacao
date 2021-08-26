/* # Serratec - Parque Tecnológico Região Serrana
● Lógica de Programação - Prof. Moises do Amaral Baddini
● Atividade: Elicitação de Requisitos
● Proposto por: Daniel Cesar
● Squad de Origem (Requisito): GPS - Group of Programming Students (Squad 1)
● Autor: Diego Faria (Esquradrão TICida - Squad 2)
● Data: 25/08/2021
## Descrição:
Solicite o nome e a data de nascimento do usuário. Com essas informações, será gerado o
signo e uma descrição genérica e aleatória de sua personalidade.
 */

var ler = require("prompt-sync")();

console.log("♈ ♉ ♊ ♋ ♌ ♍ == Horóscopo == ♎ ♏ ♒ ♐ ♑ ♓");

var nome = ler(" ✨ Digite seu nome: ");

var dia = ler(" ✨ O dia do seu nascimento: ");
var diaInteiro = parseInt(dia);
var mes = ler(" ✨ O mês do seu nascimento: ");
var mesInteiro = parseInt(mes);

var mensgens = [];
mensagens = ['Motiva as pessoas e é prestativo, além de perseverante e apaixonado.',
'Se coloca em primeiro lugar, mas sem esquecer dos demais à sua volta!',
'Tem a mente aberta e é muito esperto.',
'Cuidadoso com tudo e com todos, é paciente e produtivo.',
'Animado e comunicativo, tem a mente aberta e é muito esperto.',
'Dedicado e gentil, sempre ouvindo ou cuidando de alguém por perceber suas emoções e problemas.',
'Quando coloca algo na mente, vai até o fim'];

aleatorio = Math.floor(Math.random()*7);

switch(mesInteiro){
    case 01:
        if(diaInteiro < 21){
            console.log("\nSeu signo é Capricórnio♑: " + mensagens[aleatorio]);
        }else{
            console.log("\nSeu signo é Aquário♒: " + mensagens[aleatorio]);
        }
        break;
    case 02:
        if(diaInteiro < 19){
            console.log("\nSeu signo é Aquário♒: " + mensagens[aleatorio] + "!");
        }else{
            console.log("\nSeu signo é Peixes♓: " + mensagens[aleatorio] + "!");
        }
        break;
    case 03:
        if(diaInteiro < 21){
            console.log("\nSeu signo é Peixes♓: " + mensagens[aleatorio] + "!");
        }else{
            console.log("\nSeu signo é Áries♈: " + mensagens[aleatorio] + "!");
        }
        break;
    case 04:
        if(diaInteiro < 21){
            console.log("\nSeu signo é Áries♈: " + mensagens[aleatorio] + "!");
        }else{
            console.log("\nSeu signo é Touro♉: " + mensagens[aleatorio] + "!");
        }
        break;
    case 05:
        if(diaInteiro < 21){
            console.log("\nSeu signo é Touro♉: " + mensagens[aleatorio] + "!");
        }else{
            console.log("\nSeu signo é Gêmeos♊: " + mensagens[aleatorio] + "!");
        }
        break;
    case 06:
        if(diaInteiro < 21){
            console.log("\nSeu signo é Gêmeos♊: " + mensagens[aleatorio] + "!");
        }else{
            console.log("\nSeu signo é Câncer♋: " + mensagens[aleatorio] + "!");
        }
        break;
    case 07:
        if(diaInteiro < 23){
            console.log("\nSeu signo é Câncer♋: " + mensagens[aleatorio] + "!");
        }else{
            console.log("\nSeu signo é Leão♌: " + mensagens[aleatorio] + "!");
        }
        break;
    case 08:
        if(diaInteiro < 23){
            console.log("\nSeu signo é Leão♌: " + mensagens[aleatorio] + "!");
        }else{
            console.log("\nSeu signo é Virgem♍: " + mensagens[aleatorio] + "!");
        }
        break;
    case 09:
        if(diaInteiro < 23){
            console.log("\nSeu signo é Virgem♍: " + mensagens[aleatorio] + "!");

        }else{
            console.log("\nSeu signo é Libra♎: " + mensagens[aleatorio] + "!");
        }
        break;
    case 10:
        if(diaInteiro < 24){
            console.log("\nSeu signo é Libra♎: " + mensagens[aleatorio] + "!");
        }else{
            console.log("\nSeu signo é Escorpião♏: " + mensagens[aleatorio] + "!");
        }
        break;
    case 11:
        if(diaInteiro < 22){
            console.log("\nSeu signo é Escorpião♏: " + mensagens[aleatorio] + "!");
        }else{
            console.log("\nSeu signo é Sagitário♐: " + mensagens[aleatorio] + "!");
        }
        break;
    case 12:
        if(diaInteiro < 22){
            console.log("\nSeu signo é Sagitário♐: " + mensagens[aleatorio] + "!");
            console.log("\nSeu signo é Capricórnio♑: " + mensagens[aleatorio] + "!");
        }
        break;
      
}