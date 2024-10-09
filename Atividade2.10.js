//10. Verificação de Estágio de Plantas
//Um jardineiro deseja classificar o crescimento das plantas; crie um código que, ao receber a
//altura da planta em centímetros, imprima "Brotando" para até 10 cm, "Crescendo" para 11 a 30
//cm, e "Adulto" para acima de 30 cm.
const prompt = require("prompt-sync")()

const altura = parseInt(prompt(`Digite a altura: `))

if(altura <= 10) {
    console.log(`Brotando`)
}
else if(altura <= 30) {
    console.log(`Crescendo`)
}
else {
    console.log(`Adulto`)
}