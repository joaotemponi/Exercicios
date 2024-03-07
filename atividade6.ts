/* (15 pontos)
6 – Ler valor de nota de N1 e N2 calcule a média e escrever a nota correspondente, 
tal que 0 é a menor nota e 10 a maior, e imprimir o conceito equivalente 
(A, B, C, D ou E), conforme a seguinte tabela:
  A  -   nota=>8,5  nota=<10
  B  -   nota=>7     nota<8,5
  C  -   nota=>5     nota<7
  D  -   nota=>3     nota<5
  E  -   nota>3

Nome Aluno:João Pedro Temponi de Jesus
*/

const teclado = require(`prompt-sync`)();

let nota1 : number = parseFloat(teclado(`Digite a primeira nota A`));
let nota2 : number = parseFloat(teclado(`Digite a segunda nota A`));
let media : number = ((nota1 + nota2) / 2);

if(media < 3){
    console.log(`E`);
}
else if(media >= 3 && media < 5){
    console.log(`D`);
}
else if(media >= 5 && media < 7){
    console.log(`C`);
}
else if(media >= 7 && media < 8.5){
    console.log(`B`)
}
else if(media >= 8.5 && media <= 10){
    console.log(`A`)
}
else{
    console.log(`Algo deu Erro!!`)
}