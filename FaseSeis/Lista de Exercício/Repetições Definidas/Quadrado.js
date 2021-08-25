/* ALgoritmo - 7 - O programa “ao quadrado” imprime os quadrados dos números de um a nove, separando cada expressão em uma linha.
 */

console.log("Quadrado:")

var numero = 0;

for(numero = 1; numero <= 9; numero++){

var quadrado = numero * numero

var resposta = numero + " ^ 2 = " + quadrado;
console.log(resposta);
}

console.log("Fim dos quardrados.");