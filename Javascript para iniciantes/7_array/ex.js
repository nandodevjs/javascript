// Crie um array com os anos que o Brasil ganhou a copa (1959, 1962, 1970, 1994, 2002)

var campeao = ["1959", "1962", "1970", "1994", "2002"]

// Interaja com o array utilizando um loop para mostraar no console a seguinte mensagem: O Brasil ganhou a copa de [array]

for (var copa = 0; copa < campeao.length; copa++) {
    console.log(`O Brasil foi campeão das copas de: ${campeao[copa]}`)
}

// Interaja com um loop nas frutas abaixo para chegar em pera.

var frutas = ["Banana", "Maça", "Pera", "Uva", "Melancia"]

for (var item = 0; item < frutas.length; item++) {
    console.log(frutas[item]);
    if (frutas[item] === "Pera") {
        break
    }
}

// Coloque a última fruta do array acima em uma variável sem remover a mesma do array.

var ultimaFruta = frutas[frutas.length - 1]