/*
    um programa que verifica se a pessoa colocou a senha
    "senac123" ou  se ela tem a chave para abrir a porta
*/

const input = require("../input");

(async ()=>{
    console.log("Você tem a chave (sim/não) ou qual é a senha? ");
    let chave =  await input();

    if(chave.toLowerCase() == "sim" || chave == "senac123"){
        console.log("A porta se abriu!")
    }
})();
