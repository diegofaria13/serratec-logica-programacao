/* O “mini DP” aumentou seus cálculos. Agora, considere a jornada de trabalho semanal de um funcionário, que é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Considerando que o mês possui 4 semanas exatas, e que a entrada de horas será um valor maior que a jornada normal.
Salário base (valor da hora * horas normais)
Valor de horas extras
Valor do desconto para o INSS
Salário líquido (Salário base + horas extras – desconto INSS)
Imprimir na tela o contracheque do funcionário.*/

var ler = require("prompt-sync")();

let nome = ler("Digite o nome do funcionário: ");
let horasTrabalhadas = parseInt(ler("Digite o número de horas trabalhadas no mês: "));
let salarioHora = parseInt(ler("Digite o salário do funcionário por hora: "));
let descontoInss = parseInt(ler("digite a porcentagem do desconto do inss: "));
let porcDescInss = descontoInss/100;
let salarioBruto = horasTrabalhadas * salarioHora;
let salarioLiquido = 0;
let descFinalInss = salarioBruto * porcDescInss;

if( horasTrabalhadas > 160){
    horasExtras = horasTrabalhadas - 160;
    var valorHorasExtrasTraba = (horasExtras * (salarioHora + (salarioHora* 0.5)));
    var novoSalBrut = salarioBruto + valorHorasExtrasTraba;
    descFinalInss = novoSalBrut * porcDescInss;
    salarioLiquido = novoSalBrut - descFinalInss;
}else{
    salarioLiquido = salarioBruto - descFinalInss;
}

console.log("Funcionário: " + nome);
console.log("Salário base: R$" + salarioBruto.toFixed(2));
console.log("Valor de horas extras: R$ " + valorHorasExtrasTraba.toFixed(2));
console.log("Desconto INSS: R$ " + descFinalInss.toFixed(2));
console.log("Salário Líquido: R$ " + salarioLiquido.toFixed(2));
