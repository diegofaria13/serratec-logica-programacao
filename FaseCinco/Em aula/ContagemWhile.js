//conta de 1 a 10 usando while.

var prompt = require("prompt-sync")();

var contar = 0;

while(contar < 10){
    contar++;
    console.log("Número é", contar);
}
console.log("Fim da contagem");