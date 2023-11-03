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

for(i=0;i<81;i++){
    bt[i] = document.getElementsByTagName('td')[i];
    btmarc[i]=false;
    v.push(i);
    ind[i] = 0;
}

function bot(){
    if(!(fim)){
        var indice = Math.floor(Math.random() * v.length);//gera indice aleatorio
        var a = v[indice];//puxa um valor aleatorio entre os elementos vazios baseado em um indice aleatorio
        v.splice(indice,1)//retira o elementos apos a marcação
        
        bt[a].innerHTML = 'O';
        bt[a].style.color = '#DC3545';
        btmarc[a] = true;
        marcacao = 'X';
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
            v.splice(v.indexOf(i), 1);//retira o elemento marcado da opção do bot
            analise();
            setTimeout(bot,500)//chama o bot para jogar
        }
        
    }else{
        bt[i].innerHTML = 'O';
        bt[i].style.color = '#DC3545';
        btmarc[i] = true;
        marcacao = 'X';
        jogador.innerHTML = player1;
        jogador.style.color = '#0275d8';
        jogadas +=1;
    }
    
    if(jogadas<17){return}
    analise();
}

function analise(){
    if((bt[0].innerHTML == bt[1].innerHTML && bt[0].innerHTML == bt[2].innerHTML && bt[0].innerHTML == bt[3].innerHTML && bt[0].innerHTML == bt[4].innerHTML && bt[0].innerHTML == bt[5].innerHTML && bt[0].innerHTML == bt[6].innerHTML && bt[0].innerHTML == bt[7].innerHTML && bt[0].innerHTML == bt[8].innerHTML)&&bt[8].innerHTML!=''){
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
    else if((bt[9].innerHTML == bt[10].innerHTML && bt[9].innerHTML == bt[11].innerHTML && bt[9].innerHTML == bt[12].innerHTML && bt[9].innerHTML == bt[13].innerHTML && bt[9].innerHTML == bt[14].innerHTML && bt[9].innerHTML == bt[15].innerHTML && bt[9].innerHTML == bt[16].innerHTML && bt[9].innerHTML == bt[17].innerHTML)&&bt[17].innerHTML!=''){
        fim = true;
        p.innerHTML = '🏆Vencedor:';
        if(bt[9].innerHTML=='X'){
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
    else if((bt[18].innerHTML == bt[19].innerHTML && bt[18].innerHTML == bt[20].innerHTML && bt[18].innerHTML == bt[21].innerHTML && bt[18].innerHTML == bt[22].innerHTML && bt[18].innerHTML == bt[23].innerHTML && bt[18].innerHTML == bt[24].innerHTML && bt[18].innerHTML == bt[25].innerHTML && bt[18].innerHTML == bt[26].innerHTML)&&bt[26].innerHTML!=''){
        fim = true;
        p.innerHTML = '🏆Vencedor:';
        if(bt[18].innerHTML=='X'){
            jogador.innerHTML = `${player1}`
            jogador.style.color = '#0275d8';
            vitoria(player1,player2);
        }
        else{
            jogador.innerHTML = `${player2}`;
            vitoria(player2,player1);
        }
    }
    else if((bt[27].innerHTML == bt[28].innerHTML && bt[27].innerHTML == bt[29].innerHTML && bt[27].innerHTML == bt[30].innerHTML && bt[27].innerHTML == bt[31].innerHTML && bt[27].innerHTML == bt[32].innerHTML && bt[27].innerHTML == bt[33].innerHTML && bt[27].innerHTML == bt[34].innerHTML && bt[27].innerHTML == bt[35].innerHTML)&&bt[35].innerHTML!=''){
        fim = true;
        p.innerHTML = '🏆Vencedor:';
        if(bt[27].innerHTML=='X'){
            jogador.innerHTML = `${player1}`
            jogador.style.color = '#0275d8';
            vitoria(player1,player2);
        }
        else{
            jogador.innerHTML = `${player2}`;
            vitoria(player2,player1);
        }
    }
    else if((bt[36].innerHTML == bt[37].innerHTML && bt[36].innerHTML == bt[38].innerHTML && bt[36].innerHTML == bt[39].innerHTML && bt[36].innerHTML == bt[40].innerHTML && bt[36].innerHTML == bt[41].innerHTML && bt[36].innerHTML == bt[42].innerHTML && bt[36].innerHTML == bt[43].innerHTML && bt[36].innerHTML == bt[44].innerHTML)&&bt[44].innerHTML!=''){
        fim = true;
        p.innerHTML = '🏆Vencedor:';
        if(bt[36].innerHTML=='X'){
            jogador.innerHTML = `${player1}`
            jogador.style.color = '#0275d8';
            vitoria(player1,player2);
        }
        else{
            jogador.innerHTML = `${player2}`;
            vitoria(player2,player1);
        }
    }
    else if((bt[45].innerHTML == bt[46].innerHTML && bt[45].innerHTML == bt[47].innerHTML && bt[45].innerHTML == bt[48].innerHTML && bt[45].innerHTML == bt[49].innerHTML && bt[45].innerHTML == bt[50].innerHTML && bt[45].innerHTML == bt[51].innerHTML && bt[45].innerHTML == bt[52].innerHTML && bt[45].innerHTML == bt[53].innerHTML)&&bt[53].innerHTML!=''){
        fim = true;
        p.innerHTML = '🏆Vencedor:';
        if(bt[45].innerHTML=='X'){
            jogador.innerHTML = `${player1}`
            jogador.style.color = '#0275d8';
            vitoria(player1,player2);
        }
        else{
            jogador.innerHTML = `${player2}`;
            vitoria(player2,player1);
        }        
    }
    else if((bt[54].innerHTML == bt[55].innerHTML && bt[54].innerHTML == bt[56].innerHTML && bt[54].innerHTML == bt[57].innerHTML && bt[54].innerHTML == bt[58].innerHTML && bt[54].innerHTML == bt[59].innerHTML && bt[54].innerHTML == bt[60].innerHTML && bt[54].innerHTML == bt[61].innerHTML && bt[54].innerHTML == bt[62].innerHTML)&&bt[62].innerHTML!=''){
        fim = true;
        p.innerHTML = '🏆Vencedor:';
        if(bt[54].innerHTML=='X'){
            jogador.innerHTML = `${player1}`
            jogador.style.color = '#0275d8';
            vitoria(player1,player2);
        }
        else{
            jogador.innerHTML = `${player2}`;
            vitoria(player2,player1);
        }        
    }
    else if((bt[63].innerHTML == bt[64].innerHTML && bt[63].innerHTML == bt[65].innerHTML && bt[63].innerHTML == bt[66].innerHTML && bt[63].innerHTML == bt[67].innerHTML && bt[63].innerHTML == bt[68].innerHTML && bt[63].innerHTML == bt[69].innerHTML && bt[63].innerHTML == bt[70].innerHTML && bt[63].innerHTML == bt[71].innerHTML)&&bt[71].innerHTML!=''){
        fim = true;
        p.innerHTML = '🏆Vencedor:';
        if(bt[63].innerHTML=='X'){
            jogador.innerHTML = `${player1}`
            jogador.style.color = '#0275d8';
            vitoria(player1,player2);
        }
        else{
            jogador.innerHTML = `${player2}`;
            vitoria(player2,player1);
        }
    }
    else if((bt[72].innerHTML == bt[73].innerHTML && bt[72].innerHTML == bt[74].innerHTML && bt[72].innerHTML == bt[75].innerHTML && bt[72].innerHTML == bt[76].innerHTML && bt[72].innerHTML == bt[77].innerHTML && bt[72].innerHTML == bt[78].innerHTML && bt[72].innerHTML == bt[79].innerHTML && bt[72].innerHTML == bt[80].innerHTML)&&bt[80].innerHTML!=''){
        fim = true;
        p.innerHTML = '🏆Vencedor:';
        if(bt[72].innerHTML=='X'){
            jogador.innerHTML = `${player1}`
            jogador.style.color = '#0275d8';
            vitoria(player1,player2);
        }
        else{
            jogador.innerHTML = `${player2}`;
            vitoria(player2,player1);
        }        
    }
    
    //linhas 
    
    else if((bt[0].innerHTML == bt[9].innerHTML && bt[0].innerHTML == bt[18].innerHTML && bt[0].innerHTML == bt[27].innerHTML && bt[0].innerHTML == bt[36].innerHTML && bt[0].innerHTML == bt[45].innerHTML && bt[0].innerHTML == bt[54].innerHTML && bt[0].innerHTML == bt[63].innerHTML && bt[0].innerHTML == bt[72].innerHTML)&&bt[72].innerHTML!=''){
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
    else if((bt[1].innerHTML == bt[10].innerHTML && bt[1].innerHTML == bt[19].innerHTML && bt[1].innerHTML == bt[28].innerHTML && bt[1].innerHTML == bt[37].innerHTML && bt[1].innerHTML == bt[46].innerHTML && bt[1].innerHTML == bt[55].innerHTML && bt[1].innerHTML == bt[64].innerHTML && bt[1].innerHTML == bt[73].innerHTML)&&bt[73].innerHTML!=''){
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
    else if((bt[2].innerHTML == bt[11].innerHTML && bt[2].innerHTML == bt[20].innerHTML && bt[2].innerHTML == bt[29].innerHTML && bt[2].innerHTML == bt[38].innerHTML && bt[2].innerHTML == bt[47].innerHTML && bt[2].innerHTML == bt[56].innerHTML && bt[2].innerHTML == bt[65].innerHTML && bt[2].innerHTML == bt[74].innerHTML)&&bt[74].innerHTML!=''){
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
    else if((bt[3].innerHTML == bt[12].innerHTML && bt[3].innerHTML == bt[21].innerHTML && bt[3].innerHTML == bt[30].innerHTML && bt[3].innerHTML == bt[39].innerHTML && bt[3].innerHTML == bt[48].innerHTML && bt[3].innerHTML == bt[57].innerHTML && bt[3].innerHTML == bt[66].innerHTML && bt[3].innerHTML == bt[75].innerHTML)&&bt[75].innerHTML!=''){
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
    else if((bt[4].innerHTML == bt[13].innerHTML && bt[4].innerHTML == bt[22].innerHTML && bt[4].innerHTML == bt[31].innerHTML && bt[4].innerHTML == bt[40].innerHTML && bt[4].innerHTML == bt[49].innerHTML && bt[4].innerHTML == bt[58].innerHTML && bt[4].innerHTML == bt[67].innerHTML && bt[4].innerHTML == bt[76].innerHTML)&&bt[76].innerHTML!=''){
        fim = true;
        p.innerHTML = '🏆Vencedor:';
        if(bt[4].innerHTML=='X'){
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
    else if((bt[5].innerHTML == bt[14].innerHTML && bt[5].innerHTML == bt[23].innerHTML && bt[5].innerHTML == bt[32].innerHTML && bt[5].innerHTML == bt[41].innerHTML && bt[5].innerHTML == bt[50].innerHTML && bt[5].innerHTML == bt[59].innerHTML && bt[5].innerHTML == bt[68].innerHTML && bt[5].innerHTML == bt[77].innerHTML)&&bt[77].innerHTML!=''){
        fim = true;
        p.innerHTML = '🏆Vencedor:';
        if(bt[5].innerHTML=='X'){
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
    else if((bt[6].innerHTML == bt[15].innerHTML && bt[6].innerHTML == bt[24].innerHTML && bt[6].innerHTML == bt[33].innerHTML && bt[6].innerHTML == bt[42].innerHTML && bt[6].innerHTML == bt[51].innerHTML && bt[6].innerHTML == bt[60].innerHTML && bt[6].innerHTML == bt[69].innerHTML && bt[6].innerHTML == bt[78].innerHTML)&&bt[78].innerHTML!=''){
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
    else if((bt[7].innerHTML == bt[16].innerHTML && bt[7].innerHTML == bt[25].innerHTML && bt[7].innerHTML == bt[34].innerHTML && bt[7].innerHTML == bt[43].innerHTML && bt[7].innerHTML == bt[52].innerHTML && bt[7].innerHTML == bt[61].innerHTML && bt[7].innerHTML == bt[70].innerHTML && bt[7].innerHTML == bt[79].innerHTML)&&bt[79].innerHTML!=''){
        fim = true;
        p.innerHTML = '🏆Vencedor:';
        if(bt[7].innerHTML=='X'){
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
    else if((bt[8].innerHTML == bt[17].innerHTML && bt[8].innerHTML == bt[26].innerHTML && bt[8].innerHTML == bt[35].innerHTML && bt[8].innerHTML == bt[44].innerHTML && bt[8].innerHTML == bt[53].innerHTML && bt[8].innerHTML == bt[62].innerHTML && bt[8].innerHTML == bt[71].innerHTML && bt[8].innerHTML == bt[80].innerHTML)&&bt[80].innerHTML!=''){
        fim = true;
        p.innerHTML = '🏆Vencedor:';
        if(bt[8].innerHTML=='X'){
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
    
    else if((bt[0].innerHTML == bt[10].innerHTML && bt[0].innerHTML == bt[20].innerHTML && bt[0].innerHTML == bt[30].innerHTML && bt[0].innerHTML == bt[40].innerHTML && bt[0].innerHTML == bt[50].innerHTML && bt[0].innerHTML == bt[60].innerHTML && bt[0].innerHTML == bt[70].innerHTML && bt[0].innerHTML == bt[80].innerHTML)&&bt[80].innerHTML!=''){
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
    else if((bt[8].innerHTML == bt[16].innerHTML && bt[8].innerHTML == bt[24].innerHTML && bt[8].innerHTML == bt[32].innerHTML && bt[8].innerHTML == bt[40].innerHTML && bt[8].innerHTML == bt[48].innerHTML && bt[8].innerHTML == bt[56].innerHTML && bt[8].innerHTML == bt[64].innerHTML && bt[8].innerHTML == bt[72].innerHTML)&&bt[72].innerHTML!=''){
        fim = true;
        p.innerHTML = '🏆Vencedor:';
        if(bt[8].innerHTML=='X'){
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
    else if(jogadas==81){
        p.innerHTML = 'Empate';
        jogador.innerHTML = '';
        vitoria(player1,player1);
        return
    }
    //Empate
}

function reiniciar(){
    v=[];
    for(i=0;i<81;i++){
        bt[i].innerHTML = '';
        btmarc[i]=false;
        v.push(i);
        ind[i] = 0;
    }
    p.innerHTML = 'Vez do Jogador';
    jogador.innerHTML = player1;
    marcacao = 'X';
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
}