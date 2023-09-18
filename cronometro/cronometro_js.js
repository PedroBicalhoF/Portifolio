
rl = document.getElementsByTagName('h1')[0];
var iniciar;
botao = document.getElementsByTagName('button')[0];
ml = 0
ss = 0
mm = 0 
hr = 0
function inicio(){
    iniciar = setInterval(relogio,100)
}
    function relogio(){
        ml++
        if (ml==10){
            ml=0
            ss++
            if(ss==60){
                ss=0
                mm++
                if(mm==60){
                    mm=0
                    hr++
                }
        }
    }
    rl.innerHTML = hr+':'+(mm<10?'0'+mm+':':mm+':')+(ss<10?'0'+ss+':':ss+':')+(ml<10?'0'+ml:ml)
}
function pausar(){
    clearInterval(iniciar);
    botao.disabled = true;
}
function zerar(){
    clearInterval(iniciar)
    botao.disabled = false;
    ml = 0
    ss = 0
    mm = 0
    hr = 0
    rl.innerHTML = "0:00:00:00"
}
