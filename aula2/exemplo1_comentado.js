//estou fazendo uma importação trazer funções externas
// para este arquivo
const input = require("../input");
//declarei uma variavel do tipo const chamada input


/* isso é uma arrow funcion
() => {

}
*/


/* isso é uma função anonima
(() => {

})();
*/

(async () => {
    console.log("Qual sua idade: ");
    let idade = await input();
    //uma variavel letalable só funciona no contexto
    console.log(idade);
})();
