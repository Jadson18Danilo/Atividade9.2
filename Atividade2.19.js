//19. Classificação de Impacto Ambiental
//Um ambientalista deseja classificar o impacto de diferentes produtos; escreva um código que,
//ao receber um índice de 1 a 5, imprima "Baixo", "Moderado" ou "Alto".
//● Baixo: Menor ou igual a 2
//● Moderado: Menor ou igual a 4
//● Alto: Maior que 5
const prompt = require("prompt-sync")()

const indice = parseInt(prompt(`Digite o indice: `))

if(indice <= 2) {
    console.log(`Baixo`)
}
else if(indice <= 4){
    console.log(`Moderado`)
}
else {
    console.log(`Alto`)
}