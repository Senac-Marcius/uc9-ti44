const input = require("../input");

(async ()=>{
    console.log("Quantos anos você? ");
    let idade = Number(await input());
    // idade = NaN : Not a Number
    // is significa é
    if(isNaN(idade) ||  idade <= 0){
        console.log("Número invalido");
    }else if(18 > idade){ 
        console.log("Bloqueado");
    }else{
        console.log("Bem vindo!");
    }
    
})();