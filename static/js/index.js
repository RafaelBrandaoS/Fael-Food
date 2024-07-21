if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", eventos)
} else {
    eventos()
}

function eventos() {
    /* menu */

    const butao_carrino = document.querySelector('#butao-carrinho')
    const itens_carrinho = document.querySelector('#itens-carrinho')

    butao_carrino.addEventListener('click', () => {
        if (itens_carrinho.classList.contains('carrinho-ativado')) {
            itens_carrinho.classList.remove('carrinho-ativado')
        } else {
            itens_carrinho.classList.add('carrinho-ativado')
        }
    });

    /* produtos */

    const btnAdicionar = document.getElementsByClassName('carrinho-add')
    for (var i = 0; i < btnAdicionar.length; i++) {
        btnAdicionar[i].addEventListener("click", adicionarAoCarrinho)
    }
    
    const btnRemover = document.getElementsByClassName('btn-remover')
    for (var i = 0; i < btnRemover.length; i++) {
        btnRemover[i].addEventListener("click", removerProduto)
    }

    const qtdProduto = document.getElementsByClassName('qtd-produto')
    for (var i = 0; i < qtdProduto.length; i++) {
        qtdProduto[i].addEventListener("change", atualizarTotal)
    }

}


function atualizarTotal() {
    let totalPedido = 0
    let totItens = 0
    const produtosNoCarrinho = document.getElementsByClassName('produto-carrinho')
    for (var i = 0; i < produtosNoCarrinho.length; i++) {
        const precoProduto = produtosNoCarrinho[i].getElementsByClassName('preco-produto-carrinho')[0].innerText
        const qtdProduto = produtosNoCarrinho[i].getElementsByClassName('qtd-produto')[0].value

        totItens += +qtdProduto

        totalPedido += precoProduto * qtdProduto
    }
    totalPedido = totalPedido.toFixed(2)
    document.getElementById('tota-pedido').innerText = totalPedido
    document.getElementById('qtd-itens').innerText = totItens
}

function adicionarAoCarrinho(event) {
    const butao = event.target
    const dadosProduto = butao.parentElement.parentElement
    const nome = dadosProduto.getElementsByClassName("nome-produto")[0].innerText
    const tamanho = dadosProduto.getElementsByClassName("tamanho-produto")[0].innerText
    const preco = dadosProduto.getElementsByClassName("preco-produto")[0].innerText

    const nomeProdutoCarrinho = document.getElementsByClassName('nome-produto-carrinho')
    for (var i = 0; i < nomeProdutoCarrinho.length; i++) {
        if (nomeProdutoCarrinho[i].innerText == nome) {
            nomeProdutoCarrinho[i].parentElement.getElementsByClassName('qtd-produto')[0].value++
            atualizarTotal()
            return
        }
    }

    let novoProduto = document.createElement("div")
    novoProduto.classList.add("item-n-carrinho")

    novoProduto.innerHTML = 
    `
        <div class="produto-carrinho">
            <div>
                <h4 class="nome-produto-carrinho">${nome}</h4>
                <p class="tamanho-produto-carrinho">${tamanho}</p>
                <p>Quantidade: <input type="number" name="qtd" value="1" min="1" class="qtd-produto"></p>
                <p>R$ <span class="preco-produto-carrinho">${preco}</span></p>
            </div>
            <button class="btn-remover">remover</button>
        </div>
    `

    const containerCarrinho = document.getElementById("container-carrinho")
    containerCarrinho.append(novoProduto)
    atualizarTotal()
    novoProduto.getElementsByClassName('qtd-produto')[0].addEventListener("change", atualizarTotal)
    novoProduto.getElementsByClassName('btn-remover')[0].addEventListener("click", removerProduto)
}

function removerProduto(event) {
    event.target.parentElement.remove()
    atualizarTotal()
}

/* produtos */
