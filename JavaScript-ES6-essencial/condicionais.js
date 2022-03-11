//Exemplos de estrutura de condicionais JS abaixo (Tudo feito com base nas aulas do bootcamp):

//If - Onde se uma condição for verdadeira é usada para especificar a execução de um bloco de código.
//Else - Onde se a mesma condição for falsa especifica a execução de um bloco de código.
//Else if - Especifica um novo teste se a primeira condição for falsa.
let num = 5;

if (num < 5) {
    console.log(`${num} é menor que 5!`);
} else if (num == 5) {
    console.log(`${num} é igual a 5!`);
} else {
    console.log(`${num} é maior que 5!`);
}

//----------------------------
//Switch - avalia uma expressão, combinando o valor da expressão para um cláusula case, e executa as instruções  associadas ao case.
const name = 'Igor';

switch (name) {
    case 'João':
        console.log('João');
        break;
    case 'Bruna':
    case 'Igor':
        console.log('Igor');
        break;
    default:
        console.log('Não exite este nome.');
        break;
}