var bt = [];
var ind = [];
var btmarc = []; 
var marcacao = 'X';
var jogadas = 0;
var fim = false;
var texto = document.getElementsByTagName('header')[0];
var p = document.getElementsByTagName('p')[0];
var jogador = document.getElementsByTagName('h1')[0];

const urlParams = new URLSearchParams(window.location.search);
var types =  urlParams.get('tp')//tipo
var player1 = urlParams.get('p1') // 1 Jogador
var player2 = urlParams.get('p2') // 2 Jogador

var v = [];
var robo=false;//habilita ou desabilita robo
if(!(player1)){player1='Jogador1'}
if(!(player2)){player2='Jogador2'}
jogador.innerHTML = player1;

if(types==2){
    robo=true;
}

for(i=0;i<9;i++){
    bt[i] = document.getElementsByTagName('td')[i];
    v.push(i);
    btmarc[i]=false;
    ind[i] = 0;
}
function bot(){
    if(!(fim)){
        var indice = Math.floor(Math.random() * v.length);//gera indice aleatorio
        var a = v[indice];//puxa um valor aleatorio entre os elementos vazios baseado em um indice aleatorio
        v.splice(indice,1)//retira o elementos apos a marcação
        
        bt[a].innerHTML = 'O';
        bt[a].style.color = '#DC3545';
        marcacao = 'X';
        btmarc[a] = true;
        jogador.innerHTML = player1;
        jogador.style.color = '#0275d8';
        jogadas +=1;
        analise();
    }
}

function marcar(i){
    if(btmarc[i]||fim){return}
    
    if(marcacao=='X'){
        bt[i].innerHTML = 'X';
        bt[i].style.color = '#0275d8';
        btmarc[i] = true;
        marcacao = 'O';
        jogador.innerHTML = player2;
        jogador.style.color = '#DC3545';
        jogadas +=1;
        analise();

        if(robo)//bot habilitado
        {
            jogador.innerHTML = player1;
            jogador.style.color = '#0275d8';
            v.splice(v.indexOf(i), 1);//retira o elemento marcado da opção do bot
            analise();
            setTimeout(bot,500)//chama o bot para jogar
        }
    }
    else{
        bt[i].innerHTML = 'O';
        bt[i].style.color = '#DC3545';
        btmarc[i] = true;
        marcacao = 'X';
        jogador.innerHTML = player1;
        jogador.style.color = '#0275d8';
        jogadas +=1;
    } 
    
    if(jogadas<5){return}
    analise();
}

function analise(){
    if((bt[0].innerHTML == bt[1].innerHTML && bt[0].innerHTML == bt[2].innerHTML)&&bt[2].innerHTML!=''){
        fim = true;
        p.innerHTML = '🏆Vencedor:';
        if(bt[0].innerHTML=='X'){
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
    else if((bt[3].innerHTML == bt[4].innerHTML && bt[3].innerHTML == bt[5].innerHTML)&&bt[5].innerHTML!=''){
        fim = true;
        p.innerHTML = '🏆Vencedor:';
        if(bt[3].innerHTML=='X'){
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
    else if((bt[6].innerHTML == bt[7].innerHTML && bt[6].innerHTML == bt[8].innerHTML)&&bt[8].innerHTML!=''){
        fim = true;
        p.innerHTML = '🏆Vencedor:';
        if(bt[6].innerHTML=='X'){
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
    
    //linhas 

    else if((bt[0].innerHTML == bt[3].innerHTML && bt[0].innerHTML == bt[6].innerHTML)&&bt[6].innerHTML!=''){
        fim = true;
        p.innerHTML = '🏆Vencedor:';
        if(bt[0].innerHTML=='X'){
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
    else if((bt[1].innerHTML == bt[4].innerHTML && bt[1].innerHTML == bt[7].innerHTML)&&bt[7].innerHTML!=''){
        fim = true;
        p.innerHTML = '🏆Vencedor:';
        if(bt[1].innerHTML=='X'){
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
    else if((bt[2].innerHTML == bt[5].innerHTML && bt[2].innerHTML == bt[8].innerHTML)&&bt[8].innerHTML!=''){
        fim = true;
        p.innerHTML = '🏆Vencedor:';
        if(bt[2].innerHTML=='X'){
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
    
    //colunas
    
    else if((bt[0].innerHTML == bt[4].innerHTML && bt[0].innerHTML == bt[8].innerHTML)&&bt[8].innerHTML!=''){
        fim = true;
        p.innerHTML = '🏆Vencedor:';
        if(bt[0].innerHTML=='X'){
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
    else if((bt[2].innerHTML == bt[4].innerHTML && bt[2].innerHTML == bt[6].innerHTML)&&bt[6].innerHTML!=''){
        fim = true;
        p.innerHTML = '🏆Vencedor:';
        if(bt[0].innerHTML=='X'){
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

    //diagonais
    else if(jogadas==9){
        p.innerHTML = 'Empate';
        jogador.innerHTML = '';
        vitoria(player1,player1);
        return
    }
    //Empate
}

function reiniciar(){
    v = []
    for(i=0;i<9;i++){
        bt[i].innerHTML = '';
        bt[i].style.opacity = '1'; 
        btmarc[i]=false;
        v.push(i);
        ind[i] = 0;
    }
    p.innerHTML = 'Vez do Jogador';
    marcacao = 'X';
    jogador.innerHTML = player1;
    jogadas = 0;
    fim = false;
}
function vitoria(v,d){
    let data = new Date();
    let dia = data.getDay();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let relogio = `${dia}/${mes}/${ano}.${hora}:${minuto}`;

    localStorage.setItem('p1',v);
    localStorage.setItem('p2',d);
    localStorage.setItem('horario',relogio);
    localStorage.setItem('vitoria',true);
}
