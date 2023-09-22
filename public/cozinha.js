const inventario = {}
let botao = document.getElementById('botaoTeste')
botao.addEventListener('click', adicionar)


function adicionar(){
    let num = document.getElementById('not')
    let num_value = num.valueAsNumber
    inventario.num_value = num_value
    return inventario
    //if (inventario.length() > 1) console.log(inventario)
}

/* () => {
        const num = document.getElementById('not')
        return inventario.num
    } */