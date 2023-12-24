const nomeTarefa = document.getElementById('txt');
const lista = document.getElementsByClassName('Lista')[0];
let numtarefas = 0;

nomeTarefa.addEventListener('keypress',
    function avaliar(chave){
        if(chave.key==='Enter'){
            criar(0)
            return
        }
}) 

function criar(v){
    if(numtarefas>=16){alert('limite atingido');return}
    const botaoEditar = document.createElement('button');
    const botaoExcluir = document.createElement('button');
    const botoes= document.createElement('section');
    const tarefa = document.createElement('li');
    const txt = v==0? nomeTarefa.value : v;
    
    if(!(txt)){return}

    botaoEditar.innerHTML = '✏️'
    botaoExcluir.innerHTML = '✔️';
    botaoEditar.style.marginLeft = '1rem';
    tarefa.innerHTML = txt;

    if(txt.length > 50){tarefa.style.overflowX = 'scroll' }
    
    botoes.appendChild(botaoEditar);
    botoes.appendChild(botaoExcluir);
    tarefa.appendChild(botoes);
    lista.appendChild(tarefa);
    nomeTarefa.value = '';
    
    botaoEditar.addEventListener('click', function(){//Editar tarefa
        if(!(nomeTarefa.value)){ return}        
        tarefa.innerHTML = nomeTarefa.value;
        botoes.appendChild(botaoEditar);
        botoes.appendChild(botaoExcluir);
        tarefa.appendChild(botoes);
        lista.appendChild(tarefa);
        nomeTarefa.value = '';
    })
    
    botaoExcluir.addEventListener('click', function(){//Excluir tarefa
        lista.removeChild(tarefa);
        numtarefas--
    })
    numtarefas++
}