texto = document.getElementById('entrada');
saida = document.getElementById('resultado');
bt_2 = document.getElementById('bt2');
area = document.getElementsByClassName('alfabeto')[0];
chave = document.getElementsByTagName('figure')[0];

const abc = ['0','1','2','3','4','5','6','7','8','9',
'A','B','C','D','E','F','G','H','I','J','K','L','M',
'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function Calcular(){
    cripto = criptografar(abc); 
    const entrada = texto.value.toUpperCase();
    let numero = [];
    
    for(i=0;i<entrada.length;i++){
        let ind = abc.indexOf(entrada[i]);
        numero[i] = cripto[ind];
    }
    for(i=0;i<36;i++){
        var alfn = document.createElement('h1');
        var alfcripto = document.createElement('h2');
        alfn.innerHTML = abc[i]+': ';
        chave.appendChild(alfn);
        alfcripto.innerHTML = cripto[i];
        chave.appendChild(alfcripto);
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
    else{
        bt_2.innerHTML = 'Esconder';
        texto.type='text';
        chave.style.opacity = '1';
    }
    
    window.alert('Nivel de Acesso Exigido')
    senha = prompt('Digite a senha: ')
    
    if(senha=='criptografia'){
        revelado = true;
        texto.type = 'text';
        bt_2.innerHTML = 'Esconder';
    }
    else{
        alert('Acesso Negado');
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
