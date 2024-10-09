//20. Verificação de Habilidade em um Jogo
//Um desenvolvedor de jogos deseja classificar os jogadores com base em suas habilidades; crie
//um código que, ao receber uma pontuação de 1 a 100, imprima "Novato", "Intermediário" ou
//"Experiente".
//● Novato: Menor ou igual a 33
//● Intermediário: Menor ou igual a 66
//● Experiente: Maior que 67
const prompt = require("prompt-sync")()

const pont = parseInt(prompt(`Digite a pontuação: `))

if(pont <= 33) {
    console.log(`Novato`)
}
else if(pont <= 66){
    console.log(`Intermediário`)
}
else {
    console.log(`Experiente`)
}