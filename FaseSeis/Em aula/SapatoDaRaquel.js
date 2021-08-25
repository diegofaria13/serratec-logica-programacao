/* Sapatos */

var sapato = [];
sapato[0] = "Sandalia";
sapato[1] = "Mocacin";
sapato[2] = "Bota";
sapato[3] = "Chuteira";
sapato[4] = "Sapatilha";
sapato[5] = "Tamanco";
sapato[6] = "Kichute";
sapato[7] = "Tenis";
sapato[8] = "Havaiana";
sapato[9] = "Chuteira";
sapato[10] = "Bota";

var pesquisa = "Bota";
var encontrei = -1;
var quantos = 0;

var encontrados = [];

for(var i = 0; i < sapato.length; i++){  

    if(sapato[i] == pesquisa){
        ultimo = i;
        encontrados[quantos] = i;
        quantos++;
        //break;
    }
}

console.log("Encontrei " + quantos + " " + pesquisa);
console.log(encontrados);

if (ultimo > -1){
    console.log("Os sapatos estão nas gavetas " + encontrados);
    }else{
        console.log("Nao encontrado!");
    }