var prompt = require("prompt-sync")();

var estado = "";
var escolha = prompt("Digite a UF onde você mora (duas letras): ");

switch(escolha){
    case 'rj':
    case 'RJ':
    case 'Rj':
    case 'rJ':
        estado = "Rio de Janeiro";
        break;
    case 'sp':
    case 'SP':
    case 'Sp':
    case 'sP':
        estado = "São Paulo";
        break;
    case 'AM':
        estado = "Amazonas";
        break;
    case 'AP':
        estado = "Amapá";
        break;
    case 'RR':
        estado = "Roraima";
        break;
    case 'PI':
        estado = "Piauí";
        break;
    case 'MS':
        estado = "Mato Grosso do Sul";
        break;
    default:
        estado = "Outro Estado";
        break;
}

console.log("O nome do seu estado é: ", estado);