/* Alforitmos - 12 - Braya sempre tem a mesma rotina nos fins de semana. Pela manhã, tendo sol, vai à praia. Do contrário, aproveita pra estudar. À tarde é ainda mais regrado: para o almoço na praia, leva um lanche; em casa, feijoada. Após almoçar, assiste televisão e tira um cochilo. Agora ele quer imprimir seus hábitos em papel na sexta, após a previsão do tempo, e colar na porta da geladeira.
 */

var ler = require("prompt-sync")();

console.log("Qual a prvisão do tempo para amanha? 1 - Com sol,  2 - Sem sol");
var tempo = ler();

console.log("---Rotina do dia - By Braya---\n");
console.log("        [--Manhã--]");
if(tempo == '1'){
    console.log("   * ir à praia\n");
}else{
    console.log("   * estudar\n");
}
console.log("        [--Tarde--]");
if(tempo == '1'){
    console.log("   * ALmoço: levar lanche");
}else{
    console.log("   * Almoço: Feijoada");
}
console.log("   * assistir tv");
console.log("   * tirar um cochilo\n");