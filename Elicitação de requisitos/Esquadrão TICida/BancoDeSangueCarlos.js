/*Serratec - Lógica de programação - 2021.2
Professor: Moisés do Amaral Baddini.
Atividade: Elicitação de requisitos.
Squad: Esquadrão TICida.
Proposto por: Carlos Alberto.
Autor: Diego Dias Faria da Silveira.
Data: 21/08/2021 
Algoritmo: O Banco de Sangue do Hospital H.S.C., está precisando repor o seu estoque de sangue, que está abaixo do limite minimo. É feito uma campanha publicitária local, onde foi ofertado um brinde para os doadores que concluírem  as suas doações no período da campanha. O Hospital necessitava repor com urgência os tipos de sangue: A,B e O.  Pergunta:  Os doadores poderão doar sangue: sim ou não.
 */

var ler = require("prompt-sync")();

console.log("\n**********************************************************************************");
console.log("*O Hospital H.S.C está precisando de doadores de sangue para repor o seu estoque!*");
console.log("**********************************************************************************\n");

var tipoSang = ler("Qual é o seu tipo sanguíneo: ");

if(tipoSang == 'o' || tipoSang == 'O' || tipoSang == 'a' || tipoSang == 'A' || tipoSang == 'b' || tipoSang == 'B'){
    console.log("\nParabéns! Você pode doar! Venha salvar vidas!\n");
}else{
    console.log("\nNo momento não precisaremos do seu tipo sanguínio, por favor, doe a outros bancos e ajude a salvar vidas!\n");
}