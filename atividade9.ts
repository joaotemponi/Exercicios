/* (15 pontos)
9- Para doar sangue é necessário ter entre 18 e 67 anos e possuir mais de 60Kg. 
Faça um aplicativo que pergunte a idade de uma pessoa e seu peso e diga se ela 
pode doar sangue ou não, caso não diga o(s) motivo(s).
Nome:João Pedro Temponi de Jesus
*/

const teclado = require(`prompt-sync`)();

let idade : number = parseFloat(teclado(`Digite sua idade`));
let peso : number = parseFloat(teclado(`Digite seu peso`));

if(idade >=18 && idade <= 67){
    if(peso >= 60){
        console.log(`Você pode doar sangue`);
    }
    else{
        console.log(`Você não pode doar sangue por causa do seu peso`)
    }
}
else{
    console.log(`sua idade não é permitida`);
}



