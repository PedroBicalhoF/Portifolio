#digite um numero e retorne o maior numero primo abaixo dele e o menor primo acima
def avaliar_menorprimo(n):
    div = 0
    for i in range(1,n+1):
        if n%i==0:
            div +=1
    if div==2:
        return True
    return False

n = int(input('Digite um numero: '))#14-       13/17
v = n
ve = v
achado_menor = False
achado_maior = False

while not achado_menor:#15#16#17
    v += 1
    me = avaliar_menorprimo(v)
    if me==True:
        print(f'Menor primo acima: {v}')
        achado_menor = True

while not achado_maior:
    ve -= 1
    ma = avaliar_menorprimo(ve)
    if ma==True:
        print(f'Menor primo acima: {ve}')
        achado_maior = True
