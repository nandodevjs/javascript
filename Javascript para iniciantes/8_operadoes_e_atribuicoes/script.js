// Operadores de Atribuição

// Podem funcionar como formas abreviadas

var x = 5
var y = 5

x += y
x -= y
x *= y
x /= y
x %= y
x **= y

// X paassa a receber o útimo valor atribuido a ele que veio do Y

console.log(x);

// Operador ternário

// Abreviação de condicionais com if e else.

var idade = 19
var podeBeber = (idade >= 18) ? "Pode beber" : "Não pode beber"

// Condição ? true : False

// Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição.

// If Abreviado

// Não é necessário abrir e fechar as chaves {} quando retornamos uma linha de código.

var possuiFaculdade = true
if (possuiFaculdade) console.log("Possui faculdade");
else console.log("Não possui faculdade.");

//ou

if (possuiFaculdade)
    console.log("Possui faculdade");
else
    console.log("Não possui faculdade");

// Eu particupalmente prefiro a segunda opção.