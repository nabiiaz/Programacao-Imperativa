//mostrar e perguntar qual opção
let readlineSync = require('readline-sync'); 
let opcao = readlineSync.question(`\nEscolha uma dentre as opcoes abaixo(numero):\n
--PRATOS--
01 - Pipoca
02 - Macarrao
03 - Carne
04 - Feijao
05 - Brigadeiro\n
`);

//perguntar o tempo
let tempo = readlineSync.questionInt('\nQual sera o tempo de execucao?\n');

//criando a função microondas
function logMicroondas(tempo,padrao) {
    let x2 = (padrao*2)
    let x3 = (padrao*3)
    if(tempo >= padrao && tempo < x2) {
        console.log('Prato pronto, bom apetite!!!')
    } else if ((tempo >= x2 ) && (tempo < x3)) {
        console.log('A comida queimou')
    } else if (tempo >= x3) {
        console.log('Kabumm')
    } else if (tempo < padrao) {
        console.log('Tempo insuficiente')
    } else {
        console.log('Opção inválida, favor colocar um tempo válido.')
    }
}

//utilizando o dado fornecido (tempo) para usar na função microondas de acordo com a opção escolhida
switch(opcao) {
    case '01':
        logMicroondas(tempo,8)
        break;
    case '02':
        logMicroondas(tempo,10)
        break;
    case '03':
        logMicroondas(tempo,15)
        break;
    case '04':
        logMicroondas(tempo,12)
        break;
    case '05':
        logMicroondas(tempo,8)
        break;
    default:
        console.log('Prato inexistente, favor colocar um prato válido.');
  }
//}