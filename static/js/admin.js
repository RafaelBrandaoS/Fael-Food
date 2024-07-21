const atualizaStatus = document.getElementsByClassName('produtos-status')

for(var i = 0; i < atualizaStatus.length; i++) {
    atualizaStatus[i].addEventListener('click', enviarDadosBackEnd)
}

function enviarDadosBackEnd(event) {
    const butao = event.target
    const divProduto = butao.parentElement.parentElement
    const nomeProduto = divProduto.getElementsByClassName('nome-produto')[0].innerText
    console.log(nomeProduto)
}
