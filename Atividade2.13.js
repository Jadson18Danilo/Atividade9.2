//13. Verificação de Clima
//Um meteorologista deseja classificar o clima baseado em um índice, variando de 0 a 100.
//Escreva um código que, ao receber esse índice, imprima a classificação correspondente. As
//faixas de clima são definidas da seguinte forma:
//Seco: Índice menor que 30
//Úmido: Índice de 30 a 69
//Chuvoso: Índice de 70 a 100
const prompt = require("prompt-sync")()

const indice = parseInt(prompt(`Digite o índice: `))

if(indice < 30) {
    console.log(`Seco`)
}
else if(indice <= 69) {
    console.log(`Úmido`)
}
else {
    console.log(`Chuvoso`)
}