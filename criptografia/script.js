texto = document.getElementById('entrada');
saida = document.getElementById('resultado');
bt_2 = document.getElementById('bt2');
area = document.getElementsByClassName('alfabeto')[0];
dicionario = document.getElementById('abc');
chave = document.getElementById('cripto');
ch = document.getElementById('chave');
revelado = false;

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
    numero = numero.join('');
    saida.value = numero;
    chave.innerHTML = cripto;
    revelado?chave.style.opacity = '1':chave.style.opacity = '0';
}

function revelar(){
    revelado = true;
    chave.style.opacity = '1';
    dicionario.innerHTML = abc;
    ch.innerHTML = 'Chave';
    if(texto.type=='text'){
        revelado = false;
        bt_2.innerHTML = 'Revelar';
        texto.type='password';
        dicionario.innerHTML='';
        chave.innerHTML='';
        ch.innerHTML='';
        return
    }
    
    window.alert('Nivel de Acesso Exigido')
    senha = prompt('Digite a senha: ')
    
    senha=='criptografia'? texto.type = 'text':alert('Acesso Negado');
    bt_2.innerHTML = 'Esconder';
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
