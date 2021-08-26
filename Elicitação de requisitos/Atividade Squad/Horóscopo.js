/* # Serratec - Parque Tecnológico Região Serrana
● Lógica de Programação - Prof. Moises do Amaral Baddini
● Atividade: Elicitação de Requisitos
● Proposto por: Daniel Cesar
● Squad de Origem (Requisito): GPS - Group of Programming Students (Squad 1)
● Autor: Diego Faria (Esquradrão TICida - Squad 2)
● Data: 25/08/2021
## Descrição:
Solicite o nome e a data de nascimento do usuário. Com essas informações, será gerado o
signo e uma descrição genérica e aleatória de sua personalidade.
 */

var ler = require("prompt-sync")();

console.log("♈ ♉ ♊ ♋ ♌ ♍ == Horóscopo == ♎ ♏ ♒ ♐ ♑ ♓");

var nome = ler("Digite seu nome: ");

var dia = ler("O dia do seu nascimento: ");
var diaInteiro = parseInt(dia);
var mes = ler("O mês do seu nascimento: ");
var mesInteiro = parseInt(mes);

switch(mesInteiro){
    case 01:
        if(diaInteiro < 21){
            console.log("\nSeu signo é Capricórnio♑: A personalidade de Capricórnio é, particularmente, sábia e bastante discreta. Dificilmente você verá um capricorniano raiz cometendo loucuras impensadas ou sendo impulsivo. O comprometimento também é um ponto forte desses nativos, que fazem de tudo por quem gostam e se provam leais e confiáveis.");
        }else{
            console.log("\nSeu signo é Aquário♒: Aquário é considerado o signo dos imprevisíveis, dos que têm atitudes desconcertantes em relação às expectativas dos outros. De todos os signos, é o mais preparado para lidar com os imprevistos, pois estão cientes de que o impossível acontece muito mais do que se possa pensar.");
        }
        break;
    case 02:
        if(diaInteiro < 19){
            console.log("\nSeu signo é Aquário♒: Seu signo é Aquário: Aquário é considerado o signo dos imprevisíveis, dos que têm atitudes desconcertantes em relação às expectativas dos outros. De todos os signos, é o mais preparado para lidar com os imprevistos, pois estão cientes de que o impossível acontece muito mais do que se possa pensar.");
        }else{
            console.log("\nSeu signo é Peixes♓: Piscianos e Piscianas podem ser considerados as pessoas com a maior conexão espiritual do zodíaco. Signo de água que transborda emoções, faz dele sensível, sensitivo, empático, ingênuo, intuitivo, sonhador e artístico. ... Possuem uma mente irracional e intuitiva, às vezes ilusória e enganadora.");
        }
        break;
    case 03:
        if(diaInteiro < 21){
            console.log("\nSeu signo é Peixes♓: Piscianos e Piscianas podem ser considerados as pessoas com a maior conexão espiritual do zodíaco. Signo de água que transborda emoções, faz dele sensível, sensitivo, empático, ingênuo, intuitivo, sonhador e artístico. ... Possuem uma mente irracional e intuitiva, às vezes ilusória e enganadora.");
        }else{
            console.log(`\nSeu signo é Áries♈: Áries é um signo de ação, velocidade e decisão. Sendo assim, os arianos esbanjam alegria e contagiam quem está ao redor com sua ousadia e criatividade. Por serem muito destemidos, as pessoas próximas podem ter dificuldade em lidar com sua personalidade e achar que os arianos são exagerados e um tanto dramáticos.`);
        }
        break;
    case 04:
        if(diaInteiro < 21){
            console.log(`\nSeu signo é Áries♈: Áries é um signo de ação, velocidade e decisão. Sendo assim, os arianos esbanjam alegria e contagiam quem está ao redor com sua ousadia e criatividade. Por serem muito destemidos, as pessoas próximas podem ter dificuldade em lidar com sua personalidade e achar que os arianos são exagerados e um tanto dramáticos.`);
        }else{
            console.log("\nSeu signo é Touro♉: Aquário é considerado o signo dos imprevisíveis, dos que têm atitudes desconcertantes em relação às expectativas dos outros. De todos os signos, é o mais preparado para lidar com os imprevistos, pois estão cientes de que o impossível acontece muito mais do que se possa pensar.");
        }
        break;
    case 05:
        if(diaInteiro < 21){
            console.log("\nSeu signo é Touro♉: Por ser um signo de terra, fixo e muito pé no chão, os taurinos são inflexíveis e possuem uma certa aversão ao risco. ... As pessoas do signo de touro são, por natureza, extremamente confiáveis, pacientes e leais, o que os tornam um ótimo membro para sua equipe de trabalho e para o círculo de amizade");
        }else{
            console.log("\nSeu signo é Gêmeos♊: Geminianos e Geminianas são os famosos tagarelas do zodíaco. Um signo mental, racional e super ágil, são pessoas brilhantes, comunicativas e curiosas. Flutuam facilmente pela sua dupla personalidade, que em um momento está super alegre e conversador e de repente fica amuado e introspectivo.");
        }
        break;
    case 06:
        if(diaInteiro < 21){
            console.log("\nSeu signo é Gêmeos♊: Geminianos e Geminianas são os famosos tagarelas do zodíaco. Um signo mental, racional e super ágil, são pessoas brilhantes, comunicativas e curiosas. Flutuam facilmente pela sua dupla personalidade, que em um momento está super alegre e conversador e de repente fica amuado e introspectivo.");
        }else{
            console.log("\nSeu signo é Câncer♋: Este é tradicionalmente um signo de família. É conservador, seus humores são instáveis como as marés, sua sensibilidade e intuição suas melhores qualidades. Nunca espere objetividade de uma pessoa de câncer. ... A característica mais desconcertante de Câncer é sua capacidade de manipulação e chantagem emocional.quário é considerado o signo dos imprevisíveis, dos que têm atitudes desconcertantes em relação às expectativas dos outros. De todos os signos, é o mais preparado para lidar com os imprevistos, pois estão cientes de que o impossível acontece muito mais do que se possa pensar.");
        }
        break;
    case 07:
        if(diaInteiro < 23){
            console.log("\nSeu signo é Câncer♋: Este é tradicionalmente um signo de família. É conservador, seus humores são instáveis como as marés, sua sensibilidade e intuição suas melhores qualidades. Nunca espere objetividade de uma pessoa de câncer. ... A característica mais desconcertante de Câncer é sua capacidade de manipulação e chantagem emocional..");
        }else{
            console.log("\nSeu signo é Leão♌: Toda pessoa de leão é otimista, alegre, intuitiva e precisa sentir-se acima do bem e do mal. ... Leão é carismático, charmoso e possui uma personalidade forte e decisiva. Mas todos, sem exceção, não gostam de compartilhar com ninguém sua glória e aplausos.");
        }
        break;
    case 08:
        if(diaInteiro < 23){
            console.log("\nSeu signo é Leão♌: Toda pessoa de leão é otimista, alegre, intuitiva e precisa sentir-se acima do bem e do mal. ... Leão é carismático, charmoso e possui uma personalidade forte e decisiva. Mas todos, sem exceção, não gostam de compartilhar com ninguém sua glória e aplausos.");
        }else{
            console.log("\nSeu signo é Virgem♍: Aquário é considerado o signo dos imprevisíveis, dos que têm atitudes desconcertantes em relação às expectativas dos outros. De todos os signos, é o mais preparado para lidar com os imprevistos, pois estão cientes de que o impossível acontece muito mais do que se possa pensar.");
        }
        break;
    case 09:
        if(diaInteiro < 23){
            console.log("\nSeu signo é Virgem♍: nalíticos e críticos, estão sempre muito atentos as coisas ao seu redor, principalmente ao seu próprio trabalho, pois buscam a máxima perfeição em tudo o que fazem! Virginianas gostam de ver que tudo está certo e alinhado. Por conta disso, podem muitas vezes serem críticos demais com os outros e não tolerarem erros.");

        }else{
            console.log("\nSeu signo é Libra♎: Librianos prezam pela felicidade dos que lhe rodeiam e muitas vezes se sacrificam para agradar a todos. Além disso, não gostam de brigas e evitam discussão. Eles são regidos pelo planeta Vênus, símbolo do amor. Na Mitologia Romana, Vênus sempre estava cheia de prazer, sendo uma eterna sedutora.")
        }
        break;
    case 10:
        if(diaInteiro < 24){
            console.log("\nSeu signo é Libra♎: Librianos prezam pela felicidade dos que lhe rodeiam e muitas vezes se sacrificam para agradar a todos. Além disso, não gostam de brigas e evitam discussão. Eles são regidos pelo planeta Vênus, símbolo do amor. Na Mitologia Romana, Vênus sempre estava cheia de prazer, sendo uma eterna sedutora.");
        }else{
            console.log("\nSeu signo é Escorpião♏: É introspectivo, pensador, sensível, orgulhoso, determinado, obstinado e lógico. Com tudo isso, não poderia ser uma pessoa relaxada. Tormento seria a palavra mais adequada para definir seus sentimentos. Escorpião é também o mais independente dos signos, mas precisam e lutam pelo poder custe o que custar");
        }
        break;
    case 11:
        if(diaInteiro < 22){
            console.log("\nSeu signo é Escorpião♏: É introspectivo, pensador, sensível, orgulhoso, determinado, obstinado e lógico. Com tudo isso, não poderia ser uma pessoa relaxada. Tormento seria a palavra mais adequada para definir seus sentimentos. Escorpião é também o mais independente dos signos, mas precisam e lutam pelo poder custe o que custar.")
        }else{
            console.log("\nSeu signo é Sagitário♐: Sagitário é um signo livre e com um alto senso de justiça – quase maior que o sendo das próprias librianas. É fácil se encantar pelas sagitarianas e por sua energia e alegria de viver. Mas é também fácil perceber que elas não são para todo mundo. É preciso aguentar o pique e ter essa gana de descobrir o novo e ir além.");
        }
        break;
    case 12:
        if(diaInteiro < 22){
            console.log("\nSeu signo é Sagitário♐: Sagitário é um signo livre e com um alto senso de justiça – quase maior que o sendo das próprias librianas. É fácil se encantar pelas sagitarianas e por sua energia e alegria de viver. Mas é também fácil perceber que elas não são para todo mundo. É preciso aguentar o pique e ter essa gana de descobrir o novo e ir além.");
        }else{
            console.log("\nSeu signo é Capricórnio♑: A personalidade de Capricórnio é, particularmente, sábia e bastante discreta. Dificilmente você verá um capricorniano raiz cometendo loucuras impensadas ou sendo impulsivo. O comprometimento também é um ponto forte desses nativos, que fazem de tudo por quem gostam e se provam leais e confiáveis.");
        }
        break;
      
}