/**
 * 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
 */
const prompt = require("prompt-sync")()
let idioma = Number(
  prompt("Digite 1 para Português, 2 para Espanhol, 3 para Inglês: ")
);

switch (idioma) {
  case 1:
    console.log("Bom dia!")
    break

  case 2:
    console.log("Buenos dias!")
    break

  case 3:
    console.log("Good morning!")
    break
  default:
    console.log("Opção inválida")
}
