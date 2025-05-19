/**
 * Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
 */
const prompt = require("prompt-sync")()

let peso, altura, imc
console.log('Vamos calcular o IMC...')

while(isNaN(peso)){
  peso = parseFloat(prompt('Digite seu peso: '))

  if(isNaN(peso)){
    console.log('Entrada inválida, tente novamente...')
  }
}

while(isNaN(altura)){
  altura = parseFloat(prompt('Digite sua altura: '))

  if(isNaN(altura)){
    console.log('Entrada inválida, tente novamente...')
  }
}

imc = peso / (altura ** 2)
console.log('IMC: ', imc.toFixed(1))
if(peso <=18.5){
  console.log('Baixo peso.')
}
else if(peso >= 18.6 && peso <= 24.9){
  console.log('Peso normal')
}
else if(peso >= 25 && peso <= 29.9){
  console.log('Sobrepeso')
}
else if(peso >=30){
  console.log('Obesidade')
}