// Objetos:

// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

// Variável = propriedade
// Função = método

var pessoa = {
    nome: "Nando",
    idade: 10,
    profissao: "programador",
    possuiFaculdade: true
}

console.log(pessoa.nome); // "Nando"
console.log(pessoa.possuiFaculdade);// True

// Propriedades e métodos consistem em (chave) e valor

// Métodos

// É uma propriedade que possui uma função no local do seu valor.

var quadrado = {
    lados: 4,
    area: function (lado) {
        return lado * lado
    },
    perimetro: function (lado) {
        return this.lados * lado
    }
}

console.log(quadrado.lados); // 4
console.log(quadrado.area (5)); // 25
console.log(quadrado.perimetro (5)); // 20

// Existe uma abreviação de area: function () {} para area () {}, no ES6+

var quadrado = {
    lados: 4,
    area (lado) {
        return lado * lado
    },
    perimetro (lado) {
        return this.lados * lado
    }
}

// Organizar o código

// Objetos são utilizados para organizar o código em pequenas partes reutilizáveis.

Math.PI; // 3.14
Math.random() // Número aleatório

var pi = Math.PI;
console.log(pi);

// Math é um objeto nativo de Javascript. Já precebeu que console é um objeto e log() um método?

// Criar um Objeto:

// Um objeto é criado utilizando as chaves {}

var carro = {}
var pessoa = {}

console.log(typeof carro);

// Dot Notation Get

// Acesse propriedades de um objeto utilizando o ponto .

var menu = {
    width: 800,
    height: 50,
    backgroudColor: "#84E",
}

var bg = menu.backgroudColor // "#84E"

// Dot Notation Set

// Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.

var menu2 = {
    width2: 800,
    height2: 70,
    backgroudColor2: "#84E",
}

menu2.color = "blue" // adicionando novas propriedades e métodos

menu.backgroudColor2 = "#000" // Setar um valor

// Palavra-chave this

// This irá fazer uma referência ao próorio objeto.

var height = 120
var menu3 = {
    width3: 800,
    height3: 50,
    meatadeHeight () {
        return this.height / 2 
    }
}

menu3.meatadeHeight () // 25
// Sem o this, seria 60

// Protótipo e Herança

// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.

var menu = {
    width: 800,
}

console.log(menu.hasOwnProperty ("width")); // True
console.log(menu.hasOwnProperty ("height")); // False

// hasOwnProperty é um método de object