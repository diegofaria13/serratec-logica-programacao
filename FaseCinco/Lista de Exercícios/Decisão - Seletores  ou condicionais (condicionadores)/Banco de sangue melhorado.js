/* Algoritmos - 10 - Adaptar o aplicativo do “Banco de sangue”, criando duas novas versões:
Alterar a mensagem de resultado, para dizer quais motivos impediram o voluntário de participar da doação (ou parabenizar quando aprovado).
Assim que a primeira restrição for atendida, não serão feitas as  perguntas subsequentes.
 */

var ler = require("prompt-sync")();

console.log("== Banco de Sangue ==");
console.log("[Digite 'S' para Sim ou 'N' para Não nas restrições a seguir: ");

var idade = ler("Idade abaixo de 16 ou acima de 69 anos? ").toUpperCase();
var peso = ler("Pesa menos de 50kg? ").toUpperCase();
var hepatite = ler("Portador de hepatite? ").toUpperCase();
var malaria = ler("Já teve malária? ").toUpperCase();
var doou = ler("Fez doações recentes? ").toUpperCase();

if(idade == "S"){
    console.log("\n[Resultado da triagem]");
    console.log("O paciente não pode doar devido a sua Idade.");
}else if (peso == "S"){
    console.log("\n[Resultado da triagem]");
    console.log("O paciente não pode doar devido a seu Peso.");
}else if (hepatite == "S"){
    console.log("\n[Resultado da triagem]");
    console.log("O paciente não pode doar pois tem ou teve Hepatite.");
}else if( malaria == "S"){
    console.log("\n[Resultado da triagem]");
    console.log("O paciente não pode doar pois tem ou teve Malária.");
}else if( doou == "S"){
    console.log("\n[Resultado da triagem]");
    console.log("O paciente não pode doar pois fez doação recentemente.");
}else{
    console.log("\n[Resultado da triagem]");
    console.log("Parabéns! Você pode doar sangue!");
}

