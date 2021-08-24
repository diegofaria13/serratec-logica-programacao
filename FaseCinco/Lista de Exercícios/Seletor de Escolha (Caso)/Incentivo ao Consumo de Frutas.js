/* No blog “Incentivo ao consumo de frutas”, o aluno digita o nome de sua fruta favorita, e receberá alguma informação singular sobre ela. Para se tornar interessante, a lista deve conter pelo menos 6 curiosidades, e uma sobre frutas de modo geral. */

var ler = require("prompt-sync")();

console.log("==== Curiosidade sobre as frutas ====")
console.log("1 - Maçã,  2 - Morango, 3 - Laranja, 4 - Abacaxi, 5 - Goiaba, 6 - Pêra,  7-  Curiosidade geral sobre frutas");

var fruta = ler("Sobre qual das frutas quer saber uma curiosidade? Digite o número correspondente: ");

switch (fruta){
    case "1":
        console.log("25% do volume de uma maçã é ar");
        break;
    case "2":
        console.log("Morangos eram considerados venenosos na Argentina até meados de 1800.");
        break;
    case "3":
        console.log("O suco de laranja é um bom remédio natural para a indigestão. Ele é 10 mil vezes mais ácido do que o pH do sangue humano e se torna alcalino no estômago");
        break;
    case "4":
        console.log("O abacaxi é um alimento energético: A fruta oferece uma boa quantidade de nutrientes e pode ser consumida como um repositor energético após atividades física.");
        break;
    case "5":
        console.log("Ao natural contém bastante vitamina C, sendo que a goiaba de polpa branca apresenta níveis dessa vitamina até quatro ou cinco vezes a mais que a laranja e o limão.");
        break;
    case "6":
        console.log("A pera Ajudar a emagrecer porque é uma fruta que contém poucas calorias e são rica em fibras que diminuem o apetite.");
        break;
    default:
        console.log("Em virtude da grande quantidade de benefícios atribuídos às frutas, recomenda-se que uma pessoa faça a ingestão de 5 a 9 porções de vegetais e frutas por dia. Um baixo consumo de frutas está relacionado com o aumento do risco de desenvolver problemas cardiovasculares e alguns tipos de câncer.");
        break;
}