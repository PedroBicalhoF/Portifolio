texto = document.getElementById('entrada');
saida = document.getElementById('resultado');
bt_2 = document.getElementById('bt2');
chave = document.getElementsByTagName('figure')[0];
calculado = false;
alfn = []
alfcripto = []
const abc = [];

for(i=0;i<=94;i++){
    abc[i] = String.fromCharCode(i+33);
}
for(i=95;i<=127;i++){
    abc[i] = String.fromCharCode(i+66);
}
for(i=128;i<221;i++){
    abc[i] = String.fromCharCode(i+33);
}

function Calcular(){
    console.log(abc)
    cripto = criptografar(abc); 
    const entrada = texto.value;
    let numero = [];
    
    for(i=0;i<entrada.length;i++){
        let ind = abc.indexOf(entrada[i]);
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
    console.log(abc[221])
}

function revelar(){
    if(texto.type=='text'){
        bt_2.innerHTML = 'Revelar';
        texto.type='password';
        chave.style.opacity = '0';
        return
    }
    else{
        bt_2.innerHTML = 'Ocultar';
        texto.type='text';
        chave.style.opacity = '1';
    }
    
    window.alert('Nivel de Acesso Exigido')
    senha = prompt('Digite a senha: ')
    
    if(senha=='criptografia'){
        texto.type = 'text';
        bt_2.innerHTML = 'Ocultar';
        return
    }
    else{
        alert('Acesso Negado');
        return
    }
    
}

function criptografar(v) {//Durstenfeld shuffle algorithm 
    let vetor = v.join('').split(''); 
    
    for (var x = vetor.length - 1; x > 0; x--) {
        var y = Math.floor(Math.random() * (x + 1));
        var temp = vetor[x];
        vetor[x] = vetor[y];
        vetor[y] = temp;
    }
    return vetor;
}
function mapear(){
    for(i=0;i<abc.length;i++){
        alfn[i] = document.createElement('h3');
        alfcripto[i] = document.createElement('h4');

        alfn[i].classList.add('elemento1');
        alfcripto[i].classList.add('elemento2');
        
        alfn[i].innerHTML = abc[i]+' : ';
        chave.appendChild(alfn[i]);
        alfcripto[i].innerHTML = cripto[i];
        chave.appendChild(alfcripto[i]);
    }
    return
}
function remocao(){
    for(i=(abc.length-1);i>=0;i--){
        alfn[i].remove();
        alfcripto[i].remove();
    }
    return
}
