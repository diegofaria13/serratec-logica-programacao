/* Algoritmo - 12 - O “cara ou coroa estatístico” vai jogar a moeda mil vezes, e depois demonstrar percentualmente as aparições de caras ou coroas.
Pesquise sobre a função de números aleatórios, para sortear um número e usá-lo como sendo a resposta da moeda. */

var cara = 0;
var coroa = 0;

for( i = 0; i < 1000; i++){
    var numero = Math.floor(Math.random() * 2);
    if(numero == 0)
        cara++;
    if(numero == 1)
        coroa++;
}

var caraPorcento = Math.abs(((coroa - 1000)/1000)*100);
var coroaPorcento = Math.abs(((cara - 1000)/1000)*100);

console.log("Numero de caras: " + cara + " que são " + caraPorcento + "% das vezes.");
console.log("Numero de coroas: " + coroa + " que são " + coroaPorcento + "% das vezes.");
