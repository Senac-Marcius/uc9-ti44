const input = require("../input");

(async () => {
    console.log("Digite o primeiro número:");
    let n1 = Number(await input());
    console.log("Digite o segundo número:");
    let n2 = Number(await input());

    console.log(`"A soma entre ${n1} + ${n2} = ${n1+n2}.`)
})();