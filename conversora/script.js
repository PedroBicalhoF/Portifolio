const entrada = document.getElementById('EntradaPr');
const numBinario = document.getElementById('SaidaA');
const numOctal = document.getElementById('SaidaB');
const numHexadecimal = document.getElementById('SaidaC');
const numDecimal = document.getElementById('SaidaD');
const valorHexadecimal = ['A','B','C','D','E','F'] ; 
const valorDecimal = [10,11,12,13,14,15];

function upd(){//captura o select, bases
    const tipo = document.getElementById('selec');
    const opcao = tipo.options[tipo.selectedIndex];
    const op = opcao.value
    switch(op){
        case '2'://habilita botoes para calculo binario
            for(i=0;i<14;i++){
                document.getElementsByTagName('button')[i].disabled = true;
            }
            for(i=16;i>14;i--){
                document.getElementsByTagName('button')[i].disabled = false;
            }
            break;   
        case '8'://habilita botoes para calculo octal
            for(i=0;i<8;i++){
                document.getElementsByTagName('button')[i].disabled = true;
            }
            for(i=16;i>7;i--){
                document.getElementsByTagName('button')[i].disabled = false;
            }
            break;
        case '10'://habilita botoes para calculo decimal
            for(i=0;i<9;i++){
                document.getElementsByTagName('button')[i].disabled = true;
            }
            for(i=16;i>5;i--){
                document.getElementsByTagName('button')[i].disabled = false;
            }
            break;
        case '16'://habilita botoes para calculo hexadecimal
            for(i=0;i<16;i++){
                document.getElementsByTagName('button')[i].disabled = false;
            }
            break;
    }
    return op
}

let insert = (valor) => entrada.value += valor;

const clean = () => entrada.value = '';

const clc = () =>{
    entrada.value = (entrada.value).slice(0, (entrada.value).length - 1);
}

function Calculo(){//avalia a entrada principal e executa os comandos com base nisso
    const base = upd();

    if(palavra_vazia()){return}
    
    switch(base){
        case '2'://numero binario
            numBinario.value = 'Binario (₂)';
            numOctal.value = binario_octal()+' (₈)'
            numHexadecimal.value = binario_hexadecimal()+' (₁₆)';
            numDecimal.value = binario_decimal()+' (₁₀)';
            break;
        case '8'://numero octal
            numBinario.value = octal_binario()+' (₂)';
            numOctal.value = 'Octal (₈)';
            numHexadecimal.value = octal_hexadecimal()+' (₁₆)';
            numDecimal.value = octal_decimal()+' (₁₀)';
            break;
        case '10'://numero  decimal
            numBinario.value = decimal_binario(entrada.value)+' (₂)';
            numOctal.value = decimal_octal(entrada.value)+' (₈)';
            numHexadecimal.value = decimal_hexadecimal(entrada.value)+' (₁₆)';
            numDecimal.value = 'Decimal (₁₀)';
            break;
        case '16'://numero hexadecimal
            numBinario.value = hexadecimal_binario()+' (₂)';
            numOctal.value = hexadecimal_octal()+' (₈)';
            numHexadecimal.value = 'Hexadecimal (₁₆)';
            numDecimal.value = hexadecimal_decimal()+' (₁₀)';
            break;
    }
}
/*
 *  Começo do
 *  calculo de
 *  conversao de base
*/
function palavra_vazia(){
    if (!(entrada.value)){//Entrada vazia
        numBinario.value='Binario';
        numOctal.value = 'Octal';
        numHexadecimal.value = 'Hexadecimal';
        numDecimal.value = 'Decimal';
        return true
    }
    return false    
}

function binario_octal(){
    const numeroBinario = binario_decimal();//binario>decimal
    const resultado = decimal_octal(numeroBinario);
    return resultado;
}
function binario_hexadecimal(){
    const numeroBinario = binario_decimal();//binario>decimal
    const resultado = decimal_hexadecimal(numeroBinario);
    return resultado;
}
function binario_decimal(){
    let numeroDecimal = 0
    let valor = 0
    const numeroInvertido = (entrada.value).split('').reverse().join('');

    for (i=0 ; i < numeroInvertido.length ; i++){//binario>decimal
        if(valorHexadecimal.indexOf( numeroInvertido[i])>0 ){//analisa erro de conversao valorHexadecimalabetico
            entrada.value='';
            return 'Decimal';
        }
        valor = parseInt( numeroInvertido[i] );
        if(valor>1){
            entrada.value = '';
            return 'Decimal';
        }//analisa erro de conversao numerico
        numeroDecimal += (2**i)*(valor)
    }
    return numeroDecimal;
}

