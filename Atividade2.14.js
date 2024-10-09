//14. Classificação de Velocidade de Carro
//Um agente de trânsito deseja classificar a velocidade de um carro; crie um código que, ao
//receber a velocidade, imprima "Dentro do limite" se a velocidade for até 80 km/h, e "Acima do
//limite" se for maior que 80 km/h.
const prompt = require("prompt-sync")()

const velocidade = parseInt(prompt(`Digite a velocidade: `))

if(velocidade <= 80) {
    console.log(`Dentro do limite`)
}
else {
    console.log(`Acima do limite`)
}