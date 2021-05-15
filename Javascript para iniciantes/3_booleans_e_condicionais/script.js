var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiGraduacao) {
    console.log("Sim, possuo graduação");
} else {
    console.log("Não, não possuo doutorado");
}

var nome = "";

if (nome) {
    console.log("Olá, Fernando");
} else {
    console.log("Me diga seu nome né o cabeção");
}

if ((5 - 5) && (5 + 5)) {
    console.log("Verdadeiro");
} else {
    console.log("Falso");
}

var condicional = (5 - 10) && (5 + 5);

if (condicional) {
    console.log("Super Verdadeiro", condicional);
} else {
    console.log("Super falso");
}

true && true;// true
true && false;// true
false && true;// true
"Gato" && "Cão";// Gato
"Gato" && false;// Gato
(5 - 5) && (5 + 5);// 10
(5 >= 5) && (3 < 6);// true

true || true;// true
true || false;// true
false || true;// true
"Gato" || "Cão";// Gato
"Gato" || false;// Gato
(5 - 5) || (5 + 5);// 10
(5 >= 5) || (3 < 6);// true

// Switch

var corFavorita = "Coro"

switch (corFavorita) {
    case "Introdução":
        console.log("Na Eternidade")
        break
    case "Coro":
        console.log("Ao lado de Jesus");
        break
    case "Segunda Parte":
        console.log("Anceio logo estar");
        break
    default:
        console.log("E este mundo deixar");
}