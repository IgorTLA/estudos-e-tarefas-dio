//Exemplos de Design patterns mais utilizados abaixo (Tudo feito com base nas aulas do bootcamp):

//Criando arrays - O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.
const arr = ['Igor', 'Lana', 'João']

const num = Array.of(1, 2, 3);

const arrLegth = Array(5)
const list = Array(1, 3, 6)
//A diferença entre o Array.of() e o construtor de Array é no tratamento dos argumentos inteiros: Array.of(7) cria um array com um único elemento, 7, enquanto Array(7) 
//cria um array vazio de propriedade length igual a 7 (Nota: isso quer dizer um array com 7 espaços vazios, e não com valores do tipo undefined).

//O método Array.from() cria uma nova instância de um Array quando for passado um array-like ou um iterable object como argumento.
const divs = document.querySelectorAll('div');
const divArr = Array.from(divs);

//----------------------------
const fruits = ['Acerola', 'Banana', 'Maçã'];

//push - adiciona um item ao array no fim do mesmo e retorna o tamanho (length) do array.
const fruitsLength = fruits.push('Abacaxi');
console.log(fruitsLength);
console.log(fruits);

//pop - remove o último elemento do array e retorna o elemento removido.
const removedFruits = fruits.pop();
console.log(removedFruits);

//unshift - adiciona um item no inicio do array e retorna o tamanho (length) do array.
const fruitsLength2 = fruits.unshift('Melancia');
console.log(fruitsLength2);
console.log(fruits);

//shift - remove o primeiro item do array e retorna este item.
const removedFruits2 = fruits.shift();
console.log(removedFruits2);

//concat - concatena 2 ou mais arrays e retorna um novo array concatenado.
const newArr = arr.concat(fruits);
console.log(newArr);

//slice - retorna um novo array "fatiando" o array de acordo com o início e o fim.
const arrList = [1, 2, 3, 4, 5]

console.log(arrList.slice(0, 3));

//splice - altera o array removendo e adicionando itens. Array.splice(posição inicial, qtd de itens removidos, item a ser adicionado).

//----------------------------
//----------------------------

//forEach - Iteração de cada item dentro de um array. Somente executa a operação, não altera o array. Aceita os argumentos valor, índice e array.
[1, 2, 3].forEach(function (item, index) {
    console.log(item, index);
});

//map - Retorna um novo array, de mesmo tamanho, iterando cada item de um array.
const three = [1, 2, 3];
const doubled = three.map(function (item) {
    return item * 2;
});
console.log(three === doubled, doubled); // false, [2, 4, 6]

//filter - Retorna um novo array com todos os elementos que satisfazem uma determinada condição.
const ints = [1, 2, 3];
const evens = ints.filter(function (item) {
    return item % 2 === 0;
});
console.log(ints === evens, evens); // false, [2]

//reduce - Retorna um novo tipo de dado iterando cada posição de um array. o primeiro argumento é o que deve ser retornado
//reduceRight - Igual ao reduce, porem em ordem inversa: fim - para - inicio
// NOTA: `reduce` e `reduceRight` tem como argumento opcional o "initialValue" (Valor inicial), passado depois da função de callback do reducer.
// se omitido, ele ira usar o primeiro item como valor inicial.
const sum = [1, 2, 3].reduce(function (result, item) {
    return result + item;
}, 0);

//some - retorna booleano se pelo menos um item de um array satisfaz determinada condição.
const hasNegativeNumbers = [1, 2, 3, -1, 4].some(function (item) {
    return item < 0;
});
console.log(hasNegativeNumbers); // true

//every - Retorna booleano se todos os itens de um array satisfazem determinada condição.
const allPositiveNumbers = [1, 2, 3].every(function (item) {
    return item > 0;
});
console.log(allPositiveNumbers); // true

//find - Retorna o primeiro item que satisfaz uma determinada condição.
const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
const found = objects.find(function (item) {
    return item.id === 'b';
});
console.log(found === objects[1]); // true

//findIndex - Retorna o índice do primeiro item de um array que satisfaz uma determinada condição.
const objects2 = [{ id: 'A' }, { id: 'B' }, { id: 'C' }];
const foundIndex = objects2.findIndex(function (item) {
    return item.id === 'B';
});
console.log(foundIndex === 1); // true