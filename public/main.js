const inventario = {
    pao: [],
    bolo: [],
    cookie: []
} // usar função forEach

const item = document.getElementById('itens')
item.addEventListener('change', escolha)
const botao = document.getElementById('botaoTeste')
botao.addEventListener('click', adicionar)

function escolha (){
    //console.log(item.value)
    
    const opcao = item.value
    return  {opcao}
}

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
    atualizarValor()   
}

function atualizarValor(){
    console.log(inventario.bolo[inventario.bolo.length - 1])
}


