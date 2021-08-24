/* Algoritmos - 4 - O posto de Saúde irá vacinar hoje contra a Covid os cidadãos com 67 anos. Ao entrar, deve ser solicitada a idade, para então exibir as mensagens de direcionamento:
acima de 67 anos = Por quê não vacinou ainda?
Abaixo de 67 anos = Volte na próxima semana
67 anos completos = Vacinação hoje. */

var ler = require("prompt-sync")();

var idade = ler ("Qual a sua idade? ");

if(idade >= '67'){
    if(idade == '67'){
    console.log("\nVacinação hoje.\n");
    }else{
        console.log("\nPor quê não vacinou ainda? \n");
    }
}else{
    console.log("\nVolte na próxima semana.\n");
}