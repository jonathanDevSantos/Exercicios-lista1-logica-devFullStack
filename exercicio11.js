/**
 * Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.
 */
const prompt = require("prompt-sync")()
let soma = 0
for(i = 1; i <= 5; i++){
  let temp
  while(isNaN(temp)){
  temp = Number(prompt('Digite o numero '+ i + ': '))

  if(isNaN(temp)){
    console.log('Você não digitou um numero, tente novamente...')
  } 
}

soma += temp

}
console.log('A soma dos 5 numeros é: ', soma)

