/* Algoritmos 15 - Para exibir a tabela de “temperaturas”, o programa irá exibir os graus Celsius entre 0º e 40ºC, além da equivalência com os graus Fahrenheit.*/

console.log("--Temperaturas--");
console.log("Em C°   Em F° ");
var Fahrenheit = 0;


for(var i = 0; i < 41; i++){
    Fahrenheit = ( i * 9/5) + 32;
    console.log(" " + i + "       " + Fahrenheit);
}