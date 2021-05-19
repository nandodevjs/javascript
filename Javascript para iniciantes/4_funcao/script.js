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

/*addEventListener ("click", function () {
   console.log("Clicou");
})*/

/*
A função possui dois argumentos.
Primeiro é a string "Click";
O segundo é uma função anônima.

Funções anônimas são aquelas em que o nome da função não é definido, escritos como: function () {} ou () => {}
*/

// Pode ou não retornar um valor

// Quando não definimos o return, ela irá retonar undefined. O código interno da função  é executado normalmente, independente de existir valor de return ou não.

function imc2 (peso, altura) {
   const imc2 = peso / (altura * altura);
   console.log(imc2);
}

imc2 (80, 1.80); // Retorna o imc
console.log(imc2(80, 1.80)); // Retorna o imc e undefined

// Valores retornados

//Uma função pode retornar qualquer tipo de dado e até outras funções

function terceiraIdade (idade) {
   if (typeof idade !== "number"){
      return "Informe a sua idade"
   } else if (idade >= 60) {
      return true
   } else {
      return false
   }
}

console.log(terceiraIdade (60));
// Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa prática.

// Escopo

// Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

function precisoVisitar (paisesVisitados) {
   var totalPaises = 193;
   return `Falta apenas ${totalPaises - paisesVisitados}, paises`

}
console.log(precisoVisitar(10));

// Escopo Léxico

//Funções conseguem acessar variáveis que foram criadas no contexto pai.

var profisao = "Desenvolvedor"

function dados () {
   var nome = "Fernando"
   var idade = 18
   function outrosDados () {
      var endereco = "Gramado"
      var idade = 10
      return `${nome}, ${idade}, ${endereco}, ${profisao},`
   }
   return outrosDados()
}

console.log(dados()) // Retorna "Fernando", 10, Gramado, Desenvolvedor.
//outrosDados () // Retorna um erro de não definido porque está dentro do bloco da função dados.

//Hoisting

// Antes de execultar uma função, o JS "move" todas as funções declaradas para a memória e depois vem execultando elas.