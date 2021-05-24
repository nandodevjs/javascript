// Crie um objeto com os seus dados pessoais

var dados = {
    nome: "Naruto",
    sobrenome: "Uzumaki",
    idade: 20,
    cpf: "123.456.789-10",
   
}
// Crie um método no objeto anterior que mostre o seu nome completo:
dados.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`
}

console.log(dados.nomeCompleto());

// Modifique o valor da propriedade preco para 3000

var carro = {
    preco: 1000,
    portas: 4,
    marca: "Audi",
}

carro.preco = 3000

console.log(carro);

// Crie um objeto de um cachorro que represente um Golden, de cor caramelo, com 10 anos, e que late ao ver um homem.
var cachorro = {
    raca: "Golden",
    cor: "Caramelo",
    idade: 10,
    latir (comida) {
        if (comida === "Tem ração") {
            return "Auau, Auau, que comidinha maneira titia"
        } else { 
        return "Me da comida"
        }
    }
}

