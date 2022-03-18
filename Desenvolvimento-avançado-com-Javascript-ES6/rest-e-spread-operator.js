//rest operator ... - Permite representar um número indefinido de argumentos na forma de um Array.
//Podendo usar em arrow functions
function sum(...args) {
    console.log(args);
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(10, 20, 5, 6, 8, 7));

//----------------------------
//spread operator - Permite expandir uma expressão em um local que receba múltiplos argumentos ou elementos.
//O spread operator pode ser utilizados em strings, arrays, objetos literais e objetos iteráveis
const multiply = (...args2) => args2.reduce((acc, value) => acc * value, 1);

const values = [13, 15, 3, 6, 5];

console.log(multiply(...values));