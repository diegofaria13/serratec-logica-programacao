/* Algoritmos - 7 - No tablet da lanchonete, o cliente pode escolher dois complementos para o seu lanche. Apenas se marcar algum item de salada, pode também escolher se quer adicionar molho. Ao finalizar, o pedido é enviado para a cozinha.
 */

var ler = require("prompt-sync")();

console.log(":Lanchonete:");
console.log("Complementos: Q= queijo, B= bacon, A= alface, T= tomate, P= picles");

var item1 = ler("Item 1:");
var item2 = ler("Item 2:");

var complemento1 = "";

switch (item1) {
    case "Q":
        complemento1 = "Queijo";
        break;
    case "B":
        complemento1 = "Bacon";
        break;
    case "A":
        complemento1 = "Alface";
        break;
    case "T":
        complemento1 = "Tomate";
        break;
    case "P":
        complemento1 = "Picles";
        break;
}

switch (item2) {
    case "Q":
        complemento2 = "Queijo";
        break;
    case "B":
        complemento2 = "Bacon";
        break;
    case "A":
        complemento2 = "Alface";
        break;
    case "T":
        complemento2 = "Tomate";
        break;
    case "P":
        complemento2 = "Picles";
        break;
}

var teraMolho = (item1 == "A") || (item1 == "T") || (item2 == "A") || (item2 == "T");

if (teraMolho){
    var molho = ler("Adicionar molho"); 
    if(molho == 'sim'){
        molho = "com";
    }else{
        molho = 'sem';
    }
}else{
    molho = "sem";
}

console.log("[Cozinha]");
console.log("Lanche com " + complemento1 + " e " + complemento2 + ", " + molho + " molho");


