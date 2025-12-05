const {validaCPF} = require('./marcius');
const input = require("../input");

(async ()=>{
    console.log("Digite seu cpf:");
    let cpf = await input();

    if(validaCPF(cpf)){
        console.log("Cpf valido");
    }else{
        console.log("Cpf invalido");
    }
})()
