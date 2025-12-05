console.log("Olá mundo");

var nome = "Marcius";
// estou fazendo uma concatenação
console.log("Olá "+nome);

var idade = 35;
// estou fazendo uma interpolação
/*
"" - aspas
'' - apostrofe
`` - crase
 */
console.log(`Olá ${nome}, sua idade é ${idade}`);


/*
() - parenteses: para funções ou predeceção
[] - colchetes para vetores
{} - chaves para estruturas ou contexto
 */

//camalcase 
var cestaCafe = []; //estou declarando um vetor
cestaCafe[0] = "café"; //uma atribuição
cestaCafe[1] = "ovo";

//undercase 
var cesta_cafe = ["café", "ovo"];

cestaCafe.push("bacon");
cesta_cafe.push("pão");

console.log(cestaCafe);
console.log(cesta_cafe);


/*
Atividade: crie um vetor que guarde o nome, idade e 
telefone
 */
var usuario = ["Marcius leandro junior", "16 98135-4817",
    35
]

console.log("idade: "+usuario[2]);

// estrutura, dicionario, classe anonima
var usuario = {
    idade: 35,
    nome: "Marcius leandro junior",
    telefone: "16 98135-4817"
}

console.log(usuario.idade);

var listaTelefonica = [];

listaTelefonica.push({
    nome: "Marcius leandro junior",
    telefone: "16 98135-4817",
    endereco: "Rua qualquer"
});

listaTelefonica.push({
    nome: "Lucas Campelo leandro",
    telefone: "16 9999999",
    endereco: "Rua outra"
});

console.log(listaTelefonica);

var estoque = [];

estoque.push({
    codigo: "001",
    nome: "Batatinha",
    valor: 1.89
});

estoque.push({
    codigo: "002",
    nome: "Coca-cola",
    valor: 3.99
});

var soma = estoque[0].valor + estoque[1].valor;
console.log("A soma do meu estoque é "+soma);