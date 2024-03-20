let num1 = '';
let num2;
let tela = document.getElementById('resultado')

function conc(botao) {
if (num1 == ''){
    let x = botao.textContent;
    num1 = Number(x);
    tela.innerHTML = num1
    console.log(`n1 agora é ${x}`);
} else if (botao !== "") {

}
{
    let x = botao.textContent;
    num2 = Number(x);
    tela.innerHTML = num2
    console.log(`n2 agora é ${x}`);
}
}

function obterOperador(botao) {
    let operador = botao.textContent;
    console.log(`Operador ${operador}`);
    switch (operador){
        case "+":
            total = Number(num1) + Number(num2)
            console.log(total)
        break;
        case "-":
            total = num1 - num2
            console.log(total)
        break;
        case "x":
            total = num1 * num2
            console.log(total)
        break;
        case "/":
            total = num1 / num2
            console.log(total)
        break;
        default:    
            "[ERRO]"
        } 
}

