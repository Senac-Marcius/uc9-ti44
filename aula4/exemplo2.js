function tigrinho(){
    return Math.floor(Math.random()*10);
}

let sorteado = tigrinho()

switch(true){
    case sorteado > 3:
        console.log("Parabéns você ganho o premio maximo");
    case sorteado == 2:
        console.log("Você ganho uma caixa de leite");
    default:
        console.log("Ganhou nada");
}