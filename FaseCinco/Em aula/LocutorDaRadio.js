/* Aguardadndo a resposta certa.

O locutor da Rádio 90FM irá telefonar ao vivo para um dos ouvintes
que mandou um zap durante o programa. O primeiro que atender ganha uma
camiseta! Mas não vale dizer alô, diga “90FM é show”!
 */

var prompt = require("prompt-sync")();

do{
    var telefone = prompt("Seu telefone está chamando: ");

    var resposta = (telefone == "90FMShow");

    if(resposta){
        console.log("Voce ganhou, parabéns!");
    }else{
        console.log("Que pena, infelizmente você não ganhou");
    }
}while(!resposta);
