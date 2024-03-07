/* (10 pontos)
 7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, 
 e R$ 0,25 se forem compradas pelo menos doze. 
 Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
Nome Aluno:João Pedro Temponi de Jesus
E-mail:joaotemponisenai@gmail.com
*/

const teclado = require(`prompt-sync`)();

let macas : number = parseFloat(teclado(`Digite o número de maçãs`));
if(macas < 12){
   let valorTotal : number = (macas * 0.30);
    console.log(`O valor total da compra é ${valorTotal}`)
}
else if(macas >= 12){
    let valorTotal : number = (macas * 0.25);
    console.log(`O valor total das maçãs é ${valorTotal}`)
}
else{
    console.log(`Algo deu errado!!`)
}
