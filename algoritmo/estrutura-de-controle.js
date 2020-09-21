// JavaScript source code
/*Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("Insira a primeira nota: ")
   leia(nota01)
   escreval("Insira a segunda nota: ")
   leia(nota02)
   
   media := (nota01 + nota02)/ 2
   
   se media >= 5 então
      escreval("Aluno aprovado!", nome)
   senão
        escreval("Aluno reprovado!", nome)
   fimse

Fimalgoritmo*/

var nome, nota01,nota02, media

nome = prompt("Digite o seu nome a seguir: ")
nota01 = prompt("Insira a primeira nota: ")
nota02 = prompt("Instira a segunda nota: ")

media = (parseInt(nota01) + parseInt(nota02)) / 2

if(media >= 50)
    alert("Parabéns, " + nome + "! Você passou!" + "\nSua média é :" + media)
else
    alert("Você não passou, " + nome + "\nSua média é: " + media )