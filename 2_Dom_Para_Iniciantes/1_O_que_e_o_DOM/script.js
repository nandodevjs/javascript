// Document Object Model

// É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

// console.log(window); // Windown é o objeto global do browser, possui diferentes métodos e propriedades.

// window.innerHeight // Retorna a altura do beowser

// Ao inspecionar elemento com o Chrome, você está vendo a representação oficial da DOM.

//window.alert("Olá")

// const href = window.location.href
// console.log(href);

// if (href === "http://127.0.0.1:5500/2_Dom_Para_Iniciantes/1_O_que_e_o_DOM/"){
//    console.log("SEXTOOOOOU");
// }

// DOM: Window > Location : Document : ... > HTML > <head> : <body> > <h1> : <section> > <h2> > <p>

// Window e Document

// São os objetos principais do DOM. Boa parte da manipulação é feita através dos seus métodos e propriedades.

// window.alert("Isso é um alerta")
// alert("Isso é um alerta") // Funciona

const h1Selecionado = document.querySelector("h1") // Seleciona o primeiro h1
document.body // Retorna o body

// Window é um objeto global,por isso não precisamos chamar ele na frente dos seus métodos e propriedades.

// Node

// Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

const titulo = document.querySelector("h1") // Vai selecionar o primeiro elemento

//titulo.innerText; // Retorna o texto
//titulo.classList // Retorna as classes
//titulo.idoffsetHeight // Retorna a altura do Elemento

function callbackH1 () {
    console.log("Clicou em", h1Selecionado);
}

h1Selecionado.addEventListener("click", callbackH1)

// Ativa a função callback ao click no titulo.

// const h1Class = h1Selecionado.tagName // Posso acessar as proriedades e métodos agora.