const resultado = document.getElementById('Resultado');
let valor;
const calculadora = document.getElementsByTagName('table')[0];

let insert = (num) => resultado.innerHTML += num;

let clean = () => resultado.innerHTML = "";

let back = () => resultado.innerHTML = valor.substring(0, valor.length -1);

function calcular() {
    valor = resultado.innerHTML
    
    if(valor.length > 1 && valor.length < 17) {
        resultado.innerHTML = eval(valor);
    }
    else if (valor.length < 1){
        resultado.innerHTML = "Nada a Calcular";
    }

    else {
        resultado.innerHTML = eval(valor);
        resultado.style.width = "500px";
        calculadora.style.marginLeft = "150px";

        document.getElementsByTagName('button')[0].onclick = function volta() {
            resultado.innerHTML = "";
            resultado.style.width = "215px";
            calculadora.style.marginLeft = "0px";
        }
    }
}



