//Exemplos de Design patterns mais utilizados abaixo (Tudo feito com base nas aulas do bootcamp):

//Design Patterns são soluções reutilizáveis para problemas comuns no desenvolvimento de software.
//Todo programador já encontrou várias vezes problemas semelhantes que pediam soluções parecidas, essas soluções são os 
//Padrões de Projetos (Design Patterns).

//Factory - Podemos usar factory functions para criar novos objetos. 
//Uma function é uma factory function quando retorna um novo objeto sem o uso da palavra-chave new!
const createAnimal = ({ name, breed, age }) => ({
    name, breed, age,

    aggressive(value) {
        if (value === 'yes')
            return `${this.name} é agresivo.`
        else
            return `${this.name} é dócil.`
    }
});

const dog = createAnimal({
    name: 'Dog',
    breed: 'Chihuahua',
    age: 13
});

const cat = createAnimal({
    name: 'Cat',
    breed: 'mutt',
    age: 7
});

console.log(dog, dog.aggressive('yes'))
console.log(cat, cat.aggressive('no'))

//----------------------------
//Singleton - São classes que podem ser instanciadas uma vez e podem ser acessadas globalmente. 
//Essa única instância pode ser compartilhada em todo o nosso aplicativo, o que torna os Singletons 
//ótimos para gerenciar o estado global em um aplicativo. jQuery utiliza este padrão.
function user() {
    if (!user.instance) {
        user.instance = this;
    }

    return user.instance;
}
const u = user.call({ name: 'Igor', age: '25' });
const u2 = user.call({ name: 'Priscilla', age: '30' });

console.log(u);
console.log(u2);

//----------------------------
//Decorator - Uma função decorator recebe uma outra função como parâmetro e estende 
//o seu comportamento sem modificá-la explicitamente
let id = false;

function callId(fn) {
    return !!id && fn();
}

function square(a) {
    return a * a;
}

console.log(callId(() => square(5)));
id = true;
console.log(callId(() => square(5)));

//----------------------------
//Observer - Podemos dar subscribe em certos objetos, os observers, em outro objeto, chamado observable.
//Sempre que um evento ocorre, o observer notifica todos os seus observers!
class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(observer => observer !== fn);
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

const obs = new Observable();

const logDate1 = data => console.log(`Subscribe 1: ${data}`);
const logDate2 = data => console.log(`Subscribe 2: ${data}`);
const logDate3 = data => console.log(`Subscribe 3: ${data}`);

obs.subscribe(logDate1);
obs.subscribe(logDate2);
obs.subscribe(logDate3);

obs.notify('Notified!!');

obs.unsubscribe(logDate3);

obs.notify('Notified again!!');

//----------------------------
//Module - É um pattern que possibilita organizarmos melhor o nosso código,
//sem a necessidade de expor variáveis globais
//import { sum, subtract, mutiply, division } from "./ref-module-pattern.js";
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function mutiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

export { sum, subtract, mutiply, division };

//no arquivo que iremos usar o módulo podemos importa-lo:
import { sum, subtract, mutiply, division } from ("./design-patterns.js");

console.log(sum(4, 4));
console.log(subtract(9, 5));
console.log(mutiply(5, 5));
console.log(division(9, 3));

