/**
 * Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
 */
const prompt = require("prompt-sync")()
let l1, l2, l3
while(isNaN(l1)){
  l1 = parseFloat(prompt('Digite o primeiro lado: '))
  if(isNaN(l1)){
    console.log('digite um numero valido!')
  }
}
while(isNaN(l2)){
  l2 = parseFloat(prompt('Digite o segundo lado: '))
  if(isNaN(l2)){
    console.log('digite um numero valido!')
  }
}
while(isNaN(l3)){
  l3 = parseFloat(prompt('Digite o terceiro lado: '))
  if(isNaN(l3)){
    console.log('digite um numero valido!')
  }
}

if(l1 + l2 > l3 && l1 + l2 > l3 && l2 + l3 > l1){
  console.log('Os lados informados foram um triangulo.')

  if(l1 === l2 && l2 === l3){
    console.log('Triangulo Equilátero.')
  }
  else if(l1 === l2 || l1 ===l3 || l2 === l3){
    console.log('Triangulo Isósceles.')
  } 
  else if(l1 !== l2 || l1 !==l3 || l2 !== l3){
    console.log('Triangulo Escaleno.')
  }

} else{
  console.log('Os numeros informados não formam um triangulo.')
}