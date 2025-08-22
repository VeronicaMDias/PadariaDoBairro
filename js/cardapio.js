// Aguarda o carregamento completo do conteúdo da página antes de executar o script.
document.addEventListener('DOMContentLoaded', () => {

    // --- ATIVIDADE 1: EVENTOS BÁSICOS DE CLIQUE ---

    // 1. Botão "Adicionar ao Carrinho"
    // Seleciona todos os botões com a classe 'add-to-cart-btn'
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    // Adiciona um evento de clique para cada botão encontrado
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Produto adicionado ao carrinho!');
        });
    });


    // 2. Botão "Ver Detalhes" (Mostrar/Ocultar)
    // Seleciona todos os botões com a classe 'details-btn'
    const detailsButtons = document.querySelectorAll('.details-btn');

    detailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Encontra o elemento 'div' pai do botão (o 'card-produto')
            const productCard = button.closest('.card-produto');
            // Dentro do card, encontra o elemento com a classe 'product-details'
            const details = productCard.querySelector('.product-details');

            // Verifica se os detalhes estão visíveis ou não e alterna
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block'; // Mostra os detalhes
                button.textContent = 'Ocultar Detalhes'; // Muda o texto do botão
            } else {
                details.style.display = 'none'; // Esconde os detalhes
                button.textContent = 'Ver Detalhes'; // Volta o texto do botão para o original
            }
        });
    });


    // 3. Contador de Quantidade (+ e -)
    // Seleciona todos os 'product-quantity' que contêm os botões e o valor
    const quantityControls = document.querySelectorAll('.product-quantity');

    quantityControls.forEach(control => {
        const minusBtn = control.querySelector('.minus-btn');
        const plusBtn = control.querySelector('.plus-btn');
        const quantityValue = control.querySelector('.quantity-value');

        let quantity = 1; // Valor inicial

        // Evento para o botão de diminuir (-)
        minusBtn.addEventListener('click', () => {
            if (quantity > 1) { // A quantidade não pode ser menor que 1
                quantity--;
                quantityValue.textContent = quantity;
            }
        });

        // Evento para o botão de aumentar (+)
        plusBtn.addEventListener('click', () => {
            quantity++;
            quantityValue.textContent = quantity;
        });
    });


    // 4. Botão "Limpar Carrinho"
    // Tenta encontrar o botão no 'carrinho.html'
    const clearCartButton = document.getElementById('clear-cart-btn');

    // Só adiciona o evento se o botão existir na página atual
    if (clearCartButton) {
        clearCartButton.addEventListener('click', () => {
            // Pede confirmação ao usuário
            const userConfirmed = confirm('Tem certeza de que deseja limpar o carrinho?');

            if (userConfirmed) {
                alert('Carrinho limpo com sucesso!');
                // Aqui você adicionaria a lógica para realmente limpar os itens
            }
        });
    }

});