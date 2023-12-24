let elementos = [];
let elementosMarcados = []; 
let marcacao = 'X';
let jogadas = 0;
let fim = false;
const titulo = document.getElementsByTagName('p')[0];
const jogador = document.getElementsByTagName('h1')[0];

const urlParams = new URLSearchParams(window.location.search);
const types =  Number(urlParams.get('tp'))//tipo
const player1 = urlParams.get('p1')? urlParams.get('p1') : 'Jogador1'; // 1 Jogador
const player2 = urlParams.get('p2')? urlParams.get('p2') : 'Jogador2'; // 2 Jogador

let elementosVazios = [];
const robo = types===2? true : false;//habilita ou desabilita robo
jogador.innerHTML = player1;

for(i=0;i<100;i++){
    elementos[i] = document.getElementsByTagName('td')[i];
    elementosMarcados[i]=false;
    elementosVazios.push(i);
}

function bot(){
    if(!(fim)){
        let indice = Math.floor(Math.random() * elementosVazios.length);//gera indice aleatorio
        let valor = elementosVazios[indice];//puxa um valor aleatorio entre os elementos vazios baseado em um indice aleatorio
        elementosVazios.splice(indice,1)//retira o elementos apos a marcação
    
        elementos[valor].innerHTML = 'O';
        elementos[valor].style.color = '#DC3545';
        elementosMarcados[valor] = true;
        marcacao = 'X';
        jogador.innerHTML = player1;
        jogador.style.color = '#0275d8';
        jogadas +=1;
        analise();
        }
    }

function marcar(i){
    if(elementosMarcados[i]||fim){return}
    
    if(marcacao=='X'){
        elementos[i].innerHTML = 'X';
        elementos[i].style.color = '#0275d8';
        elementosMarcados[i] = true;
        marcacao = 'O';
        jogador.innerHTML = player2;
        jogador.style.color = '#DC3545';
        jogadas +=1;
        analise();
    if(robo)//bot habilitado
        {
            jogador.innerHTML = player1;
            elementosVazios.splice(elementosVazios.indexOf(i), 1);//retira o elemento marcado da opção do bot
            analise();
            setTimeout(bot,500)//chama o bot para jogar
        }

    }else if (!(robo)){
        elementos[i].innerHTML = 'O';
        elementos[i].style.color = '#DC3545';
        elementosMarcados[i] = true;
        marcacao = 'X';
        jogador.innerHTML = player1;
        jogador.style.color = '#0275d8';
        jogadas +=1;
    }

    if(jogadas<19){return}
    analise();
}

