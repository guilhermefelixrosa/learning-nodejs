function a(){
    console.log('Executando a')
}

function b(){
    console.log('Executando b')
}

function c(){
    console.log('Executando c')
    a()
    b()
}

c()

//Garante que a sequência das execuções sejam respeitadas