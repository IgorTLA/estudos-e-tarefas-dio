//Exemplos de operadores JS abaixo (Tudo feito com base nas aulas do bootcamp):

//Operadores aritméticos - Tomam valores numéricos (sejam literais ou variáveis) como seus operandos e retornam um único valor númerico.
var num = 12 % 5 //Faz divisão e retorna o restante

num++ //Incremento
num-- //Decremento

//----------------------------
//Operadores de atribuição - Um operador de atribuição atribui um valor ao operando à sua esquerda baseado no valor do operando à direita.
x += y	//Atribuição de adição x = x + y	

x -= y	//Atribuição de subtração	 x = x - y

//----------------------------
//Operadores de comparação - compara seus operandos e retorna um valor lógico baseado em se a comparação é verdadeira.
x == y //Retorna true caso os operandos sejam iguais.

x != y //Retorna true caso os operandos não sejam iguais.

//----------------------------
//Operador condicional (ternário) - É o único operador JavaScript que utiliza três operandos. O operador pode ter um de dois valores baseados em uma condição.
//Se age for maior ou igual a 18, o operador terá o valor de "adulto". Caso contrário, terá o valor de "menor de idade".
var age = (age >= 18) ? "adulto" : "menor de idade";

//----------------------------
//Operadores lógicos - são utilizados tipicamente com valores booleanos (lógicos); neste caso, retornam um valor booleano.
var value1 = true && true; //retorna true
var value2 = true || false; //retorna true
var value3 = !true;   // !t retorna false

//----------------------------
//Operadores unário - Um operador unário é uma operação com apenas um operando.
delete something; //deleta algo

typeof something; //determina tipo

//----------------------------
//Spread - Permite expandir uma expressão em um local que receba múltiplos argumentos ou elementos.
const num = (a, b) => a + b;

const value = [40, 40]

console.log(num(...value));