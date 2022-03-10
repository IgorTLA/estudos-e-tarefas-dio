//Exemplos de tipos JS abaixo (Tudo feito com base nas aulas do bootcamp):

//String - Representa um texto entre aspas dupla ou simples
//No caso do acento grave são citações de “funcionalidade estendida”. 
//Eles nos permitem incorporar variáveis ​​e expressões em uma string envolvendo-as em ${…}.
let str = "Oi";
let str2 = 'tudo ok por aqui';
let str3 = `mandando outro ${str}`;

console.log(str, str2, str3)

//----------------------------
//Number - Representa números inteiros e de ponto flutuante.
let num = 20;
console.log(num)

num = 30.2;
console.log(num)

//----------------------------
//Boolean - Boolean representa um dos dois valores: true ou false.
//Tudo com um "valor" é true e tudo sem um "valor" é false
let x = 2;
console.log(Boolean(x));

let y = '';
console.log(Boolean(y));

//----------------------------
//Null - Representa um valor vazio. Que aponta para um objeto não existente.
const nullVariable = null;

console.log(nullVariable);

//----------------------------
//Undefined - Representa um valor indefinido.
//Se uma variável é declarada, mas não atribuída, seu valor é indefinido
let value;

console.log(value);

//----------------------------
//Object - São usados ​​para armazenar coleções de dados e entidades mais complexas
const car = {
    model: "suv",
    color: "red"
};

console.log(car);

//----------------------------
//Symbol - Cada valor símbolo retornado de Symbol() é único. É usado para criar identificadores exclusivos para objetos.
let symbol = Symbol();
let symbol2 = Symbol();

console.log(symbol === symbol2);

//----------------------------
//Functions - É um bloco de código projetado para executar uma tarefa específica.
//Uma função  é executada quando "algo" a invoca (chama). 
//Em Arrow function, this representa o escopo de função, já nas funções "normais", o this vai representar o escopo de onde a função foi chamada.
function fn(num) {
    return num * num;
}

console.log(fn(3));

//----------------------------
//Array - é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.
const users = ['Igor', 'Priscilla'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: users[0],
        age: 25,
        gender: gender.MAN
    },
    {
        name: users[1],
        age: 30,
        gender: gender.WOMAN
    }
];

console.log(persons);