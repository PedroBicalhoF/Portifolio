const inicio = document.getElementById('inicio');
const botao = document.getElementsByTagName('form')[0];
let nomes = [];
let estrutura = '3x3';

function mark(tamanho){
    estrutura = `${tamanho}x${tamanho}`;
    document.getElementsByTagName('form')[0].action = `${estrutura}.html`;
    
    tamanho-=1;
    
    for(i=2;i<10;i++){
        
        document.getElementsByTagName('label')[i].style.background = '#bfbfbf';
        
        if(i==tamanho){
            document.getElementsByTagName('label')[i].style.background = '#fff';            
        }
    }
}

function ativar(tipo){
    if(tipo==0){
        document.getElementsByTagName('input')[3].value = '';
        document.getElementsByTagName('input')[3].disabled = false;
        document.getElementsByTagName('label')[0].style.background = '#fff';    
        document.getElementsByTagName('label')[1].style.background = '#bfbfbf';    
    }
    else if(tipo==1){
        document.getElementsByTagName('input')[3].value = 'Robô';
        document.getElementsByTagName('input')[3].disabled = true;
        document.getElementsByTagName('label')[0].style.background = '#bfbfbf';    
        document.getElementsByTagName('label')[1].style.background = '#fff';

    }

}