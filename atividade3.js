/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.
Nome Aluno:João Pedro Temponi de Jesus
*/
var teclado = require("prompt-sync")();
var letra = teclado("Digite uma letra");
if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" || letra == "A" || letra == "E" || letra == "I" || letra == "U" || letra == "U") {
    console.log("A letra " + letra + " \u00E9 uma vogal");
}
else {
    console.log("A letra " + letra + " \u00E9 uma consoante");
}
