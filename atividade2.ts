/* (5 pontos)
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x. 
Depois peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, 
e que y passe a ter o valor de x.
Nome Aluno: João Pedro Temponi de Jesus
*/


const teclado = require(`prompt-sync`)();

let x : number = parseFloat(teclado(`Digite um valor para x`));
let y : number = parseFloat(teclado(`Digite um valor para y`));

console.log(`Números originais:`);
console.log(`x = ${x}`);
console.log(`y = ${y}`);

let novoValor: number = x;
x = y;
y = novoValor;

console.log(`Números depois da troca:`);
console.log(`x = ${x}`);
console.log(`y = ${y}`);