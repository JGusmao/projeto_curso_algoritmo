// JavaScript source code
/*
Var
// Se��o de Declara��es das vari�veis
   idade, contador: inteiro
   nome: caractere


Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreval("Esse programa exibir� se voc� � legalmente maior de idade")

   enquanto idade <= 18 faca
   escreval("Digite o seu nome:")
   leia(nome)
   escreval("Digite a sua idade:")
   leia(idade)
   se idade >= 18 entao
      escreval(nome, ", voc� tem ", idade, " anos. � maior de idade!")
   senao
      escreval("Voc� tem ", idade, " anos. N�o � maior de idade!")
   fimse
   idade := idade +1
   fimenquanto
*/


document.getElementById("paragrafo1").innerText = "Esse programa vai receber usu�rios at� encontrar algum que seja maior de idade"
document.getElementById("botaozinho").innerText = "CADASTRAR USU�RIO"

function acaoBotao(){
    var idade, nome
    var contador =0

    while (contador<=18){
        nome = prompt("Digite o seu nome a seguir por favor: ")
        idade = prompt("Digite a sua idade a seguir por favor: ")

        if(idade>=18){
            document.getElementById("paragrafo").innerText = nome + ", voc� tem " + idade + " anos. � maior de idade!"
            break;
        }
        else{
            alert(nome + ", voc� tem apenas " + idade + " anos! N�o � maior de idade ainda! =C")
            
        }

        contador++
    }
}