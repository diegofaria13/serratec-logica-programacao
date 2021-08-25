/* Desafio - 13 - O programa “Estatístico” irá somar todos os números divisíveis por três entre 3 e 300, e além de exibir o resultado, irá dizer se o resultado também é divisível por três!
*/

var somaDivisiveis = 0;
var numero = 300; //incluindo 300, para não incluir basta colocar 299.

while(numero > 2){ // para não incluir o 3 basta colocar 3.
    if((numero % 3) == 0){
        somaDivisiveis+= numero;
    }
    numero--;
}
if((somaDivisiveis % 3) == 0){
console.log("A soma é " + somaDivisiveis + " e também é divisível por 3.");
}else{
    console.log("A soma é " + somaDivisiveis + " e não é divisível por 3.");
}