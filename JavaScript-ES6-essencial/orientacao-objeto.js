//Exemplos de estrutura de repetição JS abaixo (Tudo feito com base nas aulas do bootcamp):

//Herança - Com a maior parte dos detalhes principais do OOJS agora explicados, este artigo mostra como criar 
//classes de objetos "child" (construtores) que herdam recursos de suas classes "parent".
function acc() {
    this.balance = 0;
    this.deposit = function (value) {
        this.balance += value;
    }
    this.withdraw = function (value) {
        this.balance -= value;
    }
}

var wallet = new acc();
wallet.deposit(1000);
console.log('Valor depositado é: 1000');
console.log(`Seu saldo é: ${wallet.balance}`);

wallet.withdraw(250);
console.log('Valor retirado é: 250');
console.log(`Seu saldo é: ${wallet.balance}`);

//----------------------------
//Class - provêm uma maneira mais simples e clara de criar objetos e lidar com herança.
class animal {
    constructor(name) {
        this.name = name;
    }
}

class person extends animal {
    constructor(age) {
        super('Igor');
        this.age = 25;
    }
}

const user = new person();
console.log(user);

//Modificadores de acesso 
//private - Os campos de classe são públicos por padrão, mas os membros de classe privada podem ser criados usando um prefixo de hash #. 
//O encapsulamento de privacidade desses recursos de classe é imposto pelo próprio JavaScript.
class publicClass {
    static value = 'static value'
}

console.log(publicClass.value)

//public - estáticos e de instância são propriedades graváveis, enumeráveis ​​e configuráveis. 
//Como tal, ao contrário de suas contrapartes privadas, eles participam da herança de protótipos.
class publicClass {
    static value = 'static value'
}

console.log(publicClass.value)