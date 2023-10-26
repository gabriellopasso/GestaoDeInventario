const inventario = [
    { item: "pao", quantidade: 0 },
    { item: "bolo", quantidade: 0 },
    { item: "cookie", quantidade: 0 },
]
const item = document.getElementById("itens")
if (item) {
    item.addEventListener("change", escolha)
}

function escolha() {
    const opcao = item.value
    return { opcao }
}
const botao = document.getElementById("botaoTeste")
if (botao) {
    botao.addEventListener("click", adicionar)
}

function adicionar() {
    const num = document.getElementById("quantidade")
    const num_value = num.valueAsNumber
    //console.log(typeof num_value)
    const escolhido = new escolha()
    //console.log(escolhido)
    
    const listaDeQuantidade = inventario.map(q => q.quantidade)    
    //console.log(listaDeQuantidade)
    const somarQuantidade = (valorAnterior, valorAtual = num_value) => valorAnterior += valorAtual


    switch (escolhido.opcao) {
        case "pao":
            return listaDeQuantidade[0].reduce(somarQuantidade)
            break
        case "bolo":
            return listaDeQuantidade[1].reduce(somarQuantidade)
            break
        case "cookie":
            return listaDeQuantidade[2].reduce(somarQuantidade)
            break
        default:
            window.alert("selecione uma opção valida de produto")
    }
}

export default{inventario}
/*
export default function main() {
    const inventario = {
        pao: [1],
        bolo: [2],
        cookie: [3]
    }
    
    const observers = []

    const item = document.getElementById('itens')
    if (item){item.addEventListener('change', escolha)}

    function escolha() {
        const opcao = item.value
        return { opcao }
    }

    function subscribe(observeFunction) {
        observers.push(observeFunction)
    }

    function notifyAll(command) {
        console.log(`Notifying ${observers.length} observers`)
        for (const observeFunction of observers) {
            observeFunction(command)
        }
    }

    const botao = document.getElementById('botaoTeste')
    if (botao){    botao.addEventListener('click', adicionar)}
    function adicionar() {
    const num = document.getElementById('quantidade')
    const num_value = num.valueAsNumber

    const escolhido = new escolha()
    console.log(escolhido)
    switch (escolhido.opcao) {
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
    
    return {
        inventario,
        escolha,
        notifyAll,
        subscribe,
    }
}

const Main = new main() 
export {Main as invent} 
//console.log(Main)
*/
