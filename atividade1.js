var teclado = require("prompt-sync")();
var pi = 3.14159;
var raio = parseFloat(teclado("Digite o raio da lata"));
var altura = parseFloat(teclado("Digite a altura da lata"));
var volume = (pi * (raio * raio) * altura);
console.log("O do volume da lata \u00E9 " + volume);
/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do volume de uma lata,
sabendo que PI é um valor constante de 3.14159, o programa deve pedir os
valores de RAIO e ALTURA, utilize a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome:
*/
