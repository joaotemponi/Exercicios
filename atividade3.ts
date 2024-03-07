/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.  
Nome Aluno:João Pedro Temponi de Jesus
*/


const teclado = require(`prompt-sync`)();

let letra : string = teclado(`Digite uma letra`);

if (letra == `a` || letra == `e` || letra == `i` || letra == `o` || letra == `u` || letra == `A` || letra == `E` || letra == `I` || letra == `U` || letra == `U` ){
    console.log(`A letra ${letra} é uma vogal`)
} else {
    console.log(`A letra ${letra} é uma consoante`)
}
