// Seleciona a barra de pesquisa e o container de produtos
const searchBar = document.getElementById('search-bar');
const produtos = document.querySelectorAll('.produto');

// Função de filtro
searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();

    produtos.forEach(produto => {
        const nomeProduto = produto.dataset.nome.toLowerCase();

        // Mostra ou esconde o produto com base na pesquisa
        if (nomeProduto.includes(query)) {
            produto.style.display = 'block'; // Exibe
        } else {
            produto.style.display = 'none'; // Oculta
        }
    });
});
