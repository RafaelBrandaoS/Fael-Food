/* menu */

const butao_carrino = document.querySelector('#butao-carrinho')
const itens_carrinho = document.querySelector('#itens-carrinho')

butao_carrino.addEventListener('click', () => {
    if (itens_carrinho.classList.contains('carrinho-ativado')) {
        itens_carrinho.classList.remove('carrinho-ativado')
    } else {
        itens_carrinho.classList.add('carrinho-ativado')
    }
})

/* produtos */

const produtos = document.querySelectorAll('.nome-produto')
produtos.forEach(element => {
    const nome = element.innerText

    const mais = document.getElementById(nome+'-mais');
    const menos = document.getElementById(nome+'-menos');
    const quantidade = document.getElementById(nome+'-quant');
    const adicionar = document.getElementById(nome+'-adicionar');
    console.log(nome)
    console.log(mais)
    mais.addEventListener('click', () => {
        const q = +quantidade.innerText + 1
        quantidade.innerHTML = q
    })
    
    menos.addEventListener('click', () => {
        if (+quantidade.innerText > 1) {
            const q = +quantidade.innerText - 1
            quantidade.innerHTML = q
        }
    })
});

/* produtos */
