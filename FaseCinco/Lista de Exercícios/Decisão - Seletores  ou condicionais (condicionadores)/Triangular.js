/*Algoritmos - 15 - O programa “Triangular” lê as medidas do triângulo, e informa se ele é equilátero, isósceles ou escaleno. */

var ler = require("prompt-sync")();

let a = ler("Valor do primeiro lado do triângulo: ");
let b = ler("Valor do segundo lado do triângulo: ");
let c = ler("Valor do terceiro lado do triângulo: ");

if((a == b) && (a == c)){
    console.log("O triângulo é equilátero.");
}else if((a == b) || (a == c)){
    console.log("Otriângulo é isóceles.");
}else{
    console.log("O triângulo é escaleno.")
}