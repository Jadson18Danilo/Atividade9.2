//3. Classificação de Tamanho de Roupa
//Um vendedor deseja classificar roupas com base nas medidas; crie um código que imprima
//"Pequeno" para tamanho P, "Médio" para M, e "Grande" para G.
const prompt = require("prompt-sync")()

const tamanho = parseInt(prompt(`Digite a sua numeração: `))

if(tamanho <= 36) {
    console.log(`Pequeno`)
}
else if(tamanho <= 40) {
    console.log(`Médio`)
}
else if(tamanho <= 45) {
    console.log(`Grande`)
}
else {
    console.log(`faça uma dieta urgênte`)
}