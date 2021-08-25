/* Serratec - Lógica de programação - 2021.2
Professor: Moisés do Amaral Baddini.
Atividade: Elicitação de requisitos.
Squad: Esquadrão TICida.
Prposta de: Gilnei Lima
Autor: Diego Dias Faria da Silveira.
Data: 21/08/2021
ALgoritmo:
Vamos criar um pequeno jogo de esconde esconde. Para dois participantes o participante 1 terá 5 lugares para se esconder: 1 - embaixo da cama; 2 - armário; 3 - porão; 4 - atrás da porta; 5 - banheiro. O participante 1 deverá escolher um dos lugares pra se esconder. Em seguida são apresentadas as opções para o participante 2, ele terá duas chances para encontrar onde o participante 1 se escondeu. Caso ele acerte o participante 1 perde. Caso erre ele perde. */

var ler = require("prompt-sync")();

var lugar = ["embaixo da cama 🛌", "no Armário 🧦", "no Porão 🦡", "atrás da porta 🚪", "no banheiro"];

var nome1 = ler("Olá! Digite o seu nome: ");
console.log("\nOlá " + nome1 + " você será o Jogador1!");

console.log("\nEstes são os melhores locais para se esconder 🙈");
console.log("1 - " + lugar[0]);
console.log("2 - " + lugar[1]);
console.log("3 - " + lugar[2]);
console.log("4 - " + lugar[3]);
console.log("5 - " + lugar[4]);

var escolha1 = ler("Onde você prefere se esconder? ");
console.log("\Você se escondeu " + lugar[escolha1 - 1] + "\n\n");

var nome2 = ler("Olá! Digite o seu nome: ");
console.log("\nOlá " + nome2 + " você será o Jogador2!");

console.log("\nEstes são os locais que " + nome1 + " pode ter se escondido: 🏃");
console.log(lugar[0]);
console.log(lugar[1]);
console.log(lugar[2]);
console.log(lugar[3]);
console.log(lugar[4]);

var escolha2 = ler("Onde você acha que " + nome1 + " se escondeu? ");

if(escolha2 != escolha1){
    console.log("\nErrrrooou!🎤😱" + nome1 + " não está " + lugar[escolha2 - 1] + " mas você tem uma última tentativa.\n");

    var escolha2 = ler("Onde você acha que " + nome1 + " se escondeu? ");
    
    if(escolha2 != escolha1){
        console.log("\nErrrrrooooooou! De novo!🎤😱 " + nome1 + " estava " + lugar[escolha1 - 1] + ". Parabéns, " + nome1 + "! você foi o grande vencedor!!🎉😎\n");
    }else{
        console.log("\nAchou!😎 " + nome1 + " estava mesmo " + lugar[escolha2 - 1] + ". Parabéns, " + nome2 + "! Você foi o grande vencedor! 🎉\n");  
    }
}else{
    console.log("\nAchou!😎 " + nome1 + " estava mesmo " + lugar[escolha2 - 1] + ". Parabéns, " + nome2 + "! Você foi o grande vencedor!! 🎉 \n"); 
}
