// JavaScript source code

document.getElementById("botaozinho").innerText = "INICIAR AÇÃO"

function acaoBotao(){
	var numero, fatorial
	numero = prompt("Digite um número para descobrir o seu fatorial:")
	fatorial = 1

	for(var contador = 1; contador <= numero; contador++){
		fatorial = fatorial*contador
	}
	
	document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " é: " + fatorial
}