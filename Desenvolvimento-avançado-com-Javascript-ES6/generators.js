//generators - As funções geradoras fornecem uma alternativa poderosa: elas permitem definir um algoritmo iterativo 
//escrevendo uma única função cuja execução não é contínua. As funções do gerador são escritas usando a sintaxe function*.
function* message() {
    console.log('Hi');
    yield 1;

    console.log('Are you from?');
    const value = yield 2;

    console.log(value);
}

const it = message();

console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));

//A função pode ser chamada quantas vezes desejar e retorna um novo Generator a cada vez. Cada Gerador só pode ser iterado uma vez.
function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const iterator = naturalNumbers();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());