/* O setor de RH quer fazer uma separação dos candidatos à vaga de programador usando um critério diferente: As pessoas com nome iniciado em vogal serão entrevistadas na segunda-feira, e as pessoas com nome iniciado em consoante, na terça-feira. */

const ler = require("prompt-sync")();

var nome = "string";
var vogal = false;

do{
    nome = ler("Qual o seu primeiro nome?");

    if (nome == "") break;

    var pri = nome.substr(0, 1);
    
    nome = nome.toUpperCase();
    var pri = nome.substr(0, 1); 

    vogal = (pri == 'A') || (pri == 'E') || (pri == 'I') || (pri == 'O') || (pri == 'U');

    if(vogal)
        console.log("Sua entrevista será na segunda");
    else
        console.log("Sua entrevista será na terça.");

} while (nome != "");


console.log("O RH deseja um bom dia!");