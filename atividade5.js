/* (10 pontos)
5 – Faça um programa que o usuário digite dois números e o programa informe qual é o número maior,
com a seguinte frase: `O número maior é ${variavel} e o número menor é ${variavel}`,
se ser iguais uma frase:  ` Os números ${variavel} e ${variavel} são iguais`.
Nome:João Pedro Temponi de Jesus
*/
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("Digite o primeiro n\u00FAmero"));
var n2 = parseFloat(teclado("Digite o segundo n\u00FAmero"));
if (n1 > n2) {
    console.log("O maior \u00E9 " + n1 + " e o menor \u00E9 " + n2);
}
else if (n2 > n1) {
    console.log("O maior \u00E9 " + n2 + " e o menor \u00E9 " + n1);
}
else if (n1 == n2) {
    console.log("Os n\u00FAmeros " + n1 + " e " + n2 + " s\u00E3o iguais");
}
else {
    console.log("Algo deu erro!!!");
}
