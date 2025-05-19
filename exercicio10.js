/**
 * Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
 */
const prompt = require("prompt-sync")()

let num

while(isNaN(num)){
  num = Number(prompt('Digite um numero: '))

  if(isNaN(num)){
    console.log('Você não digitou um numero, tente novamente...')
  }
}

for(let i = 10; i > 0; i--){
  console.log(num)
}