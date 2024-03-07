/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do volume de uma lata, 
sabendo que PI é um valor constante de 3.14159, 
o programa deve pedir os valores de RAIO e ALTURA, utilize a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome: João Pedro Temponi de Jesus
*/

const teclado = require(`prompt-sync`)();

let pi : number = 3.14159;
let raio : number = parseFloat(teclado(`Digite o raio da lata`));
let altura : number = parseFloat(teclado(`Digite a altura da lata`));
let volume : number = (pi * (raio * raio) * altura);


console.log(`O do volume da lata é ${volume}`);
