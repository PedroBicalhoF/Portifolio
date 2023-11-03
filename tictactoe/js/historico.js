var j1 = localStorage.getItem('p1');
var j2 = localStorage.getItem('p2');
var horario = localStorage.getItem('horario');
var area = document.getElementsByTagName('figure')[0];
var novojogo = localStorage.getItem('vitoria');

if(novojogo){
    adicionar();
}

function adicionar(){
    const vencedor = document.createElement('h1');
    const perdedor = document.createElement('h2');
    const vs = document.createElement('p');
    const tempo = document.createElement('p');
    const linha = document.createElement('section');

    vencedor.innerHTML = j1;
    vs.innerHTML = 'vs';
    perdedor.innerHTML = j2;
    tempo.innerHTML = horario;

    linha.appendChild(vencedor);
    linha.appendChild(vs);
    linha.appendChild(perdedor);
    linha.appendChild(tempo);
    area.appendChild(linha);
}
