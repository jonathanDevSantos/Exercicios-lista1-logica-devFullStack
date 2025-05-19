/**
 * Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
 */
const prompt = require("prompt-sync")()

let temp = NaN, soma = 0, cont = 0, media = 0

do {
  temp = NaN
  while(isNaN(temp)){
  temp = Number(prompt('Digite um numero: '))

  if(isNaN(temp)){
    console.log('Você não digitou um numero, tente novamente...')
  } else{
    if(temp !== 0){
      soma += temp
      cont += 1
    }
  }
}
  
} while (temp !== 0);

media = soma / cont
if(soma === 0){
  console.log('Nenhum numero foi informado.')
} else{
  console.log('A media Aritmética dos numeros informados é: ', media)
}