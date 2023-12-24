const vencedor = document.createElement('h1');
const perdedor = document.createElement('h2');
const versus = document.createElement('p');
const horario = document.createElement('p');

const linha = document.createElement('section');
const historico = document.getElementsByClassName('historico')[0];

versus.innerHTML = 'vs';

vencedor.innerHTML = localStorage.getItem('p1');

perdedor.innerHTML = localStorage.getItem('p2');

horario.innerHTML = localStorage.getItem('horario');

linha.appendChild(vencedor);
linha.appendChild(versus);
linha.appendChild(perdedor);
linha.appendChild(horario);
historico.appendChild(linha);
