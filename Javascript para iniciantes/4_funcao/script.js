function areaQuadrado (lado) {
   return lado * lado;
}

console.log(areaQuadrado (2));

function pi () {
   return 3.14;
}

var total = 5 * pi(); // 15.7

// O que execulta uma função é os parentese ()
console.log(total);

//Parâmetros e Argumentos

/* Ao criar uma função, você pode definir os PARÂMETROS function (parametro).

Ao execultar uma funçã, você pode passar argumentos. parametro (argumento)
*/

function imc (peso, altura) {
   const imc = peso / (altura * altura);
   return imc
} //Peso e altura são os parâmetros

imc(140, 1.84) // 80 e 1.80 são os arumentos
console.log(imc(140, 1.84));

// Parênteses execulta a função

function discipuloDeDeus (discipulo) {
   if (discipulo === "João") {
      return "O discipulo a quem Jesus amava"
   } else if (discipulo === "Pedro") {
      return "O discipulo que era bravo"
   } else if (discipulo === "Mateus") {
      return "Primeiro evangelo"
   } else {
      return "Coloque um dos seguintes nomes: João, Pedro ou Mateus."
   }

}
let pesquisa = discipuloDeDeus("João");
console.log(pesquisa);
//Se apenas definirmos a função com o function e não executarmos a mesmo, nada que estiver dentro dela irá acontecer.

//Argumentos podem ser funções

// Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

addEventListener ("click", function () {
   console.log("Clicou");
})
/*
A função possui dois argumentos.
Primeiro é a string "Click";
O segundo é uma função anônima.

Funções anônimas são aquelas em que o nome da função não é definido, escritos como: function () {} ou () => {}
*/