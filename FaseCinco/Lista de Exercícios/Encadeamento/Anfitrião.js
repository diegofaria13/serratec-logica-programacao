/* Algoritmos - 6 - O sistema “anfitrião” decidiu melhorar a ortografia nos ingressos impressos, tanto nos plurais quanto na quantidade de visitas.
 */

var ler = require("prompt-sync")();

var visita = ler("Quantas vezes já nos visitou? ");

if( visita > 1){
    if( visita == 2){
        console.log("Visitas: " + visita);
        console.log("Você já nos visitou " + visita + " vezes");
    }else{
        console.log("Visitas: " + visita);
        console.log("Você já nos visitou " + visita + " vezes");
    }
}else{
    console.log("Visitas: " + visita);
    console.log("Você já nos visitou " + visita + " vezes");
}