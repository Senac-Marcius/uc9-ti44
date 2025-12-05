/*
    um programa que pergunta se a pessoa que ganhar um
    presente misterioso, se ela dizer "sim" fala
    ganhou um abraço, se ela dizer não fala ela ganhou
    50 reais
*/
const input = require("../input");

(async()=>{
    console.log("Quer ganhar um presente misterioso? (sim/não)");
    let resposta = await input();

    if(resposta.toLowerCase() == "sim"){
        console.log("Você ganhou um abraço");
    }else{
        console.log("Você ganhou 50 reais");
    }
})();
