//18. Verificação de Temperatura Corporal
//Um médico deseja classificar a temperatura corporal de um paciente. Escreva um código que,
//ao receber a temperatura em graus Celsius, imprima a classificação correspondente. As faixas
//de temperatura são definidas da seguinte forma:
//● Hipotermia: Temperatura inferior a 35.0°C
//● Normal: Temperatura entre 35.0°C e 37.5°C (incluindo 35.0°C e 37.5°C)
//● Febre: Temperatura superior a 37.5°C
const prompt = require("prompt-sync")()

const temperatura = parseFloat(prompt(`Digite a nota: `))

if(temperatura < 35.0) {
    console.log(`Hipotermia`)
}
else if(temperatura <= 37.5) {
    console.log(`Normal`)
}
else {
    console.log(`Febre`)
}