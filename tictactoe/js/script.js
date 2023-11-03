inicio = document.getElementById('inicio');
botao = document.getElementsByTagName('form')[0];
var nomes = [];
var estrutura = '3x3';

function mark(e){
    estrutura = `${e}x${e}`;
    document.getElementsByTagName('form')[0].action = `${estrutura}.html`;
    
    e-=1;
    
    for(i=2;i<10;i++){
        
        document.getElementsByTagName('label')[i].style.background = '#bfbfbf';
        
        if(i==e){
            document.getElementsByTagName('label')[i].style.background = '#fff';            
        }
    }
}

function ativar(e){
    if(e==0){
        document.getElementsByTagName('input')[3].value = '';
        document.getElementsByTagName('input')[3].disabled = false;
        document.getElementsByTagName('label')[0].style.background = '#fff';    
        document.getElementsByTagName('label')[1].style.background = '#bfbfbf';    
    }
    else if(e==1){
        document.getElementsByTagName('input')[3].value = 'Robô';
        document.getElementsByTagName('input')[3].disabled = true;
        document.getElementsByTagName('label')[0].style.background = '#bfbfbf';    
        document.getElementsByTagName('label')[1].style.background = '#fff';

    }

}