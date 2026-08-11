// =============================================================
// AULA: Consumindo API + filter/map no DOM
// API usada: https://fakestoreapi.com  (não precisa de token)
// =============================================================

const URL_PRODUTOS = "https://fakestoreapi.com/products";
let todosOsProdutos = []

const buscarProdutos = async () => {
    const resposta = await fetch(URL_PRODUTOS) //buscar
    console.log(resposta)
    //--- todo método assíncrono, retorna com uma promessa

    const dados = await resposta.json() //pega a (resposta) e transforma em json
    console.log(dados)

    todosOsProdutos = dados
    console.log(todosOsProdutos)
    renderizarCard(todosOsProdutos)
    console.log(todosOsProdutos)

}

//criar função renderizarCard
const renderizarCard = listaProdutos => {
    const grid = document.querySelector("#grid-categoria")
    grid.innerHTML = ""  

    listaProdutos.forEach(produto => {
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
        <img src="${produto.image}" alt="${produto.title}" />
        <h3>${produto.title}</h3>
        <p class="preco">R$ ${produto.price.toFixed(2)}</p>
        <p class="avaliacao">⭐ ${produto.rating.rate} (${produto.rating.count} avaliações)</p>`

        grid.append(card)
    })
}

// -------------------------------------------------------------
// Disparo inicial — não mexer, só chama a função de fetch.
// -------------------------------------------------------------
buscarProdutos();