function analise(){
    if((elementos[0].innerHTML == elementos[1].innerHTML && elementos[0].innerHTML == elementos[2].innerHTML && elementos[0].innerHTML == elementos[3].innerHTML && elementos[0].innerHTML == elementos[4].innerHTML && elementos[0].innerHTML == elementos[5].innerHTML && elementos[0].innerHTML == elementos[6].innerHTML && elementos[0].innerHTML == elementos[7].innerHTML && elementos[0].innerHTML == elementos[8].innerHTML && elementos[0].innerHTML == elementos[9].innerHTML)&&elementos[9].innerHTML!=''){
        fimPartida(0);  
    }
    else if((elementos[10].innerHTML == elementos[11].innerHTML && elementos[10].innerHTML == elementos[12].innerHTML && elementos[10].innerHTML == elementos[13].innerHTML && elementos[10].innerHTML == elementos[14].innerHTML && elementos[10].innerHTML == elementos[15].innerHTML && elementos[10].innerHTML == elementos[16].innerHTML && elementos[10].innerHTML == elementos[17].innerHTML && elementos[10].innerHTML == elementos[18].innerHTML && elementos[10].innerHTML == elementos[19].innerHTML)&&elementos[19].innerHTML!=''){
        fimPartida(10);
    }
    else if((elementos[20].innerHTML == elementos[21].innerHTML && elementos[20].innerHTML == elementos[22].innerHTML && elementos[20].innerHTML == elementos[23].innerHTML && elementos[20].innerHTML == elementos[24].innerHTML && elementos[20].innerHTML == elementos[25].innerHTML && elementos[20].innerHTML == elementos[26].innerHTML && elementos[20].innerHTML == elementos[27].innerHTML && elementos[20].innerHTML == elementos[28].innerHTML && elementos[20].innerHTML == elementos[29].innerHTML)&&elementos[29].innerHTML!=''){
        fimPartida(20);
    }
    else if((elementos[30].innerHTML == elementos[31].innerHTML && elementos[30].innerHTML == elementos[32].innerHTML && elementos[30].innerHTML == elementos[33].innerHTML && elementos[30].innerHTML == elementos[34].innerHTML && elementos[30].innerHTML == elementos[35].innerHTML && elementos[30].innerHTML == elementos[36].innerHTML && elementos[30].innerHTML == elementos[37].innerHTML && elementos[30].innerHTML == elementos[38].innerHTML && elementos[30].innerHTML == elementos[39].innerHTML)&&elementos[39].innerHTML!=''){
        fimPartida(30);
    }
    else if((elementos[40].innerHTML == elementos[41].innerHTML && elementos[40].innerHTML == elementos[42].innerHTML && elementos[40].innerHTML == elementos[43].innerHTML && elementos[40].innerHTML == elementos[44].innerHTML && elementos[40].innerHTML == elementos[45].innerHTML && elementos[40].innerHTML == elementos[46].innerHTML && elementos[40].innerHTML == elementos[47].innerHTML && elementos[40].innerHTML == elementos[48].innerHTML && elementos[40].innerHTML == elementos[49].innerHTML)&&elementos[94].innerHTML!=''){
        fimPartida(40);
    }
    else if((elementos[50].innerHTML == elementos[51].innerHTML && elementos[50].innerHTML == elementos[52].innerHTML && elementos[50].innerHTML == elementos[53].innerHTML && elementos[50].innerHTML == elementos[54].innerHTML && elementos[50].innerHTML == elementos[55].innerHTML && elementos[50].innerHTML == elementos[56].innerHTML && elementos[50].innerHTML == elementos[57].innerHTML && elementos[50].innerHTML == elementos[58].innerHTML && elementos[50].innerHTML == elementos[59].innerHTML)&&elementos[59].innerHTML!=''){
        fimPartida(50);
    }
    else if((elementos[60].innerHTML == elementos[61].innerHTML && elementos[60].innerHTML == elementos[62].innerHTML && elementos[60].innerHTML == elementos[63].innerHTML && elementos[60].innerHTML == elementos[64].innerHTML && elementos[60].innerHTML == elementos[65].innerHTML && elementos[60].innerHTML == elementos[66].innerHTML && elementos[60].innerHTML == elementos[67].innerHTML && elementos[60].innerHTML == elementos[68].innerHTML&& elementos[60].innerHTML == elementos[69].innerHTML)&&elementos[69].innerHTML!=''){
        fimPartida(60);
    }
    else if((elementos[70].innerHTML == elementos[71].innerHTML && elementos[70].innerHTML == elementos[72].innerHTML && elementos[70].innerHTML == elementos[73].innerHTML && elementos[70].innerHTML == elementos[74].innerHTML && elementos[70].innerHTML == elementos[75].innerHTML && elementos[70].innerHTML == elementos[76].innerHTML && elementos[70].innerHTML == elementos[77].innerHTML && elementos[70].innerHTML == elementos[78].innerHTML && elementos[70].innerHTML == elementos[79].innerHTML)&&elementos[79].innerHTML!=''){
        fimPartida(70);
    }
    else if((elementos[80].innerHTML == elementos[81].innerHTML && elementos[80].innerHTML == elementos[82].innerHTML && elementos[80].innerHTML == elementos[83].innerHTML && elementos[80].innerHTML == elementos[84].innerHTML && elementos[80].innerHTML == elementos[85].innerHTML && elementos[80].innerHTML == elementos[86].innerHTML && elementos[80].innerHTML == elementos[87].innerHTML && elementos[80].innerHTML == elementos[88].innerHTML && elementos[80].innerHTML == elementos[89].innerHTML)&&elementos[89].innerHTML!=''){
        fimPartida(80);
    }
    else if((elementos[90].innerHTML == elementos[91].innerHTML && elementos[90].innerHTML == elementos[92].innerHTML && elementos[90].innerHTML == elementos[93].innerHTML && elementos[90].innerHTML == elementos[94].innerHTML && elementos[90].innerHTML == elementos[95].innerHTML && elementos[90].innerHTML == elementos[96].innerHTML && elementos[90].innerHTML == elementos[97].innerHTML && elementos[90].innerHTML == elementos[98].innerHTML && elementos[90].innerHTML == elementos[99].innerHTML)&&elementos[99].innerHTML!=''){
        fimPartida(90);
    }
    
    //linhas 

    else if((elementos[0].innerHTML == elementos[10].innerHTML && elementos[0].innerHTML == elementos[20].innerHTML && elementos[0].innerHTML == elementos[30].innerHTML && elementos[0].innerHTML == elementos[40].innerHTML && elementos[0].innerHTML == elementos[50].innerHTML && elementos[0].innerHTML == elementos[60].innerHTML && elementos[0].innerHTML == elementos[70].innerHTML && elementos[0].innerHTML == elementos[80].innerHTML && elementos[0].innerHTML == elementos[90].innerHTML)&&elementos[90].innerHTML!=''){
        fimPartida(0);
    }
    else if((elementos[1].innerHTML == elementos[11].innerHTML && elementos[1].innerHTML == elementos[21].innerHTML && elementos[1].innerHTML == elementos[31].innerHTML && elementos[1].innerHTML == elementos[41].innerHTML && elementos[1].innerHTML == elementos[51].innerHTML && elementos[1].innerHTML == elementos[61].innerHTML && elementos[1].innerHTML == elementos[71].innerHTML && elementos[1].innerHTML == elementos[81].innerHTML && elementos[1].innerHTML == elementos[91].innerHTML)&&elementos[91].innerHTML!=''){
        fimPartida(1);
    }
    else if((elementos[2].innerHTML == elementos[12].innerHTML && elementos[2].innerHTML == elementos[22].innerHTML && elementos[2].innerHTML == elementos[32].innerHTML && elementos[2].innerHTML == elementos[42].innerHTML && elementos[2].innerHTML == elementos[52].innerHTML && elementos[2].innerHTML == elementos[62].innerHTML && elementos[2].innerHTML == elementos[72].innerHTML && elementos[2].innerHTML == elementos[82].innerHTML && elementos[2].innerHTML == elementos[92].innerHTML)&&elementos[92].innerHTML!=''){
        fimPartida(2);
    }
    else if((elementos[3].innerHTML == elementos[13].innerHTML && elementos[3].innerHTML == elementos[23].innerHTML && elementos[3].innerHTML == elementos[33].innerHTML && elementos[3].innerHTML == elementos[43].innerHTML && elementos[3].innerHTML == elementos[53].innerHTML && elementos[3].innerHTML == elementos[63].innerHTML && elementos[3].innerHTML == elementos[73].innerHTML && elementos[3].innerHTML == elementos[83].innerHTML && elementos[3].innerHTML == elementos[93].innerHTML)&&elementos[93].innerHTML!=''){
        fimPartida(3);
    }
    else if((elementos[4].innerHTML == elementos[14].innerHTML && elementos[4].innerHTML == elementos[24].innerHTML && elementos[4].innerHTML == elementos[34].innerHTML && elementos[4].innerHTML == elementos[44].innerHTML && elementos[4].innerHTML == elementos[54].innerHTML && elementos[4].innerHTML == elementos[64].innerHTML && elementos[4].innerHTML == elementos[74].innerHTML && elementos[4].innerHTML == elementos[84].innerHTML && elementos[4].innerHTML == elementos[94].innerHTML)&&elementos[94].innerHTML!=''){
        fimPartida(4);
    }
    else if((elementos[5].innerHTML == elementos[15].innerHTML && elementos[5].innerHTML == elementos[25].innerHTML && elementos[5].innerHTML == elementos[35].innerHTML && elementos[5].innerHTML == elementos[45].innerHTML && elementos[5].innerHTML == elementos[55].innerHTML && elementos[5].innerHTML == elementos[65].innerHTML && elementos[5].innerHTML == elementos[75].innerHTML && elementos[5].innerHTML == elementos[85].innerHTML && elementos[5].innerHTML == elementos[95].innerHTML)&&elementos[95].innerHTML!=''){
        fimPartida(5);
    }
    else if((elementos[6].innerHTML == elementos[16].innerHTML && elementos[6].innerHTML == elementos[26].innerHTML && elementos[6].innerHTML == elementos[36].innerHTML && elementos[6].innerHTML == elementos[46].innerHTML && elementos[6].innerHTML == elementos[56].innerHTML && elementos[6].innerHTML == elementos[66].innerHTML && elementos[6].innerHTML == elementos[76].innerHTML && elementos[6].innerHTML == elementos[86].innerHTML&& elementos[6].innerHTML == elementos[96].innerHTML)&&elementos[96].innerHTML!=''){
        fimPartida(6);
    }
    else if((elementos[7].innerHTML == elementos[17].innerHTML && elementos[7].innerHTML == elementos[27].innerHTML && elementos[7].innerHTML == elementos[37].innerHTML && elementos[7].innerHTML == elementos[47].innerHTML && elementos[7].innerHTML == elementos[57].innerHTML && elementos[7].innerHTML == elementos[67].innerHTML && elementos[7].innerHTML == elementos[77].innerHTML && elementos[7].innerHTML == elementos[87].innerHTML && elementos[7].innerHTML == elementos[97].innerHTML)&&elementos[97].innerHTML!=''){
        fimPartida(7);
    }
    else if((elementos[8].innerHTML == elementos[18].innerHTML && elementos[8].innerHTML == elementos[28].innerHTML && elementos[8].innerHTML == elementos[38].innerHTML && elementos[8].innerHTML == elementos[48].innerHTML && elementos[8].innerHTML == elementos[58].innerHTML && elementos[8].innerHTML == elementos[68].innerHTML && elementos[8].innerHTML == elementos[78].innerHTML && elementos[8].innerHTML == elementos[88].innerHTML && elementos[8].innerHTML == elementos[98].innerHTML)&&elementos[98].innerHTML!=''){
        fimPartida(8);
    }
    else if((elementos[9].innerHTML == elementos[19].innerHTML && elementos[9].innerHTML == elementos[29].innerHTML && elementos[9].innerHTML == elementos[39].innerHTML && elementos[9].innerHTML == elementos[49].innerHTML && elementos[9].innerHTML == elementos[59].innerHTML && elementos[9].innerHTML == elementos[69].innerHTML && elementos[9].innerHTML == elementos[79].innerHTML && elementos[9].innerHTML == elementos[89].innerHTML && elementos[9].innerHTML == elementos[99].innerHTML)&&elementos[99].innerHTML!=''){
        fimPartida(9);
    }
    
    //colunas
    
    else if((elementos[0].innerHTML == elementos[11].innerHTML && elementos[0].innerHTML == elementos[22].innerHTML && elementos[0].innerHTML == elementos[33].innerHTML && elementos[0].innerHTML == elementos[44].innerHTML && elementos[0].innerHTML == elementos[55].innerHTML && elementos[0].innerHTML == elementos[66].innerHTML && elementos[0].innerHTML == elementos[77].innerHTML && elementos[0].innerHTML == elementos[88].innerHTML && elementos[0].innerHTML == elementos[99].innerHTML)&&elementos[99].innerHTML!=''){
        fimPartida(0);
    }
    else if((elementos[9].innerHTML == elementos[18].innerHTML && elementos[9].innerHTML == elementos[27].innerHTML && elementos[9].innerHTML == elementos[36].innerHTML && elementos[9].innerHTML == elementos[45].innerHTML && elementos[9].innerHTML == elementos[54].innerHTML && elementos[9].innerHTML == elementos[63].innerHTML && elementos[9].innerHTML == elementos[72].innerHTML && elementos[9].innerHTML == elementos[81].innerHTML && elementos[9].innerHTML == elementos[90].innerHTML)&&elementos[90].innerHTML!=''){
        fimPartida(9);
    }

    //diagonais
    else if(jogadas==100){
        titulo.innerHTML = 'Empate';
        jogador.innerHTML = '';
        vitoria(player1,player1)
        return
    }
    //Empate
}

function reiniciar(){
    let v=[];
    for(i=0;i<100;i++){
        elementos[i].innerHTML = '';
        elementosMarcados[i]=false;
        v.push(i);
    }
    titulo.innerHTML = 'Vez do Jogador';
    jogador.innerHTML = player1;
    marcacao = 'X';
    jogadas = 0;
    fim = false;
}

function vitoria(v,d){
    const data = new Date();
    const horario = `${data.toLocaleDateString()} --- ${data.getHours()}:${data.getMinutes()}`;

    localStorage.setItem('p1',v);
    localStorage.setItem('p2',d);
    localStorage.setItem('horario',horario);
    localStorage.setItem('vitoria',true);
}
function fimPartida(valor){
    fim = true;
        titulo.innerHTML = '🏆Vencedor:';
        if(elemento[valor].innerHTML=='X'){
            jogador.innerHTML = `${player1}`;
            jogador.style.color = '#0275d8';
            vitoria(player1,player2);
        }
        else{
            jogador.innerHTML = `${player2}`;
            jogador.style.color = '#DC3545';
            vitoria(player2,player1);
        }
}