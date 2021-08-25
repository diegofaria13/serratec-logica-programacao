/* Algoritmos - 9 - Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês. Para os pagamentos recebidos entre os dias 10 a 13, será concedido um desconto na próxima mensalidade. O programa irá receber o número do boleto e o dia do pagamento, e emitir o extrato.
Dia hoje: 10
Número do Boleto: 1234
Dia de pagamento: 11
Desconto na próxima mensalidade? true

Desafios:
E se a mensagem de desconto fosse mais ‘amigável’? (Incluindo também nela o número do boleto)
Que tal obter o dia direto do computador, sem precisar digitar?
*/

var ler = require("prompt-sync")();

var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
console.log("Dia hoje: " + dia);
var numBoleto = ler("Número do Boleto: ");
var diaPagamento = ler("Dia de pagamento: ");

var desconto = (diaPagamento <= '13') && (diaPagamento >= '10');

console.log("Desconto na prócxima mensalidade do boleto número " + numBoleto + "? " + desconto);