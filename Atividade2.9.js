//9. Classificação de Carga de Trabalho
//Um gestor de projetos deseja classificar a carga de trabalho de seus colaboradores; escreva
//um código que, ao receber horas trabalhadas, imprima "Leve" para até 20 horas, "Moderada"
//para 21 a 40 horas, e "Intensa" para acima de 40 horas.
const prompt = require("prompt-sync")()

const horas = parseInt(prompt(`Digite as horas trabalhadas: `))

if(horas <= 20) {
    console.log(`Leve`)
}
else if(horas <= 40) {
    console.log(`Moderada`)
}
else {
    console.log(`Intensa`)
}