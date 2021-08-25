/*As linhas da empresa da capital sao identidficadas por numero. A empresa pao de acucar opera 2 linhas. O passageiro ira digitar o numero do onibus que esta vindo, e o programa mostra o nome da linha/trajeto*/

var ler = require("prompt-sync")();

var linhas = [];

linhas[0] = "Mury";
linhas[1] = "Cordoeira";
linhas[2] = "Cordeiro";
linhas[3] = "Cachoeiras";
linhas[4] = "Teresopolis";
linhas[5] = "Niteroi";
linhas[6] = "Rio de Janeiro";
linhas[7] = "Macuco";

var escolha = ler("Escolha a linha para ver o destino: ");

var mostrador = linhas[escolha - 1];

console.log("Essa linha vai para: " + mostrador);
