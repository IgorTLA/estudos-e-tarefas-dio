//Exemplos dos conceitos JS abaixo (Tudo feito com base nas aulas do bootcamp):

//----------------------------
//Funções - São blocos de construção que contém conjunto de instruções que executa uma tarefa ou calcula um valor. 
//Uma função pode usar outra função como argumento.
function getName() {
    return "Igor Alvarez"
}

function LogFn(fn) {
    console.log(fn())
}

const logFnResult = LogFn;

logFnResult(getName)

//----------------------------
//Closure - É uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.
function makeFunc() {
    var name = "Igor"
    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();

//----------------------------
//Currying - É o processo de transformar uma função que espera vários argumentos 
//em uma função que espera um único argumento e retorna outra função curried.
function product(a, b) {
    return a + b
}

product(2, 6)
console.log(product(2, 6))

//----------------------------
//Hoisting de váriaveis - Para variáveis retorna undefined caso seja declarada antes de atribuir algum valor a ela.
function fn() {
    console.log(text);

    var text = "Exemplo";

    console.log(text);
}

fn();

//Hoisting de funções - Permite usar uma função antes de declara-la.
function fn() {
    log('hoisting de função');

    function log(value) {
        console.log(value);
    }
}

fn();

//----------------------------
//Imutabilidade - significa que a mudança não é feita no mesmo objeto, estrutura, mas a mudança é representada em um novo. 
//E isso porque a referência representa o valor não apenas do ponteiro da memória. Cada mudança cria um novo valor e não toca no antigo.
const user = {
    name: "Igor",
    lastName: "Tavares de Lira Alvarez"
};

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);