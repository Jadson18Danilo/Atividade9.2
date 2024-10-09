//16. Classificação de Nível de Estresse
//Um psicólogo deseja classificar o nível de estresse de seus pacientes em uma escala de 1 a
//10. Escreva um código que, ao receber esse nível, imprima a classificação correspondente. As
//faixas de estresse são definidas da seguinte forma:
//● Baixo: Nível de estresse de 1 a 3
//● Moderado: Nível de estresse de 4 a 7
//● Alto: Nível de estresse de 8 a 10
const prompt = require("prompt-sync")()

const nivelEstresse = parseInt(prompt(`Digite uma escala: `))

if(nivelEstresse <= 3) {
    console.log(`Baixo`)
}
else if(nivelEstresse <= 7){
    console.log(`Moderado`)
}
else {
    console.log(`Alto`)
}