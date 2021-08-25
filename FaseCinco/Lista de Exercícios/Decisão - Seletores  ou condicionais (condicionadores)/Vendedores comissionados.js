/* Algoritmos - 11 - Os "vendedores comissionados" recebem 5% do valor de cada produto vendido. Aqueles que batem a meta de 5 mil em vendas, recebem um adicional de 9% sobre o excedente. Seu programa irá receber o valor total de vendas e emitir o recibo de comissão.
Vendas totais: 5230.66
Sua comissão: 261.53
Valor adicional: 23.54

 */
var ler = require("prompt-sync")();

var vendasTotais = parseFloat(ler("Vendas totais: "));

var comissao = vendasTotais * (5/100);
var comissaoExtra = 0;

if(vendasTotais >= 5000){
    comissaoExtra = (comissao * (9/100));
    console.log("Sua comissão: " + comissao.toFixed(2));
    console.log("Valor adicional: " + comissaoExtra.toFixed(2));
}else{
    var co
    console.log("Sua comissão: " + comissao.toFixed(2));
    console.log("Valor adicional: " + comissaoExtra.toFixed(2));
}
