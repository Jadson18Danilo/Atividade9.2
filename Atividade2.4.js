//4. Verificação de Status de Pedido
//Um sistema de pedidos precisa informar o status de um pedido; crie um código que, ao receber
//um código de status (1 a 5), imprima a descrição correspondente ou "Status inválido" se não
//estiver na lista.
const prompt = require("prompt-sync")()

const status = parseInt(prompt(`Digite o status: `))


if(status == 1) {
    console.log(`Em procedimento`)
}
else if(status == 2) {
    console.log(`Enviado`)
}
else if(status == 3) {
    console.log(`Entregue`)
}
else if(status == 4) {
    console.log(`Cancelado`)
}
else if(status == 5) {
    console.log(`Devolvido`)
}
else {
    console.log(`Status inválido`)
}