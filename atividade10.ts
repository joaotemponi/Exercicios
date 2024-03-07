/* (10 pontos)
10 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
    "Telefonou para a vítima?"
    "Esteve no local do crime?"
    "Mora perto da vítima?"
    "Devia para a vítima?"
    "Já trabalhou com a vítima?" 
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
Se a pessoa responder positivamente a 2 questões ela deve ser classificada/exibida como "Suspeita", 
entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".
Aluno:João Pedro Temponi de Jesus
*/

const teclado = require(`prompt-sync`)();

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`~ Sobre as perguntas a seguir digite: ~`);
console.log(`~            Para sim > s             ~`);
console.log(`~            Para não > n             ~`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

let perguntaInicial : string = teclado(`Deseja prosseguir?`);


if (perguntaInicial === `s`){
    let p1 : string = teclado(`Telefonou para a vítima?`);
    let contagem : number = 0;
    if(p1 == `s`){
        ++ contagem;
    }
    let p2 : string = teclado(`Esteve no local do crime?`);
    if(p2 == `s`){
        ++ contagem;
    }
    let p3 : string = teclado(`Mora perto da vítima?`);
    if(p3 == `s`){
        ++ contagem;
    }
    let p4 : string = teclado(`Devia para a vítima?`);
    if(p4 == `s`){
        ++ contagem;
    }
    let p5 : string = teclado(`Já trabalhou com a vítima?`);
    if(p5 == `s`){
        ++ contagem;
    }

    if(contagem == 5 ){
        console.log(`Assasino!`);
    }
    else if(contagem == 3 || contagem == 4){
        console.log(`Cúmplice!`);
    }
    else if(contagem == 2){
        console.log(`Suspeita!`);
    }
    else if(contagem < 2){
        console.log(`Inocente!`);
    }
    else{
        console.log(`Algo deu Erro!!`);
    }

} else if(perguntaInicial === `n`){
    console.log(`Não quer seguir porque? você é o assasino?`);
} else {
    console.log(`Algo deu errado!!`)
}







