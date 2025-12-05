const input = require('../input');

(async ()=>{
    console.log("Digite um número: ");
    let num = Number(await input());

    if(isNaN(num)){
        console.log("Digite apenas números!");
    }else if(num == 0){
        console.log("Zero é zero");
    }else if(num % 2 == 1){
        console.log("É impar")
    }else{
        console.log("É par")
    }
})();