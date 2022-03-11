//Exemplos de estrutura de repetição JS abaixo (Tudo feito com base nas aulas do bootcamp):

//for - A instrução cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, 
//seguidas por uma declaração ou uma sequência de declarações executadas em sequência.
for (var i = 1; i <= 3; i++) {
    console.log(`O número é: ${i}`);
}

//for...in - Interage sobre propriedades enumeradas de um objeto, na ordem original de inserção.  O laço pode ser executado para cada propriedade distinta do objeto.
let values = [6, 7, 8];
values.name = 'Igor';

for (let x in values) {
    console.log(x);
}

//for...of - percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.
const users = ['Igor', 'Rafael', 'Giovana']

for (let name of users) {
    console.log(name);
}

//----------------------------
//while - A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. 
//A condição é avaliada antes da execução da rotina.
var n = 0;
while (n <= 5) {

    console.log(`${n} x 5 = ${n * 5}`);
    n++;
}

//do...while - cria um laço que executa uma declaração até que o teste da condição for falsa (false). 
//A condição é avaliada depois que o bloco de código é executado, resultando que uma declaração seja executada pelo menos uma vez.
var num = 4;
do {
    if (num < 3) {
        console.log(`${num} é menor que 3`);
    } else if (num > 3) {
        console.log(`${num} é maior que 3`);
    } else {
        console.log(`${num} é igual a 3`);
    }
    num++;
} while (num <= 3);

//break - encerra o loop atual, switch, ou o loop que foi informado no label e transfere o controle da execução do programa para o comando seguinte.
//continue - termina a atual iteração do laço em que ele se encontra ou de um laço rotulado, e continua a execução deste laço com a próxima iteração.
const count = [1, 2, 3, 4, 5, 6];

for (var i = 0; i <= count.length; i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log(`${i} não é divisivel por 2`);
}