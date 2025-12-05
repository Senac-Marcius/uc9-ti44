const input = require("../input");

(async ()=>{
    console.log("Quantos anos você? ");
    let idade = await input();

    if(18 > idade){
        console.log("Bloqueado");
    }else{
        console.log("Bem vindo!");
    }
})();