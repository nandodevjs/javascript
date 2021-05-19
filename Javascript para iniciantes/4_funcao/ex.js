// Crie uma função para verificar se um valor é True

function truDaTru (dado) {
    return !!dado
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// Lembrando que um perímetro é a soma dos quatro lados de um quadrado

function perimetroDoQuadrado (lado) {
   return lado * 4
}

// Crie uma função que retorne o seu nome completo
// Ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto4 (nome, sobreNome) {
    return `${nome} ${sobreNome}`
}

// Crie uma função que verifica se um número é par

function isEven (numero) {
    var modulo = numero % 2
    if (modulo === 0) {
        return true
    } else {
        return false
    }
}

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)

 function tipoDeDado (dado) {
     return typeof dado
 }

// addEventListener é uma função nativa do JavaScript, o primeiro parâmetro é o evento que ocorre e o segundo é o Callback. Utilize essa função para mostrar no console o seu nome completo todas as vezes quando o evento "click" ocorrer.

addEventListener("click", function (){
    console.log("Fernando");
})


// corrija o erro abaixo:

var totalPaises = 193

function precisoVisitar (paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
}

function jaVisitei (paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
}

precisoVisitar (20)
jaVisitei (20)

//Correção já foi feita!