// var varia
// const nao muda

//constante de substituicao
// ICMS=0.18
const ICMS = 18/100;

//depois de definir esse valor ele não pode ser substituido
// não é possível substituir ese valro mesmo declarando com outro.

var produto1 = 50.65 * ICMS;
var produto2 = 30.90 * ICMS;

const URL = 'http://server.com.api';
obterDadosServidor(URL);

//algumas constantes ja sao declaradas por ex pi
Math.PI;

//para proteger algo pra nao ser modificado posso colocar por exemplo no comando para adicionar o prompt

const prompt = require("prompt-sync")();

//Agora pormpt nao pode ser mais alterado

