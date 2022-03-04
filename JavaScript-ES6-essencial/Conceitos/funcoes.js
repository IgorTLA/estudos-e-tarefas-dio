/*Pode ser atribuída a uma Variável, uma estrutura de dados
seja um Object ou uma Array, pode ser passada por argumentos 
e retornadas por outras funções*/

function getName() {
    return "Igor Alvarez"
}

function LogFn(fn) {
    console.log(fn())
}

const logFnResult = LogFn;

logFnResult(getName)