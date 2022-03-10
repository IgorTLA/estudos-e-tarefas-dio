//Exemplos de variáveis JS abaixo (Tudo feito com base nas aulas do bootcamp):

//Temos 3 tipos de variáveis:
var nameVar = 'Igor'; //variável de escopo global e de função
let nameLet = 'Igor'; //Declara uma variável local no escopo do bloco atual, opcionalmente iniciando-a com um valor.
const nameConst = 'Igor'; //possue escopo de bloco, O valor de uma constante não pode ser alterado por uma atribuição, e ela não pode ser redeclarada.
//é possivel alterar valores de objetos armazenados em uma constante.

console.log(`nameVar: ${nameVar}`);
console.log(`nameVar: ${nameLet}`);
console.log(`nameVar: ${nameConst}`);

//Após a introdução do let e const foi implementado o escopo de bloco, antes existiam somente o escopo de global e de função.