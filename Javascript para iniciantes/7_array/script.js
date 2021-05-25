// Array

// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

var videoGames = ["PS5", "Switch", "Xbox"]
console.log(videoGames [0]);
console.log(videoGames [1]);
console.log(videoGames [2]);
console.log(videoGames [3]);
// Acesse um elemento do array utilizando []

// Métodos e Propriedades de um Array

console.log(videoGames.pop());
videoGames.push("3DS")
console.log(videoGames);
console.log(videoGames.length);

// Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais a frente

// For loop

// Fazem algo repetidamente até que uma condição seja atingida.

for (var numero = 0; numero <= 10; numero++) {
    console.log(numero);
}
// O for possui 3 partes que são elas: início, condição e incremento.

// While loop

var i = 0;

while (i < 10) {
    console.log(i);
    i++
}