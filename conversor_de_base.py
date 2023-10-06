import math
def tipo(v):
    match v:
        case 'BINARIO':
            txt = input('Digite um numero binario: ')
            octal = binario_octal(txt)
            if octal == 'NaN':
                print('Esse numero não existe nessa base')
                return 
            decimal = binario_decimal(txt)
            hexadecimal = binario_hexadecimal(txt)
            print(f'Binario {txt}')
            print(f'Octal {octal}')
            print(f'Decimal {decimal}')
            print(f'Hexadecimal {hexadecimal}')
            return 
        
        case 'OCTAL':
            txt = input('Digite um numero octal: ')
            binario = octal_binario(txt)
            if binario == 'NaN':
                print('Esse numero não existe nessa base')
                return 
            decimal = octal_decimal(txt)
            hexadecimal = octal_hexadecimal(txt)
            print(f'Binario {binario}')
            print(f'Octal {txt}')
            print(f'Decimal {decimal}')
            print(f'Hexadecimal {hexadecimal}')
            return 
        
        case 'DECIMAL':
            txt = input('Digite um numero decimal: ')
            binario = decimal_binario(txt)
            if binario == 'NaN':
                print('Esse numero não existe nessa base')
                return 
            octal = decimal_octal(txt)
            hexadecimal = decimal_hexadecimal(txt)
            print(f'Binario {binario}')
            print(f'Octal {octal}')
            print(f'Decimal {txt}')
            print(f'Hexadecimal {hexadecimal}')
            return 
        
        case 'HEXADECIMAL':
            txt = input('Digite um numero hexadecimal: ')
            binario = hexadecimal_binario(txt)
            if binario == 'NaN':
                print('Esse numero não existe nessa base')
                return 
            octal = hexadecimal_octal(txt)
            decimal = hexadecimal_decimal(txt)
            print(f'Binario {binario}')
            print(f'Octal {octal}')
            print(f'Decimal {decimal}')
            print(f'Hexadecimal {txt}')
            return 
        case _:
            print('Opção invalida')
            return

def binario_octal(v):
    nbin = binario_decimal(v)  # binário -> decimal
    if nbin == 'NaN':
        return nbin
    nr = decimal_octal(nbin)
    return nr
def binario_hexadecimal(v):
    nbin = binario_decimal(v)  # binário -> decimal
    nr = decimal_hexadecimal(nbin)
    return nr
def binario_decimal(v):
    alf = ['0','1'] 
    num = 0
    ni = 0
    a = v[::-1]
    for i in range(len(a)):  # binário -> decimal
        if a[i] not in alf:  # analisa erro de conversão numérico
            return 'NaN'
            
        ni = int(a[i])
        num += (2 ** i) * (ni)
    return num

def octal_binario(v):
    noct = octal_decimal(v)  # octal -> decimal
    if noct == 'NaN':
        return noct
    nr = decimal_binario(noct)
    return nr
def octal_hexadecimal(v):
    noct = octal_decimal(v)  # octal -> decimal
    nr = decimal_hexadecimal(noct)
    return nr
def octal_decimal(v):
    alf = ['0','1','2','3','4','5','6','7'] 
    ni = 0
    num = 0
    a = v[::-1]
    for i in range(len(a)):  # octal -> decimal
        if a[i] not in alf:  # analisa erro de conversao numerico
            return 'NaN'
        
        ni = int(a[i])
        num += (8 ** i) * (ni)
    return num

def decimal_binario(decimal_num):
    if not str(decimal_num).isdigit():
        return 'NaN'
    decimal_num = int(decimal_num)
    binary_num = ""
    while decimal_num>0:
        binary_num = str(decimal_num % 2) + binary_num
        decimal_num = decimal_num // 2
    return binary_num
def decimal_octal(decimal_num):
    octal_num = ""
    decimal_num = int(decimal_num)
    while decimal_num > 0:
        octal_num = str(decimal_num % 8) + octal_num
        decimal_num = decimal_num // 8
    return octal_num
def decimal_hexadecimal(v):
    d = str(v)
    alf = ['A','B','C','D','E','F'] 
    alfn = [10,11,12,13,14,15]
    num = []
    n = ''
    na = 0
    i = 0
    va = True
    for x in range(len(d)):
        if d[x] in alf:  # analisa erro de conversao
            return 'Hexadecimal'
    while (va):
        num.append((int(d) % 16))
        if (num[i] > 9):
            na = alfn.index(num[i])
            n += alf[na]
        else:
            n += str(num[i])
        if (int(d) < 16):
            n = n[::-1]
            va = False
        d = math.floor(int(d) / 16)
        i += 1
    return n
    
def hexadecimal_binario(v):
    decimal_num = hexadecimal_decimal(v)
    if decimal_num == 'NaN':
        return decimal_num
    binary_num = decimal_binario(decimal_num)
    return binary_num

def hexadecimal_octal(v):
    decimal_num = hexadecimal_decimal(v)
    octal_num = decimal_octal(decimal_num)
    return octal_num
    
def hexadecimal_decimal(v):
    alf = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    decimal_num = 0
    v = v.upper()
    for i in range(len(v)):
        if v[i] not in alf:
            return 'NaN'
        decimal_num += int(v[i], 16) * (16 ** (len(v) - 1 - i))
    return decimal_num
    
texto = ''
while texto != 'SAIR':
    texto = input('Digite o tipo(binario,decimal...)/Sair para encerrar: ')
    tipo(texto.upper())
    texto = texto.upper()
    print('')
