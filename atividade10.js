/* (10 pontos)
10 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
    "Telefonou para a vítima?"
    "Esteve no local do crime?"
    "Mora perto da vítima?"
    "Devia para a vítima?"
    "Já trabalhou com a vítima?"
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime.
Se a pessoa responder positivamente a 2 questões ela deve ser classificada/exibida como "Suspeita",
entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".
Aluno:João Pedro Temponi de Jesus
*/
var teclado = require("prompt-sync")();
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("~ Sobre as perguntas a seguir digite: ~");
console.log("~            Para sim > s             ~");
console.log("~            Para n\u00E3o > n             ~");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
var perguntaInicial = teclado("Deseja prosseguir?");
if (perguntaInicial === "s") {
    var p1 = teclado("Telefonou para a v\u00EDtima?");
    var contagem = 0;
    if (p1 == "s") {
        ++contagem;
    }
    var p2 = teclado("Esteve no local do crime?");
    if (p2 == "s") {
        ++contagem;
    }
    var p3 = teclado("Mora perto da v\u00EDtima?");
    if (p3 == "s") {
        ++contagem;
    }
    var p4 = teclado("Devia para a v\u00EDtima?");
    if (p4 == "s") {
        ++contagem;
    }
    var p5 = teclado("J\u00E1 trabalhou com a v\u00EDtima?");
    if (p5 == "s") {
        ++contagem;
    }
    if (contagem == 5) {
        console.log("Assasino!");
    }
    else if (contagem == 3 || contagem == 4) {
        console.log("C\u00FAmplice!");
    }
    else if (contagem == 2) {
        console.log("Suspeita!");
    }
    else if (contagem < 2) {
        console.log("Inocente!");
    }
    else {
        console.log("Algo deu Erro!!");
    }
}
else if (perguntaInicial === "n") {
    console.log("N\u00E3o quer seguir porque? voc\u00EA \u00E9 o assasino?");
}
else {
    console.log("Algo deu errado!!");
}
