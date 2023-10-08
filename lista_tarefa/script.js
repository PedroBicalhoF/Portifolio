var pesquisa = document.getElementsByTagName('input')[0];
var texto = document.getElementById('txt');
var lista = document.getElementsByClassName('Lista')[0];
var listas = 0;

pesquisa.addEventListener('keypress',
    function avaliar(chave){
        if(chave.key=='Enter'){
            criar()
            return
        }
}) 

function criar(){
    if(listas>=16){alert('limite atingido');return}
    let txt = texto.value; 
    let edt = document.createElement('button');
    let dl = document.createElement('button');
    let tarefa = document.createElement('section');
    
    if(!(txt)){return}

    edt.innerHTML = '✏️'
    dl.innerHTML = '✔️';
    edt.style.marginLeft = '1rem';
    tarefa.innerHTML = txt;

    if(txt.length > 50){tarefa.style.overflowX = 'scroll' }
    
    tarefa.appendChild(edt);
    tarefa.appendChild(dl);
    lista.appendChild(tarefa);
    texto.value = '';
    
    edt.addEventListener('click', function(){//Editar tarefa
        if(!(texto.value)){ return}
        if(texto.value.length < 50){tarefa.style.overflowX = 'hidden'}
        
        tarefa.innerHTML = texto.value;
        tarefa.appendChild(edt);
        tarefa.appendChild(dl);
        lista.appendChild(tarefa);
        texto.value = '';
    })
    
    dl.addEventListener('click', function(){//Excluir tarefa
        lista.removeChild(tarefa);
        listas--
    })
    listas++
}




