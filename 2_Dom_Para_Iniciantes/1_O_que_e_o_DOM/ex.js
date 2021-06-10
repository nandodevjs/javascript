// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href
console.log(hrefPagina)

// Selecione o primeiro elemento da página que possua a classe ativo

const h1ClassDash = document.querySelector(".dash")

const allClass = document.querySelectorAll(".dash") // Seleciona todos os elementos

// Retorne a linguagem do navegador

const linguagem = window.navigator.language
console.log(linguagem);

// Retorne a largura da janela

const largura = window.innerWidth
console.log(largura);