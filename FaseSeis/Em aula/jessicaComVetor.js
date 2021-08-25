
var ler = require("prompt-sync")();

//declarando vetor
var vetor = new Array(5);
var sapato = [];

//declaracao ja atribuindo
var sapato = ["Sandalia", "Bota", "Rasteirinha"];

//sapato[0] = "Sandalia"; //atribuicao a primeira posicao do vetor.
//sapato[1] = "Bota";
//sapato[2] = "Rasteirinha";
sapato[3] = "Tenis azul";
sapato[4] = "Scarpin";
sapato[0] = "Chinelo";

var numero = ler ("Qual o numero da gaveta?");
var calcado = ler("Qual sapato você quer guardar?");

//atribuicao com posicao numerica (indice)
sapato[numero] = calcado;

/* a atribuicao acima elimina esse if
if(numero == "0"){
    sapateira[0] = calcado;
}else if (numero == "1"){
    sapateira[1] = calcado;
}else if (numero == "2"){
    sapateira[2] = calcado;
}else if (numero == "3"){
    sapateira[3] = calcado;
}else if (numero == "4"){
    sapateira[4] = calcado;
}
*/

numer = ler("Qual o numero da gaveta para ver o sapato? ");

calcado = sapato[numero];

/* todos os ifs sao substituidos pela atribuicao acima da recuperacao do valor da variavel.
if(numero == 0){
    calcado = sapateira[0];
}else if(numero == 1){
    calcado == sapateira[1];
}else if(numero == 2){
    calcado == sapateira[2];
}else if(numero == 3){
    calcado == sapateira[3];
}else if(numero == 4){
    calcado == sapateira[4];
}
*/
console.log("Na gaveta " + numero + " esta guardado o sapato " + calcado);
    


