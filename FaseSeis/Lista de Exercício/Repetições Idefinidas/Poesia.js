/*ALgoritmo - 7 - No programa “Poesia” um trecho de uma composição conhecida é apresentado na tela. Após imprimir, o programa pergunta se o leitor quer apreciar novamente os versos. */

var ler = require("prompt-sync")();

const poesia = "Bora bora bora bora pro piseiro\b bora bora bora meter dança de vaqueiro";

console.log("Leia a poesia:");
var resposta = "S";

do{
    console.log(poesia);
    resposta = ler ("Deseja apreciar novamente os versos? S ou N?");
} while( resposta == "S");