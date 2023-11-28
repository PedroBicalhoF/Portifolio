var quadro = document.getElementsByTagName('table')[0];
var baixar = document.getElementsByTagName('a')[0];
var cor = document.getElementsByTagName('input')[0];
var balde = document.getElementById('balde');
var borracha = document.getElementById('borracha');
var fundo = cor.value;
var cor_atual;
var cor_nova;
var tamanho = prompt('Digite o tamanho(10-50)');
var habilitar = true;

var tela;

if(tamanho<10 || tamanho>50){
    tamanho = 10;
}

baixar.onclick = () =>{
    tela = new Blob(["\ufeff" + quadro.outerHTML],{type: "text/html"});
    baixar.href = window.URL.createObjectURL(tela);
}

borracha.onclick = () =>{
    fundo = "#ffffff";
    balde.style.color = fundo;
    cor.value = fundo;
    habilitar = false;
}

cor.onchange = () =>{
    habilitar = true;
    fundo = cor.value;
    balde.style.color = fundo;
}

balde.onclick = () =>{
    if(habilitar){
        quadro.style.background = cor.value;
        limpar();
    }
}

for(x=0;x<tamanho;x++){//td
    criar();
}

obra();//quadro de xadrez

function criar(){
    let linha = document.createElement('tr');
    
    for(y=0;y<tamanho;y++){
        let coluna = document.createElement('td');
        
        coluna.addEventListener('click',function (){
            cor_atual = fundo;
        })
        
        
        coluna.addEventListener('mouseenter',function (){
            cor_atual = coluna.style.background;
            coluna.style.background = fundo;
        })
        
        coluna.addEventListener('mouseout',function (){
            coluna.style.background = cor_atual;
        })
        
        linha.appendChild(coluna);
    }
    quadro.appendChild(linha);
}

function limpar(){
    for(i=0;i<(tamanho*tamanho);i++){
        document.getElementsByTagName('td')[i].style.background = fundo;
    }
}

function obra(){
    let i=0;
    let voltar= (tamanho*2)-1;
    let pular=tamanho-2;
    while(i<(tamanho*tamanho)){
        document.getElementsByTagName('td')[i].style.background = "#fff";
        if(i==pular){
            i++;
            pular+=(tamanho*2);
        }
        else if(i==voltar){
            i--;
            voltar += (tamanho*2);
        }
        i+=2;
    }
}
