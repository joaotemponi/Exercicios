/* (10 pontos)
 7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia,
 e R$ 0,25 se forem compradas pelo menos doze.
 Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
Nome Aluno:João Pedro Temponi de Jesus
E-mail:joaotemponisenai@gmail.com
*/
var teclado = require("prompt-sync")();
var macas = parseFloat(teclado("Digite o n\u00FAmero de ma\u00E7\u00E3s"));
if (macas < 12) {
    var valorTotal = (macas * 0.30);
    console.log("O valor total da compra \u00E9 " + valorTotal);
}
else if (macas >= 12) {
    var valorTotal = (macas * 0.25);
    console.log("O valor total das ma\u00E7\u00E3s \u00E9 " + valorTotal);
}
else {
    console.log("Algo deu errado!!");
}