function octal_binario(){
    const numeroOctal = octal_decimal();//octal>decimal      
    const resultado = decimal_binario(numeroOctal);
    return resultado;
}
function octal_hexadecimal(){
    const numeroOctal = octal_decimal();//octal>decimal
    const resultado = decimal_hexadecimal(numeroOctal);
    return resultado;
}
function octal_decimal(){
    let valor = 0
    let numeroDecimal = 0
    const numeroInvertido = (entrada.value).split('').reverse().join('');

    for (i=0 ; i < numeroInvertido.length ; i++){//octal>decimal
        if(valorHexadecimal.indexOf( numeroInvertido[i]) > 0 ){//analisa erro de conversao valorHexadecimalabetico
            entrada.value='';
            return 'Decimal';
        }
        valor = parseInt( numeroInvertido[i] ); 
        if (valor>7){//analisa erro de conversao numerico
            entrada.value='';
            return 'Decimal';
        }
        numeroDecimal += (8**i)*(valor)
    }
    return numeroDecimal;
}

function decimal_binario(valor){
    let numeroDecimal = valor? valor : entrada.value;
    let resto = []
    let numeroBinario = ''
    let i = 0
    let valorFinal = true
    
    for(i=0;i<numeroDecimal.length;i++){
        if(valorHexadecimal.indexOf( numeroDecimal[i]) > 0 ){//analisa erro de conversao
            return 'Binario';
        }
    }
    while (valorFinal){
        resto[i] = ( numeroDecimal%2);
        numeroBinario += resto[i];
        if ( numeroDecimal<2 ){
            numeroBinario = numeroBinario.split('').reverse().join('');
            valorFinal = false;
            numeroDecimal = numeroDecimal*2;
        }
        numeroDecimal = Math.floor(numeroDecimal/2)
        i++
    } 
    return numeroBinario
}
function decimal_octal(valor){
    let numeroDecimal = valor? valor : entrada.value;
    let resto = []
    let numeroOctal = '' 
    let i = 0
    let valorFinal = true

    for(x=0;x<numeroDecimal.length;x++){
        if(valorHexadecimal.indexOf(numeroDecimal[x])>0){//analisa erro de conversao
            return 'Octal';
        }
    }
    while (valorFinal){
        resto[i] = (numeroDecimal%8)
        numeroOctal += resto[i]
        if (numeroDecimal<8){
            numeroOctal = numeroOctal.split('').reverse().join('')
            valorFinal = false
        }
        numeroDecimal = Math.floor(numeroDecimal/8)
        i++
    }
    return numeroOctal
}
function decimal_hexadecimal(valor){
    let numeroDecimal = valor? valor : entrada.value;
    let resto = []
    let numeroHexadecimal = ''
    let chave = 0
    let i = 0
    let valorFinal = true

    for(x=0;x<numeroDecimal.length;x++){
        if(valorHexadecimal.indexOf( numeroDecimal[x]) >0 ){//analisa erro de conversao
            entrada.value='';
            return 'Hexadecimal';
        }
    }
    while (valorFinal){
        resto[i] = ( numeroDecimal%16 );
        if (resto[i]>9){
            chave = valorDecimal.indexOf(resto[i])
            numeroHexadecimal += valorHexadecimal[chave];
        }else{
            numeroHexadecimal += resto[i];
        }
        if (numeroDecimal<16){
            numeroHexadecimal = numeroHexadecimal.split('').reverse().join('');
            valorFinal = false
        }
        numeroDecimal = Math.floor(numeroDecimal/16)
        i++
    }
    return numeroHexadecimal;
}

function hexadecimal_binario(){
    const nhex = hexadecimal_decimal();
    const nr = decimal_binario(nhex);
    return nr;
}
function hexadecimal_octal(){
    const nhex = hexadecimal_decimal()
    const noct = decimal_octal(nhex);
    return noct;
}
function hexadecimal_decimal(){
        const numeroInvertido = (entrada.value).split('').reverse(); 
        let numeroConvertido = []
        let numeroDecimal = 0
        let valor = 0
        let valorNumerico = 0     
        
        for (i=0 ; i<numeroInvertido.length ; i++){
            valorNumerico = numeroInvertido[i]
            for(x=0;x<6;x++){
                if (numeroInvertido[i]==valorHexadecimal[x]){
                        valorNumerico = valorDecimal[x]
                    }   
                }
            numeroConvertido[i] = parseInt(valorNumerico)
        }
        for(z=0;z<numeroInvertido.length;z++){
            valor = numeroConvertido[z]
            numeroDecimal += (16**z)*(valor)
        }
        return numeroDecimal
}
