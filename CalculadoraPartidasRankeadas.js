function rank(vitorias,derrotas){
    let total = vitorias - derrotas;
    let resultado = '';
    
    if(total <=10){
        resultado = "Ferro";
    } else if (total <=20){
        resultado = "Bronze";
    } else if (total <=50){
        resultado = "Prata";
    } else if (total <= 80){
        resultado = "Ouro";
    } else if (total <= 90){
        resultado = "Diamante";
    } else if (total <= 100){
        resultado = "Lendário";
    } else {
        resultado = "Imortal";
    }

    return {resultado, total};
;}

let jogador = []

jogador.push({vitorias: 100, derrotas: 10});
jogador.push({vitorias: 130, derrotas: 29});
jogador.push({vitorias: 60, derrotas: 15});
jogador.push({vitorias: 10, derrotas: 100});


for (let i = 0; i < jogador.length; i++){
    let {resultado, total} = rank(jogador[i].vitorias, jogador[i].derrotas);
    console.log(`O jogador ${i+1} tem o saldo de ${total} e está no rank ${resultado}`);
}
