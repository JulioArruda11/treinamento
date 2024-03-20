let num1 = '';
let num2 = '';
let tela = document.getElementById('resultado');
let selectOp = false;
let operador;

function obterOperador(op) {
    operador = op.textContent;
    console.log(`Operador selecionado: ${operador}`);
    selectOp = true
    tela.innerHTML = operador
}
function conc(click) {
    if (!selectOp){
        num1 += click.textContent;
        tela.innerHTML = num1
        console.log(`Numero 1 selecionado: ${num1}`);
    } else{
        num2 += click.textContent;
        tela.innerHTML = num2
        console.log(`Numero 2 selecionado: ${num2}`);
    }
}

function resultado(){
    if (num1 !== ''){
    switch(operador){
    case "+":
        if (num2 === ''){
            tela.innerHTML = "[ERRO] Digite o 2º número"
        } else{
        total = parseFloat(num1) + parseFloat(num2);
        tela.innerHTML = total;
        console.log("total: ", total);

        num1 = total;
        console.log("agora n1 é", num1)
        num2 = '';
        }
        
        break; 
    case "-":
        if (num2 === ''){
            tela.innerHTML = "[ERRO] Digite o 2º número"
        } else{
        total = parseFloat(num1) - parseFloat(num2);
        tela.innerHTML = total;
        console.log("total: ", total);
        num1 = total;
        console.log("agora n1 é", num1)
        num2 = ''
        }
        break;
    case "x":
        if (num2 === ''){
            tela.innerHTML = "[ERRO] Digite o 2º número"
        } else{
        total = parseFloat(num1) * parseFloat(num2);
        tela.innerHTML = total;
        console.log("total: ", total);
        num1 = total;
        console.log("agora n1 é", num1)
        num2 = ''
        }
        break;
    case "/":
        if (num2 === ''){
            tela.innerHTML = "[ERRO] Digite o 2º número"
        } else{
        total = parseFloat(num1) / parseFloat(num2);
        tela.innerHTML = total;
        console.log("total: ", total);
        num1 = total;
        console.log("agora n1 é", num1)
        num2 = ''
        }
        break;
    default:
         
    }
    }else {
        tela.innerHTML = ('Digite o 1º número')
    }
}

