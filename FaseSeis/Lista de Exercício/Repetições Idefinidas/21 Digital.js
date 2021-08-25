/*Algoritmos - 9 - No jogo de cartas “21 digital” o jogador é quem entrega uma carta ao programa, que armazena o valor e solicita a próxima carta. A vitória é do jogador quando a soma das cartas dá exatos vinte e um, ou ganha o carteador quando a soma ultrapassa esse valor.
 */

var ler = require("prompt-sync")();

somaCartas = 0;

do{
var carta = parseInt(ler("Digite uma carta: "));

somaCartas+= carta;

} while ( somaCartas < 21)

if(somaCartas == 21){
    console.log("O resultado foi " + somaCartas + " Você venceu! Parabens!"); 
}else{
    console.log("O resultado foi " + somaCartas + " o carteador vendeu!");
}