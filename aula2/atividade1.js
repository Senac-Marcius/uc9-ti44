const input = require("../input");

(async ()=>{
    console.log("Qual o primeiro nome:");
    let nome = await input();
    console.log("Qual o sobrenome:");
    let sobre = await input();

    let l = sobre[0].toUpperCase();
    let minusculo = nome.toLowerCase();
    let saida = minusculo[0].toUpperCase() + minusculo.slice(1);

    console.log(` Citação ${l}. ${saida}`)
})();