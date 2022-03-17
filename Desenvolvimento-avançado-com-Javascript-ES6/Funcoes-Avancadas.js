//arrow functions - Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão 
//de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de 
//funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).
//return default
var sum = (a, b) => a + b;

console.log(sum(6, 4))

//----------------------------
//Default Function Arguments - Permitem que parâmetros regulares sejam inicializados com com valores iniciais 
//caso undefined ou nenhum valor seja passado.
function multiply(c, d = 3) {
    return c * d;
}

console.log(multiply(3))

//Lazy evaluation
const randomNumber = () => {
    console.log('Generating a number...');
    return Math.random() * 6;

}

function idNumber(e, f = randomNumber()) {
    return Math.trunc(e * f);
}

console.log(idNumber(6));
console.log(idNumber(7));

//----------------------------
//Enhanced Object Literals - Facilitam a criação rápida de objetos com propriedades dentro das chaves({}). Para criar um objeto, simplesmente 
//anotamos uma lista de pares chave:valor delimitados por vírgula. O ES6 torna a declaração de literais de objeto concisa e, portanto, mais fácil.
function getCar(model, color, year) {
    return {
        model,
        color,
        year
    }
}

console.log(getCar('Hatchback', 'White', '2014'));