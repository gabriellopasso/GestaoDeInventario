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
function setMain(){
    
}
const Main = new main() 
export {Main as invent} 
//console.log(Main)
