// JavaScript source code

document.getElementById("paragrafo1").innerText = "Esse programa realizará a soma de dois números e perguntará se deseja parar de fornecer entradas para soma.";
document.getElementById("botaozinho").innerText = "COMEÇAR";


function acaoBotao(){
	var numero01, numero02, condicional	
	do{
		numero01 = prompt("Digite o primeiro número a seguir por favor: ")
		numero02 = prompt("Digite o segundo número a seguir por favor: ")
		
		/*document.getElementById("paragrafo").innerText = */
		alert("O resultado da soma desses dois números é: " + (parseInt(numero01) + parseInt(numero02)));

		condicional = prompt("Desja sair? s/n")
		condicional = condicional.toUpperCase()
	}while(condicional == "N")
}