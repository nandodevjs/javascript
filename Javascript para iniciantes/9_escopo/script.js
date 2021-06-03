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

// Criar um bloco

// Chaves {} criam um escopo de bloco. Não confundir com a criação de objetos {}

{
    var carro5 = "Prisma"
    const ano = 2018
}

console.log(carro5); // Prisma
//console.log(ano); // Erro ano is not defined

// Ao utilizar o var dentro de um for loop, que é um bloco, o valor da variável utilizada irá vazar e existir fora do loop.

for (var i = 0; i < 10; i++) {
    console.log(`Número: ${i}`);
}
console.log(i);

// Const mantém o escopo no bloco, isso impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

const mes = "Janeiro";
// mes = "Dezembro" // Erro! Tentou modificar o valor
// const semana // Erro! Declarou sem valor

const data = {
    dia: 24,
    mes: "Dezembro",
    ano: 2021,
}

data.dia = 25 // Funciona
// data = "Janeiro" // Erro!

// Let

// Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

let ano
ano = 2021
ano++
console.log(ano);

// let ano = 2023 //Erro! "Ano" já foi declarado.