npr = document.getElementById('EntradaPr');
npa = document.getElementById('SaidaA');
npb = document.getElementById('SaidaB');
npc = document.getElementById('SaidaC');
npd = document.getElementById('SaidaD');
dl = document.getElementById('del');

function upd(){//captura o select, bases
    select = document.getElementById('selec');
    opt = select.options[select.selectedIndex];
    op = opt.value
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
function insert(a){//insere dados no input principal
    npr.value += a
}
function clean(){//limpa o input principal
    npr.value = ''
}
function clc(){//deleta o ultimo caracter a direita
    a = npr.value
    npr.value = a.slice(0, a.length - 1);
}

 function Calculo(){//avalia a entrada principal e executa os comandos com base nisso
    s = npr.value;             
    numr = s.split('').join('');
    alf = ['A','B','C','D','E','F'] ; 
    alfn = [10,11,12,13,14,15];          
    op = upd();

    if(palavra_vazia()){return}
    
    switch(op){
        case '2'://numero binario
            npa.value = 'Binario (₂)';
            npb.value = binario_octal()+' (₈)'
            npc.value = binario_hexadecimal()+' (₁₆)';
            npd.value = binario_decimal()+' (₁₀)';
            break;
        case '8'://numero octal
            npa.value = octal_binario()+' (₂)';
            npb.value = 'Octal (₈)';
            npc.value = octal_hexadecimal()+' (₁₆)';
            npd.value = octal_decimal()+' (₁₀)';
            break;
        case '10'://numero  decimal
            npa.value = decimal_binario(numr)+' (₂)';
            npb.value = decimal_octal(numr)+' (₈)';
            npc.value = decimal_hexadecimal(numr)+' (₁₆)';
            npd.value = 'Decimal (₁₀)';
            break;
        case '16'://numero hexadecimal
            npa.value = hexadecimal_binario()+' (₂)';
            npb.value = hexadecimal_octal()+' (₈)';
            npc.value = 'Hexadecimal (₁₆)';
            npd.value = hexadecimal_decimal()+' (₁₀)';
            break;
    }
}
/*
    Começo do
    calculo de
    conversao de base
*/
function palavra_vazia(){
    if (!(npr.value)){//Entrada vazia
        npa.value='Binario';
        npb.value = 'Octal';
        npc.value = 'Hexadecimal';
        npd.value = 'Decimal';
        return true
    }
    return false    
}

function binario_octal(){
    const nbin = binario_decimal();//binario>decimal
    const nr = decimal_octal(nbin);
    return nr;
}
function binario_hexadecimal(){
    const nbin = binario_decimal();//binario>decimal
    const nr = decimal_hexadecimal(nbin);
    return nr;
}
function binario_decimal(){
    let num = 0
    let ni = 0
    const a = s.split('').reverse().join('');
    for (i=0 ; i<a.length ; i++){//binario>decimal
        if(alf.indexOf(a[i])>0){//analisa erro de conversao alfabetico
            npr.value='';
            return 'Decimal';
        }
        ni = parseInt(a[i])
        if(ni>1){
            npr.value = '';
            return 'Decimal';
        }//analisa erro de conversao numerico
        num += (2**i)*(ni)
    }
    return num;
}

function octal_binario(){
    const noct = octal_decimal();//octal>decimal      
    const nr = decimal_binario(noct);
    return nr;
}
function octal_hexadecimal(){
    const noct = octal_decimal();//octal>decimal
    const nr = decimal_hexadecimal(noct);
    return nr;
}
function octal_decimal(){
    let ni = 0
    let num = 0
    const a = s.split('').reverse().join('');
    for (i=0 ; i<a.length ; i++){//octal>decimal
        if(alf.indexOf(a[i])>0){//analisa erro de conversao alfabetico
            npr.value='';
            return 'Decimal';
        }
        ni = parseInt(a[i]); 
        if (ni>7){//analisa erro de conversao numerico
            npr.value='';
            return 'Decimal';
        }
        num += (8**i)*(ni)
    }
    return num;
}

function decimal_binario(v){
    let n = v;
    let d = []
    let num = ''
    let i = 0
    let va = true
    
    for(i=0;i<n.length;i++){
        if(alf.indexOf(n[i])>0){//analisa erro de conversao
            return 'Binario';
        }
    }
    while (va){
        d[i] = (n%2);
        num += d[i];
        console.log(d)
        if (n<2){
            num = num.split('').reverse().join('');
            va = false
            n = n*2
        }
        n = Math.floor(n/2)
        i++
    } 
    return num
}
function decimal_octal(v){
    let d = v
    let num = []
    let n = '' 
    let i = 0
    let va = true
    for(i=0;i<d.length;i++){
        if(alf.indexOf(d[i])>0){//analisa erro de conversao
            return 'Octal';
        }
    }
    while (va){
        num[i] = (d%8)
        n += num[i]
        if (d<8){
            n = n.split('').reverse().join('')
            va = false
        }
        d = Math.floor(d/8)
        i++
    }
    return n
}
function decimal_hexadecimal(v){
    let d = v
    let num = []
    let n = ''
    let na = 0
    let i = 0
    let va = true
    for(i=0;i<d.length;i++){
        if(alf.indexOf(d[i])>0){//analisa erro de conversao
            npr.value='';
            return 'Hexadecimal';
        }
    }
    while (va){
        num[i] = (d%16);
        if (num[i]>9){
            na = alfn.indexOf(num[i])
            n += alf[na]
        }else{
            n += num[i];
        }
        if (d<16){
            n = n.split('').reverse().join('');
            va = false
        }
        d = Math.floor(d/16)
        i++
    }
    return n
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
        const a = s.split('').reverse(); 
        let n = []
        let num = 0
        let ni = 0
        let ai = 0     
        for (i=0 ; i<a.length ; i++){
            ai = a[i]
            for(x=0;x<6;x++){
                if (a[i]==alf[x]){
                        ai = alfn[x]
                    }   
                }
            n[i] = parseInt(ai)
        }
        for(z=0;z<a.length;z++){
            ni = n[z]
            num += (16**z)*(ni)
        }
        return num
}
