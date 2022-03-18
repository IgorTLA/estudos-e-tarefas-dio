//Destructuring assignment - é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas
[a, b, ...rest] = [0, 1, 2, 3, 4];

console.log(a, b);
console.log(...rest);

//outro exemplo
var user = [{ name: 'Igor', age: 25 }]

var [{ name: namePerson }] = user

console.log(namePerson);


//functions
function division([x, y] = [10, 2]) {
    return x / y;
}
console.log(division()); 