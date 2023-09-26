const inventario = {
    pao: [],
    bolo: [],
    cookie: []
} 
// usar função forEach

const item = document.getElementById('itens')
item.addEventListener('change', escolha)

function escolha (){
    const opcao = item.value
    return  {opcao}
}


const botao = document.getElementById('botaoTeste')
botao.addEventListener('click', adicionar)

function adicionar(){
    const num = document.getElementById('quantidade')
    const num_value = num.valueAsNumber

    const escolhido = new escolha()
    console.log(escolhido)
    switch (escolhido.opcao){
        case 'pao':
            return inventario.pao.push(num_value)
            break
        case 'bolo':
            return inventario.bolo.push(num_value)
            break
        case 'cookie':
            return inventario.cookie.push(num_value)
            break
        default:
            window.alert('selecione uma opção valida de produto')
    } 
}

function atualizarValor(){
    //console.log(inventario.bolo[inventario.bolo.length - 1])
    const quantPao = getElementById('pao')
    const quantBolo = getElementById('bolo')
    const quantCookie = getElementById('cookie')
    quantPao.innerHTML = `${inventario.pao[inventario.pao.length - 1]}`
    quantBolo.innerHTML = `${inventario.bolo[inventario.bolo.length - 1]}`
    quantCookie.innerHTML = `${inventario.cookie[inventario.cookie.length - 1]}`
}
