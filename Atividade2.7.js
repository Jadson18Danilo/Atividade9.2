//7. Classificação de Reações em uma Pesquisa
//Um pesquisador deseja classificar as reações dos participantes; escreva um código que, ao
//receber uma nota de 1 a 5, imprima "Muito insatisfeito", "Insatisfeito", "Neutro", "Satisfeito" ou
//"Muito satisfeito".
const prompt = require("prompt-sync")()

const nota = parseInt(prompt(`Digite uma nota de 1 a 5: `))

if(nota == 1) {
    console.log(`Muito insatisfeito`)
}
else if(nota == 2) {
    console.log(`Insatisfeito`)
}
else if(nota == 3) {
    console.log(`Neutro`)
}
else if(nota == 4) {
    console.log(`Satisfeito`)
}
else {
    console.log(`Muito satisfeito`)
}