/**
 * Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
 */
const prompt = require("prompt-sync")()

let num1, num2

do {
  num1 = Number(prompt('Digite o primeiro numero: '))
  num2 = Number(prompt('Digite o segundo numero: '))

  if(isNaN(num1) || isNaN(num2)){
    console.log('algum valor informado não foi válido, tente novamente.')
  }
  else if(num1 === num2){
    console.log('Os numeros devem ser diferentes.')
  }
} while (isNaN(num1) || isNaN(num2) || num1 === num2);

if(num1 < num2){
  console.log('Os numeros digitados foram: ', num1, ' e ', num2)
} else {
  console.log('Os numeros digitados foram: ', num2, ' e ', num1)
}