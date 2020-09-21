// JavaScript source code
/*
Var
// Seção de Declarações das variáveis
   idade, contador: inteiro
   nome: caractere


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("Esse programa exibirá se você é legalmente maior de idade")

   enquanto idade <= 18 faca
   escreval("Digite o seu nome:")
   leia(nome)
   escreval("Digite a sua idade:")
   leia(idade)
   se idade >= 18 entao
      escreval(nome, ", você tem ", idade, " anos. É maior de idade!")
   senao
      escreval("Você tem ", idade, " anos. Não é maior de idade!")
   fimse
   idade := idade +1
   fimenquanto
*/


document.getElementById("paragrafo1").innerText = "Esse programa vai receber usuários até encontrar algum que seja maior de idade"
document.getElementById("botaozinho").innerText = "CADASTRAR USUÁRIO"

function acaoBotao(){
    var idade, nome
    var contador =0

    while (contador<=18){
        nome = prompt("Digite o seu nome a seguir por favor: ")
        idade = prompt("Digite a sua idade a seguir por favor: ")

        if(idade>=18){
            document.getElementById("paragrafo").innerText = nome + ", você tem " + idade + " anos. É maior de idade!"
            break;
        }
        else{
            alert(nome + ", você tem apenas " + idade + " anos! Não é maior de idade ainda! =C")
            
        }

        contador++
    }
}