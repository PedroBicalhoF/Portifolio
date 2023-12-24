let elemento = [];
let elementosMarcados = []; 
let marcacao = 'X';
let jogadas = 0;
let fim = false;
const titulo = document.getElementsByTagName('p')[0];
const jogador = document.getElementsByTagName('h1')[0];

const urlParams = new URLSearchParams(window.location.search);
const types =  Number(urlParams.get('tp'))//jogador ou bot
const player1 = urlParams.get('p1')? urlParams.get('p1') : 'Jogador1'; // 1 Jogador
const player2 = urlParams.get('p2')? urlParams.get('p2') : 'Jogador 2';  // 2 Jogador

let elementosVazios = [];

const robo = types===2? true : false;//habilita ou desabilita robo
jogador.innerHTML = player1;

for(i=0;i<9;i++){
    elemento[i] = document.getElementsByTagName('td')[i];
    elementosVazios.push(i);
    elementosMarcados[i]=false;
}
function bot(){
    if(!(fim)){
        let indice = Math.floor(Math.random() * elementosVazios.length);//gera indice aleatorio
        let valor = elementosVazios[indice];//puxa um valor aleatorio entre os elementos vazios baseado em um indice aleatorio
        elementosVazios.splice(indice,1)//retira o elementos apos valor marcação
        
        elemento[valor].innerHTML = 'O';
        elemento[valor].style.color = '#DC3545';
        marcacao = 'X';
        elementosMarcados[valor] = true;
        jogador.innerHTML = player1;
        jogador.style.color = '#0275d8';
        jogadas +=1;
        analise();
    }
}

function marcar(i){
    if(elementosMarcados[i]||fim){return}
    
    if(marcacao=='X'){
        elemento[i].innerHTML = 'X';
        elemento[i].style.color = '#0275d8';
        elementosMarcados[i] = true;
        marcacao = 'O';
        jogador.innerHTML = player2;
        jogador.style.color = '#DC3545';
        jogadas +=1;
        analise();

        if(robo)//bot habilitado
        {
            jogador.innerHTML = player1;
            jogador.style.color = '#0275d8';
            elementosVazios.splice(elementosVazios.indexOf(i), 1);//retira o elemento marcado da opção do bot
            analise();
            setTimeout(bot,500)//chama o bot para jogar
        }
    }
    else{
        elemento[i].innerHTML = 'O';
        elemento[i].style.color = '#DC3545';
        elementosMarcados[i] = true;
        marcacao = 'X';
        jogador.innerHTML = player1;
        jogador.style.color = '#0275d8';
        jogadas +=1;
    } 
    
    if(jogadas<5){return}
    analise();
}

function analise(){
    if((elemento[0].innerHTML == elemento[1].innerHTML && elemento[0].innerHTML == elemento[2].innerHTML)&&elemento[2].innerHTML!=''){
        fimPartida(0);
    }
    else if((elemento[3].innerHTML == elemento[4].innerHTML && elemento[3].innerHTML == elemento[5].innerHTML)&&elemento[5].innerHTML!=''){
        fimPartida(3);
    }
    else if((elemento[6].innerHTML == elemento[7].innerHTML && elemento[6].innerHTML == elemento[8].innerHTML)&&elemento[8].innerHTML!=''){
        fimPartida(6);
    }
    
    //linhas 

    else if((elemento[0].innerHTML == elemento[3].innerHTML && elemento[0].innerHTML == elemento[6].innerHTML)&&elemento[6].innerHTML!=''){
        fimPartida(0);
    }
    else if((elemento[1].innerHTML == elemento[4].innerHTML && elemento[1].innerHTML == elemento[7].innerHTML)&&elemento[7].innerHTML!=''){
        fimPartida(1);
    }
    else if((elemento[2].innerHTML == elemento[5].innerHTML && elemento[2].innerHTML == elemento[8].innerHTML)&&elemento[8].innerHTML!=''){
        fimPartida(2);
    }
    
    //colunas
    
    else if((elemento[0].innerHTML == elemento[4].innerHTML && elemento[0].innerHTML == elemento[8].innerHTML)&&elemento[8].innerHTML!=''){
        fimPartida(0);
    }
    else if((elemento[2].innerHTML == elemento[4].innerHTML && elemento[2].innerHTML == elemento[6].innerHTML)&&elemento[6].innerHTML!=''){
        fimPartida(2);
    }

    //diagonais
    else if(jogadas==9){
        titulo.innerHTML = 'Empate';
        jogador.innerHTML = '';
        vitoria(player1,player1);
        return
    }
    //Empate
}

function reiniciar(){
    let v = []
    for(i=0;i<9;i++){
        elemento[i].innerHTML = '';
        elemento[i].style.opacity = '1'; 
        elementosMarcados[i]=false;
        v.push(i);
    }
    titulo.innerHTML = 'Vez do Jogador';
    marcacao = 'X';
    jogador.innerHTML = player1;
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