//2. Classificação de Faixa de Nota de Teste
//Um professor quer classificar as notas de um teste; escreva um código que imprima "Muito
//bom" para notas acima de 80, "Bom" para notas entre 70 e 80, "Satisfatório" para notas entre
//50 e 69, e "Insatisfatório" para notas abaixo de 50.

const prompt = require("prompt-sync")()

const nota = parseInt(prompt(`Digite a nota: `))

if(nota < 50) {
    console.log(`Infatisfatório`)
}
else if(nota <= 69) {
    console.log(`fatisfatório`)
}
else if(nota <= 80) {
    console.log(`Bom`)
}
else {
    console.log(`Muito Bom`)
}