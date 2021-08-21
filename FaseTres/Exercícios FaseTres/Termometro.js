/*ALgoritmos - 14 - O programa “termômetro” lê uma temperatura em graus Celsius, e devolve sua equivalência na escala Fahrenheit. */

var ler = require("prompt-sync")();

var TempCelsius = ler("Digite a temperatura em °C: ");
var TempFahrenheit = ((TempCelsius * 9/5) + 32);

console.log("\nA temperatura em graus Fahrenheit é: " + TempFahrenheit + "\n");