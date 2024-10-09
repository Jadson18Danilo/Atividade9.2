//5. Classificação de Distância de Corrida
//Um treinador deseja avaliar o desempenho dos corredores com base na distância percorrida;
//escreva um código que imprima "Curta" para até 5 km, "Média" para de 6 a 10 km, e "Longa"
//para acima de 10 km.
const prompt = require("prompt-sync")()

const correu = parseFloat(prompt(`Digite a Distância: `))

if(correu <= 5) {
    console.log(`Curta`)
}
else if(correu <= 10) {
    console.log(`Média`)
}
else {
    console.log(`Longa`)
}