/**
 * As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
 */
const prompt = require("prompt-sync")()

let qtd, valor

while(isNaN(qtd)){
  qtd = Number(prompt('Digite a quantidade de maçãs: '))

  if(isNaN(qtd)){
    console.log('Entrada inválida, tente novamente...')
  }
}

if(qtd < 12){
  valor = qtd * .30
}
else if(qtd >= 12){
  valor = qtd * .25
}

console.log('O valor total da compra é: R$', valor.toFixed(2))