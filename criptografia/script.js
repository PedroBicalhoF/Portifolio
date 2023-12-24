const texto = document.getElementById('entrada');
const saida = document.getElementById('resultado');
const bt_2 = document.getElementById('bt2');
const chave = document.getElementsByTagName('figure')[0];
let calculado = false;
let alfabetoNovo = []
let alfabetoCriptografado = []
let alfabetoAscci = [];

for(i=0;i<=94;i++){
    alfabetoAscci.push(String.fromCharCode(i+33));
}
for(i=95;i<=127;i++){
    alfabetoAscci.push(String.fromCharCode(i+66));
}
for(i=128;i<221;i++){
    alfabetoAscci.push(String.fromCharCode(i+33));
}

function Calcular(){
    cripto = criptografar(alfabetoAscci); 
    const entrada = texto.value;
    let numero = [];
    
    for(i=0;i<entrada.length;i++){
        let ind = alfabetoAscci.indexOf(entrada[i]);
        numero[i] = cripto[ind];
    }
    if(calculado){
        remocao();
        mapear();
    }
    else{
        calculado = true;
        mapear();
    }
    numero = numero.join('');
    saida.value = numero;
}

function revelar(){
    if(texto.type=='text'){
        bt_2.innerHTML = 'Revelar';
        texto.type='password';
        chave.style.opacity = '0';
        return
    }
    
    window.alert('Nivel de Acesso Exigido')
    senha = prompt('Digite a senha: ')
    
    if(senha=='criptografia'){
        texto.type = 'text';
        bt_2.innerHTML = 'Ocultar';
        chave.style.opacity = '1';
        return
    }
    else{
        alert('Acesso Negado');
        texto.type = 'password';
        chave.style.opacity = '0';
        return
    }
}

function criptografar(v) {//Durstenfeld shuffle algorithm 
    let vetor = v.join('').split(''); 
    
    for (let x = vetor.length - 1; x > 0; x--) {
        let y = Math.floor(Math.random() * (x + 1));
        let temp = vetor[x];
        vetor[x] = vetor[y];
        vetor[y] = temp;
    }
    return vetor;
}
function mapear(){
    for(i=0;i<alfabetoAscci.length;i++){
        alfabetoNovo[i] = document.createElement('h3');
        alfabetoCriptografado[i] = document.createElement('h4');

        alfabetoNovo[i].classList.add('elemento1');
        alfabetoCriptografado[i].classList.add('elemento2');
        
        alfabetoNovo[i].innerHTML = alfabetoAscci[i]+' : ';
        chave.appendChild(alfabetoNovo[i]);
        alfabetoCriptografado[i].innerHTML = cripto[i];
        chave.appendChild(alfabetoCriptografado[i]);
    }
    return
}
function remocao(){
    for(i=(alfabetoAscci.length-1);i>=0;i--){
        alfabetoNovo[i].remove();
        alfabetoCriptografado[i].remove();
    }
    return
}
