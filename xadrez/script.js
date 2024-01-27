const tamanho = 8;//padrao
const tabuleiro = document.getElementById('tabuleiro');
const pecas = {
    torreEsquerda:,
    bispoEsquerdo
    cavaloEsquerdo
    rainha
    rei 
    cavaloDireito
    bispoDireito
    torreDireita
}
(function criar(){
    for(x=0;x<tamanho;x++){
        const linha = document.createElement('tr');
        for(y=0;y<tamanho;y++){
            const coluna = document.createElement('td');
            if(x%2==0){//linha par
                y%2==0? coluna.style.background = '#bfbfbf' : coluna.style.background = 'sienna';
            }
            else{//linha impar
                y%2==0? coluna.style.background = 'sienna' : coluna.style.background = '#bfbfbf';
            }
            linha.appendChild(coluna);
        }
        tabuleiro.appendChild(linha);
    }
})()
