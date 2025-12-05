/*
façam um programa que pede o nome e a idade
e mostre na saida usando interpolação a
seguinte mensagem:
"Olá nome, sua idade é 99."
*/

const input = require("../input");

(async () => {
    console.log("Qual é o seu nome? ");
    let nome = await input();

    console.log("Qual é a sua idade? ");
    let idade = await input();

    console.log(`Olá ${nome}, a sua idade é ${idade}.`);
})();