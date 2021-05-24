// Tudo é objeto

// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos, por isso são obketos.

var nome = "Sasuke"

console.log(nome.length);
console.log(nome.charAt(4));
console.log(nome.replace);
console.log(nome);

// Uma string herda propriedades e métodos do construtor String ()

// Números

var altura = 1.8

altura.toString()
altura.toFixed() // usado para arrendondar um valor 

// Por um breve momento, o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos.

// Funções também possuem métodos e propriedades.

function areaQuadrado (lado) {
    return lado * lado
}

console.log(areaQuadrado.toString ());
/* Function areaQuadrado(lado) {
    return lado * lado;
}
*/

// Elementos do DOM

//var icm = document.querySelector(".icm")

//icm.classList.add ("azul") // Adcionar a classe azul
//.innerText; // "Clique"
//icm.addEventListener("click", function () {
//    console.log("Clicou");
//})

// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.