const butao_carrino = document.querySelector('#butao-carrinho')
const itens_carrinho = document.querySelector('#itens-carrinho')

butao_carrino.addEventListener('click', () => {
    if (itens_carrinho.classList.contains('carrinho-ativado')) {
        itens_carrinho.classList.remove('carrinho-ativado')
    } else {
        itens_carrinho.classList.add('carrinho-ativado')
    }
})
