/* Algoritmos - 8 - A finalidade do sistema "Triagem" é ajudar o hospital a identificar os pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas, receberá a avaliação na tela.
Paciente: Moisés
Já vacinado: ok
[Triagem]
Sujeito a infecção? false

 */

var ler = require("prompt-sync")();

var nome = ler("Paciente: ");
var perguntaVacinado = ler("Já vacinado: ");

var estaVacinado = "nao";

var comparaVacinado = perguntaVacinado == estaVacinado;

console.log("[Triagem]")
console.log("Sujeito a infecção: " + comparaVacinado);