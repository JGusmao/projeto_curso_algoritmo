// JavaScript source code

document.getElementById("paragrafo1").innerText = "Esse programa realizar� a soma de dois n�meros e perguntar� se deseja parar de fornecer entradas para soma.";
document.getElementById("botaozinho").innerText = "COME�AR";


function acaoBotao(){
	var numero01, numero02, condicional	
	do{
		numero01 = prompt("Digite o primeiro n�mero a seguir por favor: ")
		numero02 = prompt("Digite o segundo n�mero a seguir por favor: ")
		
		/*document.getElementById("paragrafo").innerText = */
		alert("O resultado da soma desses dois n�meros �: " + (parseInt(numero01) + parseInt(numero02)));

		condicional = prompt("Desja sair? s/n")
		condicional = condicional.toUpperCase()
	}while(condicional == "N")
}