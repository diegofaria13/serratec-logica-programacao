/* O sistema "Calendário 2021" permite consultar em qual dia da semana caiu uma data, segundo o mês e dia digitados.
Mês: 8
Dia: 3

O dia 3 de agosto é terça-feira.


Considere que o calendário gerado é 'fictício'. Portanto, independente do mês digitado, serão utilizadas as datas de agosto. Dica: Observe o dia da semana do primeiro dia do mês.
 */

var ler = require("prompt-sync")();

var mes = ler("Mês: ");
var dia = parseInt(ler("Dia: "));

switch (dia){
    case 1:
        case 8:
            case 15:
                case 22:
                    case 29:
                        console.log("O dia " + dia + " de agosto é Domingo.");
                        break;
    case 2:
        case 9:
            case 16:
                case 23:
                    case 30:
                        console.log("O dia " + dia + " de agosto é Segunda-feira.");
                        break;
    case 3:
        case 10:
            case 17:
                case 24:
                    case 31:
                        console.log("O dia " + dia + " de agosto é Terça-feira.");
                        break;
    case 4:
        case 11:
            case 18:
                case 25:
                    console.log("O dia " + dia + " de agosto é Quarta-feira.");
                    break;
    case 5:
        case 12:
            case 19:
                case 26:
                    console.log("O dia " + dia + " de agosto é Quinta-feira.");
                    break;
    case 6:
        case 13:
            case 20:
                case 27:
                    console.log("O dia " + dia + " de agosto é Sexta-feira.");
                    break;
    default:
        console.log("O dia " + dia + " de agosto é Sexta-feira.");
        break;

}