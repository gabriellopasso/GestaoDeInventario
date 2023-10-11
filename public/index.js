import { invent } from "./external/main.js"
//import { main } from "./external/main.js"

const inventario = invent.inventario
console.log(inventario)
//console.log(main.inventario)


const botaoAtt = document.getElementById('test')
if (botaoAtt){botaoAtt.addEventListener('click', atualizarValor)}

function atualizarValor(){
    
    console.log(inventario) //.bolo[inventario.bolo.length - 1]
    const quantPao = document.getElementById('pao')
    const quantBolo = document.getElementById('bolo')
    const quantCookie = document.getElementById('cookie')
    quantPao.innerHTML += `${inventario.pao[inventario.pao.length - 1]}`
    quantBolo.innerHTML += `${inventario.bolo[inventario.bolo.length - 1]}`
    quantCookie.innerHTML += `${inventario.cookie[inventario.cookie.length - 1]}`
} 
