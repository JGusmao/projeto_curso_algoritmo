
document.getElementById("botaozinho").innerText = "INICIAR A��O"

function acaoBotao(){
    var numero01, numero02, operacao, resultado
    alert("Esse programa far� opera��es matem�ticas em dois n�meros")

    numero01 = prompt("Digite o primeiro numero por favor: ")
    operacao = prompt("Digite a operacao desejada (+, -, *, /): ")
    numero02 = prompt("Digite o segundo numero por favor: ")

    switch(operacao){
        case "+":
            resultado = parseInt(numero01) + parseInt(numero02)
            break;
        case "-":
            resultado = parseInt(numero01) - parseInt(numero02)
            break;
        case "*":
            resultado = parseInt(numero01) * parseInt(numero02)
            break;
        case "/":
            resultado = parseInt(numero01) / parseInt(numero02)
    }
}

    /* Estrutura de decis�o menos eficiente para esse caso onde utiliza-se if-else
    if(operacao == "+"){
        resultado = parseInt(numero01) + parseInt(numero02)
    }else if(operacao == "-"){
        resultado = parseInt(numero01) - parseInt(numero02) 
    }else if(operacao == "*"){
        resultado = parseInt(numero01) * parseInt(numero02)
    }else{
        resultado = parseInt(numero01) / parseInt(numero02)
    }
    */
    document.getElementById("paragrafo").innerText = "O resultado da opera��o " + numero01 + operacao + numero02 + " �: " + resultado
}