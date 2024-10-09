//11. Classificação de Risco de Empréstimo
//Um banco deseja classificar o risco de um empréstimo; escreva um código que, ao receber a
//pontuação de crédito, imprima "Baixo" para acima de 700, "Moderado" para 500 a 700, e "Alto"
//para abaixo de 500.
const prompt = require("prompt-sync")()

const pCredito = parseInt(prompt(`Digite o credito: `))

if(pCredito < 500) {
    console.log(`Alto`)
}
else if(pCredito <= 700) {
    console.log(`Moderado`)
}
else {
    console.log(`Baixo`)
}