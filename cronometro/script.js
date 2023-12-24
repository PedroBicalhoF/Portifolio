const relogio = document.getElementsByTagName('h1')[0];
let iniciar;
const botaoInicio = document.getElementsByTagName('button')[0];
let [mlsegundos,segundos,minutos,hora] = [0,0,0,0];

function inicio(){
    botaoInicio.disabled = true;
    iniciar = setInterval(horario,100)
}

function horario(){
    mlsegundos++
    if (mlsegundos==10){
        mlsegundos=0
        segundos++
        if(segundos==60){
            segundos=0
            minutos++
            if(minutos==60){
                minutos=0
                hora++
            }
        }
    }
    relogio.innerHTML = hora+':'+(minutos<10?'0'+minutos+':':minutos+':')+(segundos<10?'0'+segundos+':':segundos+':')+(mlsegundos<10?'0'+mlsegundos:mlsegundos)
}

function pausar(){
    clearInterval(iniciar);
    botaoInicio.innerHTML = 'Continuar';
    botaoInicio.disabled = false;
}
function zerar(){
    clearInterval(iniciar)
    relogio.innerHTML = "0:00:00:00";
    [mlsegundos,segundos,minutos,hora] = [0,0,0,0]
    botaoInicio.innerHTML = 'Iniciar';
    botaoInicio.disabled = false;
}
