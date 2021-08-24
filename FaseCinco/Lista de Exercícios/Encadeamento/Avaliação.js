/* ALgoritmos - 5 - Mesmo com aulas online, os alunos do cursinho continuam sendo avaliados com duas provas, a P1 e a P2, que valem 5 pontos inteiros cada. Pela soma dos pontos, o aluno saberá sua situação na disciplina.
Reprovado = 0 a 4 |Recuperação = 4 a 6 |Aprovado = 6 a 8 |Destaque = 8 a 10 */

var ler = require("prompt-sync")();

var nota1 = ler("Qual foi a sua primeira nota? (0 a 5)");
var nota2 = ler("Qual foi a sua segunda nota? (0 a 5)");

var notaFinal = parseInt(nota1) + parseInt(nota2);

if(notaFinal >= 4){
    if(notaFinal >= 8){
        console.log("Parabéns! Você foi um destaque!");
    }else{
        if( notaFinal >= 6){
        console.log("Você foi aprovado.");
        }else{
            console.log("Voce está de recuperação.");
        }
    }
}else{
    console.log("Infelizmente você foi reprovado");
}
