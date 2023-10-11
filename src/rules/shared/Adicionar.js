export default function Adicionar(){
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
}