export default function EscolhaItem () {
    const item = document.getElementById('itens')
    if (item){item.addEventListener('change', escolha)}

    function escolha(){
        const opcao = item.value
        return { opcao }
    }

}