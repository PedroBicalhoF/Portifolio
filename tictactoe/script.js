var bt = [];
var ind = [];
var btmarc = []; 
var marcacao = 'X';
var jogadas = 0;
var fim = false;
var texto = document.getElementsByTagName('header')[0];

for(i=0;i<9;i++){
    bt[i] = document.getElementsByTagName('td')[i];
    btmarc[i]=false;
    ind[i] = 0;
}
function marcar(i){
    if(btmarc[i]||fim){return}
    
    if(marcacao=='X'){
        bt[i].innerHTML = 'X';
        bt[i].style.color = '#DC3545';
        marcacao = 'O';
    }else{
        bt[i].innerHTML = 'O';
        bt[i].style.color = '#0275d8';
        marcacao = 'X'
    }
    btmarc[i] = true;

    jogadas +=1;
    if(jogadas<5){return}
    analise();
}

function analise(){
    if((bt[0].innerHTML == bt[1].innerHTML && bt[0].innerHTML == bt[2].innerHTML)&&bt[2].innerHTML!=''){
        fim = true;
        bt[0].style.opacity = '.3';
        bt[1].style.opacity = '.3';
        bt[2].style.opacity = '.3';
        texto.innerHTML = `<h1>Win ${bt[0].innerHTML}</h1>`;
        texto.style.fontSize = '2rem';
    }
    else if((bt[3].innerHTML == bt[4].innerHTML && bt[3].innerHTML == bt[5].innerHTML)&&bt[5].innerHTML!=''){
        fim = true;
        bt[3].style.opacity = '.3';
        bt[4].style.opacity = '.3';
        bt[5].style.opacity = '.3';
        texto.innerHTML = `<h1>Win ${bt[3].innerHTML}</h1>`;
        texto.style.fontSize = '2rem';
    }
    else if((bt[6].innerHTML == bt[7].innerHTML && bt[6].innerHTML == bt[8].innerHTML)&&bt[8].innerHTML!=''){
        fim = true;
        bt[6].style.opacity = '.3';
        bt[7].style.opacity = '.3';
        bt[8].style.opacity = '.3';
        texto.innerHTML = `<h1>Win ${bt[6].innerHTML}</h1>`;
        texto.style.fontSize = '2rem';
    }
    
    //linhas 

    else if((bt[0].innerHTML == bt[3].innerHTML && bt[0].innerHTML == bt[6].innerHTML)&&bt[6].innerHTML!=''){
        fim = true;
        bt[0].style.opacity = '.3';
        bt[3].style.opacity = '.3';
        bt[6].style.opacity = '.3';
        texto.innerHTML = `<h1>Win ${bt[0].innerHTML}</h1>`;
        texto.style.fontSize = '2rem';
    }
    else if((bt[1].innerHTML == bt[4].innerHTML && bt[1].innerHTML == bt[7].innerHTML)&&bt[7].innerHTML!=''){
        fim = true;
        bt[1].style.opacity = '.3';
        bt[4].style.opacity = '.3';
        bt[7].style.opacity = '.3';
        texto.innerHTML = `<h1>Win ${bt[1].innerHTML}</h1>`;
        texto.style.fontSize = '2rem';
    }
    else if((bt[2].innerHTML == bt[5].innerHTML && bt[2].innerHTML == bt[8].innerHTML)&&bt[8].innerHTML!=''){
        fim = true;
        bt[2].style.opacity = '.3';
        bt[5].style.opacity = '.3';
        bt[8].style.opacity = '.3';
        texto.innerHTML = `<h1>Win ${bt[2].innerHTML}</h1>`;
        texto.style.fontSize = '2rem';
    }
    
    //colunas
    
    else if((bt[0].innerHTML == bt[4].innerHTML && bt[0].innerHTML == bt[8].innerHTML)&&bt[8].innerHTML!=''){
        fim = true;
        bt[0].style.opacity = '.3';
        bt[4].style.opacity = '.3';
        bt[8].style.opacity = '.3';
        texto.innerHTML = `<h1>Win ${bt[0].innerHTML}</h1>`;
        texto.style.fontSize = '2rem';
    }
    else if((bt[2].innerHTML == bt[4].innerHTML && bt[2].innerHTML == bt[6].innerHTML)&&bt[6].innerHTML!=''){
        fim = true;
        bt[2].style.opacity = '.3';
        bt[4].style.opacity = '.3';
        bt[6].style.opacity = '.3';
        texto.innerHTML = `<h1>Win ${bt[2].innerHTML}</h1>`;
        texto.style.fontSize = '2rem';
    }

    //diagonais
    else if(jogadas==9){
        alert('Empate');
        texto.innerHTML = `<h1>Empate</h1>`;
        texto.style.fontSize = '2rem';
        return
    }
    //Empate
}


    
