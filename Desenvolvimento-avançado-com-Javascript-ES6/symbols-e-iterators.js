//symbol - Cada valor símbolo retornado de Symbol() é único. Um símbolo pode ser usado como o identificador para 
//propriedades de objetos; esse é o único propósito do tipo de dado. Não suporta a sintaxe "new Symbol()".
const message = Symbol('Hi!');
const message1 = Symbol('Hi!');
const message2 = Symbol('how are you?');

console.log(message === message1);
console.log(message2);

//Well known
//Symbol.iterator
//Symbol.split

//Iterators - usando for...of
const interable = ['Apple', 'Pineapple', 'Banana']

for (const value of interable) {
    console.log(value)
}