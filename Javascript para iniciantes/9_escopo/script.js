// Escopo de função

// Variáveis declaradas dentro de funções não são acessadas fora das mesmas.

function mostrarCarro () {
    var carro = "Fusca"
    console.log(carro);
}

mostrarCarro() // Fusca no console
//console.log(carro()); // Undefinied

// Variável Global (Erro)

// Declarar variáveis sem a palavra chave var, let ou const, cria uma variável que pode ser acessada em qualquer escopo (global). Isso é um erro!

function mostrarCarro2() {
    carro2 = "Ferrari"
    console.log(carro2);
}

mostrarCarro2()
console.log(carro2);

// 'Use strict' impede isso.

// Escopo de função (Pai)

// Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções

var carro3 = "Audi A7"

function mostrarCarro3 () {
    var frase = `Meu carro é um ${carro3}`
    console.log(frase);
}

mostrarCarro3()
console.log(carro3);

// Escopo de Bloco

// Variáveis criadas com var, vazam o bloco. Por isso a introdulçao do ES6 a melhor forma de declaramos variáveis é ustilizando let ou const, pois estas respeitam o escopo do bloco

if (true) {
    var carro4 = "GTR"
    console.log(carro4);
}
console.log(carro4);

// Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.

// A partir de agora ireomos utilizar const e let no lugar de var.