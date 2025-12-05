const input = require("../input");

(async ()=>{
    console.log("Digite um número:");
    let n = await input();

    console.log("O dobro é "+n*2);
})();