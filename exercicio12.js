/**
 * Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.
 */
const prompt = require("prompt-sync")()

let num = NaN //Neste exercicio atribui NaN à variavel, pois procurando outro erro que estava acontecendo no codigo, descobri que utilizar a função isNaN sem essa atribuição pode gerar erros em alguns casos. Não alterei os exercicios anteriores pois vejo como uma forma de observar minha evolução, ainda que seja algo simples, mas foi algo novo que aprendi.

while(isNaN(num)){
  num = Number(prompt('Digite um numero: '))

  if(isNaN(num)){
    console.log('Você não digitou um numero, tente novamente...')
  }
}

for(i = 1; i <= 10; i++){
  console.log(num, ' X ', i, ' = ', num * i )
}