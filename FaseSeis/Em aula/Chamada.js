
var alunos = [];
alunos[0] = "Victor";
alunos[1] = "Vanderson";
alunos[2] = "Samuel";
alunos[3] = "Rodrigo";
alunos[4] = "Rodrigo";
alunos[5] = "Raquel";
alunos[6] = "Rafael";
alunos[7] = "Pedro";
alunos[8] = "Pedro";
alunos[9] = "Núria";
alunos[10] = "Nathan";
alunos[11] = "Matheus";
alunos[12] = "Marcos";
alunos[13] = "";
alunos[14] = "";
alunos[15] = "Marcella";
alunos[16] = "Luciana";
alunos[17] = "Leandro";
alunos[18] = "Karina";
alunos[19] = "Higor";
alunos[20] = "Gustavo";
alunos[21] = "Guilherme";
alunos[22] = "Gilnei";
alunos[23] = "Eduardo";
alunos[24] = "Diego";
alunos[25] = "Daniel";
alunos[26] = "Carolina";
alunos[27] = "Carlos";
alunos[28] = "Bruno";
alunos[29] = "Maria";
alunos[30] = "Beatriz";
alunos[31] = "Angelita";
alunos[32] = "Andre";
alunos[33] = "Andre";
alunos[34] = "Adrian";

var AlunosPrsentes = 0;
var qtdAlunos = 0;
var faltou = 0;

for(var i = 0; i < alunos.length; i++){
    if(alunos[i] != ""){
        AlunosPrsentes++;
    }else{
        faltou++;
    }
    
    qtdAlunos++

}

console.log("A quantidade total de alunos é: " + qtdAlunos);
console.log("A quantidade de alunos faltantes é: " + faltou);
console.log("A quantidade de alunos Presentes é: " + AlunosPrsentes);

