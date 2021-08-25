
/* Jessica tem sapateira com 5 sapatos*/

var ler = require("prompt-sync")();

//na forma que viimos ate hoje seria feito:
var sapateira0 = "";
var sapateira1 = "";
var sapateira2 = "";
var sapateira3 = "";
var sapateira4 = "";

const numero = ler ("Qual o numero da gaveta?");
const calcado = ler("Qual sapato você quer guardar?");

if(numero == "0"){
    sapateira0 = calcado;
}else if (numero == "1"){
    sapateira1 = calcado;
}else if (numero == "2"){
    sapateira2 = calcado;
}else if (numero == "3"){
    sapateira3 = calcado;
}else if (numero == "4"){
    sapateira4 = calcado;
}

numer = ler("Qual o numero da gaveta para ver o sapato? ");

if(numero == 0){
    calcado = sapateira0;
}else if(numero == 1){
    calcado == sapateira1;
}else if(numero == 2){
    calcado == sapateira2;
}else if(numero == 3){
    calcado == sapateira3;
}else if(numero == 4){
    calcado == sapateira4;
}

console.log("Na gaveta " + numero + " esta guardado o sapato " + calcado);
    
