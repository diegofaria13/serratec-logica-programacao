/*Algoritmos - 11 - O sistema “Mais que mil” apresenta o resultado da soma dos 4 primeiros múltiplos de 4 acima de mil, subtraindo dos 4 primeiros números primos a partir de zero. */

//4 primeiros multiplos de 4 acima de mil são 1004, 1008, 1012 e 1016
//4 primeiros primos a partir do zero são 2, 3, 5 e 7 ou poderia ser 2357

var soma = 1004+1008+1012+1016;
console.log("A soma dos multiplos de 4 acima de 1000 é: ", soma);

var sub = 2+3+5+7;
console.log("A soma dos quatro primeiros números primos a partir de 0 é: ", sub);
var result = soma-sub;
console.log("O resultado final é: ",result);
sub = 2357;
console.log("\nA junção dos 4 primeiros números primos a partir do zero é ", sub);
result = soma-sub;
console.log("O resultado final é: ",result);


