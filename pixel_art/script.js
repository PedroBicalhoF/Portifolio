var quadro = document.getElementsByTagName('table')[0];
var cor = document.getElementsByTagName('input')[0];
var icone = document.getElementsByTagName('i')[0];
var fundo = cor.value;
var cor_atual;
var cor_nova;
var tamanho = prompt('Digite o tamanho(10-50)');

if(tamanho<10 || tamanho>50){
    tamanho = 10;
}

cor.onchange = () =>{
    fundo = cor.value;
    icone.style.color = fundo;
}

icone.onclick = () =>{
    limpar();
}

for(x=0;x<tamanho;x++){//td
    criar();
}

if(tamanho==10){
    obra()
}

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
    document.getElementsByTagName('td')[7].style.background = '#000';
    document.getElementsByTagName('td')[8].style.background = '#000';
    document.getElementsByTagName('td')[9].style.background = '#000';
    document.getElementsByTagName('td')[16].style.background = '#000';
    document.getElementsByTagName('td')[17].style.background = '#000';
    document.getElementsByTagName('td')[18].style.background = 'rgb(190,199,230)';
    document.getElementsByTagName('td')[19].style.background = '#000';
    document.getElementsByTagName('td')[21].style.background = '#000';
    document.getElementsByTagName('td')[22].style.background = '#000';
    document.getElementsByTagName('td')[23].style.background = '#000';
    document.getElementsByTagName('td')[25].style.background = '#000';
    document.getElementsByTagName('td')[26].style.background = '#000';
    document.getElementsByTagName('td')[27].style.background = 'rgb(208,6,6)';
    document.getElementsByTagName('td')[28].style.background = '#000';
    document.getElementsByTagName('td')[29].style.background = '#000';
    document.getElementsByTagName('td')[31].style.background = '#000';
    document.getElementsByTagName('td')[32].style.background = 'rgb(91,236,255)';
    document.getElementsByTagName('td')[33].style.background = '#000';
    document.getElementsByTagName('td')[34].style.background = '#000';
    document.getElementsByTagName('td')[35].style.background = '#000';
    document.getElementsByTagName('td')[36].style.background = 'rgb(190,199,230)';
    document.getElementsByTagName('td')[37].style.background = '#000';
    document.getElementsByTagName('td')[38].style.background = '#000';
    document.getElementsByTagName('td')[41].style.background = '#000';
    document.getElementsByTagName('td')[42].style.background = '#000';
    document.getElementsByTagName('td')[43].style.background = '#333';
    document.getElementsByTagName('td')[44].style.background = '#000';
    document.getElementsByTagName('td')[45].style.background = 'rgb(208,6,6)';
    document.getElementsByTagName('td')[46].style.background = '#000';
    document.getElementsByTagName('td')[47].style.background = '#000';
    document.getElementsByTagName('td')[52].style.background = '#000';
    document.getElementsByTagName('td')[53].style.background = '#333';
    document.getElementsByTagName('td')[54].style.background = '#333';
    document.getElementsByTagName('td')[55].style.background = '#000';
    document.getElementsByTagName('td')[56].style.background = '#000';
    document.getElementsByTagName('td')[61].style.background = '#000';
    document.getElementsByTagName('td')[62].style.background = '#333';
    document.getElementsByTagName('td')[63].style.background = 'rgb(91,236,255)';
    document.getElementsByTagName('td')[64].style.background = '#333';
    document.getElementsByTagName('td')[65].style.background = '#333';
    document.getElementsByTagName('td')[66].style.background = '#000';
    document.getElementsByTagName('td')[67].style.background = '#000';
    document.getElementsByTagName('td')[70].style.background = '#000';
    document.getElementsByTagName('td')[71].style.background = '#333';
    document.getElementsByTagName('td')[72].style.background = '#333';
    document.getElementsByTagName('td')[73].style.background = '#333';
    document.getElementsByTagName('td')[74].style.background = '#000';
    document.getElementsByTagName('td')[75].style.background = '#000';
    document.getElementsByTagName('td')[76].style.background = 'rgb(91,236,255)';
    document.getElementsByTagName('td')[77].style.background = '#000';
    document.getElementsByTagName('td')[80].style.background = '#000';
    document.getElementsByTagName('td')[81].style.background = 'rgb(91,236,255)';
    document.getElementsByTagName('td')[82].style.background = '#333';
    document.getElementsByTagName('td')[83].style.background = '#000';
    document.getElementsByTagName('td')[85].style.background = '#000';
    document.getElementsByTagName('td')[86].style.background = '#000';
    document.getElementsByTagName('td')[87].style.background = '#000';
    document.getElementsByTagName('td')[90].style.background = '#000';
    document.getElementsByTagName('td')[91].style.background = '#000';
    document.getElementsByTagName('td')[92].style.background = '#000';
}