/**
 * Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.
 */
const prompt = require("prompt-sync")()

let num = NaN, fatorial = 0, cont = 0

while(isNaN(num) || num < 0){
  num = Number(prompt('Digite um numero não negativo: '))

  if(isNaN(num) || num < 0){
    console.log('Você digitou um valor invalido, tente novamente...')
  }
}

if(num === 0){
  console.log('O fatorial de ', num, ' é 1')
}
else{
  cont = num
  fatorial = num
  while(cont > 1){
    fatorial = fatorial * (cont-1)
    cont --
  }
  
  console.log('O fatorial de ', num, ' é ', fatorial)
}
