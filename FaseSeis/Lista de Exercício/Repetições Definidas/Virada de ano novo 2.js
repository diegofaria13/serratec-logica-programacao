/*Algoritmos - 11 - Pimentinhas para a virada de ano:
É possível fazer o mesmo programa sem a inversão do laço?
E se ao invés de números, a contagem fosse exibida em texto?
*/

//a - sem inverter o laço
for(var i = -10; i < 0; i++){

    console.log(Math.abs(i) + "...");
}
console.log("Feliz ano novo!\n");

//b usar texto ai inves de numeros

var texto = ["Dez", "Nove", "Oito", "Sete", "Seis", "Cinco", "Quatro", "Três", "Dois", "Um"];

for(var i = 0; i < 10; i++){

    console.log( texto[i] + "...");
}
console.log("Feliz ano novo!");