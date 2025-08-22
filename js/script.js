//Pratica 9
console.log("1 Atividade")
//---Informações da padaria---

const nomePadaria = "Padaria MD";
const enderecoPadaria = "Rua São Paulo, 333";
const telefonePadaria = "11 99123-4567";

console.log("---Informação da Padaria---");
console.log("Nome da Padaria:", nomePadaria);
console.log("Endereço da Padaria:", enderecoPadaria);
console.log("Telefone da Padaria:", telefonePadaria);

//---Categorias de Produtos---

const categoria = ["Pães", "Bolos", "Salgados", "Bebidas", "Frios"];

console.log("--- Categorias de Produtos ---");
console.log(categoria);

//Objetos

let produto1 = {
    nome: "Pão Francês",
    preco: 16.00,
    categoria: "Pães",
    estoque: 50,
};
let produto2 = {
    nome: "Pão de Queijo",
    preco: 5.00,
    categoria: "Pães",
    estoque: 100
};
let produto3 = {
    nome: "Pão Trancado",
    preco: 13.00,
    categoria: "Pães",
    estoque: 75
};
let produto4 = {
    nome: "Bolo com Cobertura",
    preco: 30.00,
    categoria: "Bolos",
    estoque: 30
};
let produto5 = {
    nome: "Pães Doces",
    preco: 5.00,
    categoria: "Pães",
    estoque: 150
};
let produto6 = {
    nome: "Suco Naturais",
    preco: 12.00,
    categoria: "Bebidas",
    estoque: 200
};
let produto7 = {
    nome: "Frios e Embutidos",
    preco: 20.00,
    categoria: "Frios",
    estoque: 20
};
let produto8 = {
    nome: "Pão Sovado",
    preco: 15.00,
    categoria: "Pães",
    estoque: 40
};
let produto9 = {
    nome: "Bolos Caseiros",
    preco: 35.00,
    categoria: "Bolos",
    estoque: 25
};
let produto10 = {
    nome: "Pizza Grande",
    preco: 42.00,
    categoria: "Salgados",
    estoque: 10
};

let produtos = [produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8, produto9, produto10];
// console.log(produtos); // Opcional: Descomente se quiser ver a lista completa de produtos

//---2 Atividade---

console.log("\n--- 2 Atividade ---")

let cliente1 = {
    nome: "Rosa maria",
    endereco: "Rua Eduardo Barbosa, 45",
    telefone: "11 98765-4321",
    pontosDeFidelidade: 0
};

// --- Início da Simulação de Compra ---

console.log("\n--- Simulação: Pedido e Compra (4 Bolos com Desconto) ---");

// Dados da nossa simulação de compra
const produtoComprado = produto4; // Usando o Bolo com Cobertura
const quantidadeComprada = 4;     // Simulando a compra de 4 bolos para aplicar o desconto

// 1. Criando o objeto 'pedido' com as informações básicas
let pedido = {
    nomeDoCliente: cliente1.nome,
    quantidade: quantidadeComprada,
    valorDoProduto: produtoComprado.preco,
    // Calculando o valor do pedido (subtotal)
    valorTotalDoPedido: produtoComprado.preco * quantidadeComprada
};

console.log("\n--- Objeto Pedido (Simples) ---");
console.log(pedido);

// 2. Criando o objeto 'Compra' que conterá todos os detalhes financeiros
let compra = {
    nomeDoCliente: cliente1.nome,
    quantidade: quantidadeComprada,
    valorDoProduto: produtoComprado.preco,
    subtotal: pedido.valorTotalDoPedido,
    valorFinal: 0,
    valorPago: 120.00, // Cliente pagou com R$ 120,00
    troco: 0
};

// 3. Calculando o desconto. Com 4 unidades, o desconto de 3% será aplicado.
let valorDesconto = 0;
if (compra.quantidade >= 10) {
    valorDesconto = compra.subtotal * 0.15;
} else if (compra.quantidade >= 5) {
    valorDesconto = compra.subtotal * 0.10;
} else if (compra.quantidade >= 3) {
    valorDesconto = compra.subtotal * 0.03; // Esta condição agora é verdadeira
}

// 4. Calculando o 'valorFinal' e o 'troco' e atualizando o objeto 'Compra'
compra.valorFinal = compra.subtotal - valorDesconto;
compra.troco = compra.valorPago - compra.valorFinal;

console.log("\n--- Objeto Compra (Completo) ---");
console.log(compra);
console.log(`Desconto aplicado (3%): R$ ${valorDesconto.toFixed(2)}`);

// 5. Adicionando 1 ponto de fidelidade ao cliente pela compra
cliente1.pontosDeFidelidade = cliente1.pontosDeFidelidade + 1;

console.log("\n--- Atualização de Pontos de Fidelidade ---");
console.log(`O cliente ${cliente1.nome} agora tem ${cliente1.pontosDeFidelidade} ponto(s) de fidelidade.`);

// 6. Criando a função para converter Real para Euro
function converterRealParaEuro(valorEmReal) {
    const taxaCambioEuro = 5.50;
    const valorConvertido = valorEmReal / taxaCambioEuro;
    return valorConvertido;
}

// 7. Usando a função para converter o valor final da compra
let valorFinalEmEuro = converterRealParaEuro(compra.valorFinal);

console.log("\n--- Conversão de Moeda com Função ---");
console.log(`O valor final da compra em Euros é: € ${valorFinalEmEuro.toFixed(2)}`);


// --- Atividade 3 ---

console.log("\n--- 3 Atividade: Manipulação de Dados ---");

// 1. Formatar nomes com a primeira letra maiúscula
const nomeClienteOriginal = "rosa maria";
const nomeClienteFormatado = nomeClienteOriginal.charAt(0).toUpperCase() + nomeClienteOriginal.slice(1);
console.log(`Nome original: "${nomeClienteOriginal}" | Nome formatado: "${nomeClienteFormatado}"`);

// 2. Formatar valores como R$ 42,00
const precoPizza = produto10.preco;
const precoPizzaFormatado = precoPizza.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
console.log(`Preço da Pizza sem formatação: ${precoPizza} | Preço formatado: ${precoPizzaFormatado}`);

/* --- Bloco de código antigo desativado para fins de estudo ---
// 3. Criar códigos de produtos (ex: PAE001)
const idDoProduto = 1;
const categoriaDoProduto = produto1.categoria;
const prefixoCodigo = categoriaDoProduto.substring(0, 3).toUpperCase();
let numeroCodigo;
if (idDoProduto < 10) {
    numeroCodigo = "00" + idDoProduto;
} else if (idDoProduto < 100) {
    numeroCodigo = "0" + idDoProduto;
} else {
    numeroCodigo = idDoProduto;
}
const codigoProdutoFinal = prefixoCodigo + numeroCodigo;
console.log(`Código gerado para o ${produto1.nome}: ${codigoProdutoFinal}`);
*/

// 4. Formatar data e hora dos pedidos
const dataAtual = new Date();
const dataHoraFormatada = dataAtual.toLocaleString('pt-BR');
console.log(`Data e hora atuais formatadas: ${dataHoraFormatada}`);

// --- Gerando Códigos para TODOS os Produtos (usando um laço for) ---

console.log("\n--- Gerando Códigos de Produto em Lote ---");

for (let i = 0; i < produtos.length; i++) {
    const produtoAtual = produtos[i];
    const idDoProduto = i + 1;
    const categoriaDoProduto = produtoAtual.categoria;
    const prefixoCodigo = categoriaDoProduto.substring(0, 3).toUpperCase();
    
    let numeroCodigo;
    if (idDoProduto < 10) {
        numeroCodigo = "00" + idDoProduto;
    } else if (idDoProduto < 100) {
        numeroCodigo = "0" + idDoProduto;
    } else {
        numeroCodigo = idDoProduto;
    }

    const codigoGerado = prefixoCodigo + numeroCodigo;
    console.log(`Produto: ${produtoAtual.nome} | Código Gerado: ${codigoGerado}`);
}

// --- Atividade 4 ---

console.log("\n--- 4 Atividade: Arrays e Listas Dinâmicas (Carrinho de Compras) ---");

let carrinhoDeCompras = [];

function adicionarAoCarrinho(produto, quantidade) {
    carrinhoDeCompras.push({ produto: produto, quantidade: quantidade });
    console.log(`"${produto.nome}" (x${quantidade}) foi adicionado ao carrinho.`);
}

function removerDoCarrinho(nomeDoProduto) {
    let indiceParaRemover = -1;
    for (let i = 0; i < carrinhoDeCompras.length; i++) {
        if (carrinhoDeCompras[i].produto.nome === nomeDoProduto) {
            indiceParaRemover = i;
            break;
        }
    }
    
    if (indiceParaRemover !== -1) {
        carrinhoDeCompras.splice(indiceParaRemover, 1);
        console.log(`"${nomeDoProduto}" foi removido do carrinho.`);
    } else {
        console.log(`Produto "${nomeDoProduto}" não encontrado no carrinho.`);
    }
}

function visualizarCarrinho() {
    console.log("\n--- Itens no Carrinho Atualmente ---");
    if (carrinhoDeCompras.length === 0) {
        console.log("O carrinho está vazio.");
    } else {
        carrinhoDeCompras.forEach(function(item) {
            const subtotalItem = item.produto.preco * item.quantidade;
            const subtotalFormatado = subtotalItem.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            console.log(`- Item: ${item.produto.nome} | Quantidade: ${item.quantidade} | Subtotal: ${subtotalFormatado}`);
        });
    }
}

console.log("\n--- Demonstração do Carrinho ---");
visualizarCarrinho();
adicionarAoCarrinho(produto6, 2);
adicionarAoCarrinho(produto2, 5);
visualizarCarrinho();
removerDoCarrinho("Suco Naturais");
visualizarCarrinho();

// --- Atividade 5 ---

function registrarPedidoFinal(cliente, carrinho) {
    console.log("\n--- Registrando Pedido Final ---");
    let totalDoPedido = 0;
    carrinho.forEach(function(item) {
        totalDoPedido += item.produto.preco * item.quantidade;
    });

    const pedidoCompleto = {
        id: "PED" + Math.floor(Math.random() * 1000),
        data: new Date().toLocaleString('pt-BR'),
        cliente: cliente,
        itens: carrinho,
        total: totalDoPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        status: "Concluído"
    };
    return pedidoCompleto;
}

const pedidoFinal = registrarPedidoFinal(cliente1, carrinhoDeCompras);
console.log("\n--- Objeto do Pedido Final Gerado ---");
console.log(pedidoFinal);
console.log("\n--- Acessando Dados Aninhados ---");
console.log("Nome do cliente no pedido final:", pedidoFinal.cliente.nome);
console.log("Endereço para entrega:", pedidoFinal.cliente.endereco);
console.log("Primeiro item da lista de compras:", pedidoFinal.itens[0].produto.nome);
console.log("Quantidade do primeiro item:", pedidoFinal.itens[0].quantidade);


// ==================================================================
//          INÍCIO DA PRÁTICA 10 (ENCONTRO 26)
// ==================================================================

// --- Atividade 1: Funções Básicas ---
console.log("\n\n--- PRÁTICA 10 - ATIVIDADE 1: FUNÇÕES BÁSICAS ---");

function exibirBoasVindas() {
    console.log("Bem-vindo(a) ao sistema da Padaria MD!");
}

function calcularSubtotal(preco, quantidade) {
    const subtotal = preco * quantidade;
    console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
}

function aplicarDesconto(valor, percentual) {
    const valorDoDesconto = valor * (percentual / 100);
    const valorFinal = valor - valorDoDesconto;
    console.log(`Desconto de ${percentual}% aplicado. Valor com desconto: R$ ${valorFinal.toFixed(2)}`);
}

function calcularTaxaDeEntrega(distanciaKm) {
    let taxa = 0;
    if (distanciaKm <= 5) {
        taxa = 5.00;
    } else if (distanciaKm <= 10) {
        taxa = 8.00;
    } else {
        taxa = 12.00;
    }
    console.log(`Taxa de entrega para ${distanciaKm}km: R$ ${taxa.toFixed(2)}`);
}

console.log("\n--- Demonstração das Funções Básicas ---");
exibirBoasVindas();
calcularSubtotal(produto4.preco, 4);
aplicarDesconto(120, 3);
calcularTaxaDeEntrega(8);

// --- Atividade 2: Funções com Retorno ---
console.log("\n--- PRÁTICA 10 - ATIVIDADE 2: FUNÇÕES COM RETORNO ---");

function calcularSubtotalComRetorno(preco, quantidade) {
    const subtotal = preco * quantidade;
    return subtotal;
}

function calcularImposto(subtotal) {
    const imposto = subtotal * 0.08;
    return imposto;
}

function calcularTotalPedido(subtotal, imposto, taxaEntrega) {
    return subtotal + imposto + taxaEntrega;
}

function verificarFreteGratis(valorPedido) {
    return valorPedido > 50 ? "Frete Grátis Disponível!" : "Sem frete grátis.";
}

console.log("\n--- Demonstração das Funções com Retorno ---");
const subtotalDoPedido = calcularSubtotalComRetorno(produto9.preco, 2);
const impostoDoPedido = calcularImposto(subtotalDoPedido);
const taxaEntregaDoPedido = 10.00;
const totalDoPedido = calcularTotalPedido(subtotalDoPedido, impostoDoPedido, taxaEntregaDoPedido);
const statusFrete = verificarFreteGratis(subtotalDoPedido);
console.log(`Subtotal: R$ ${subtotalDoPedido.toFixed(2)}`);
console.log(`Imposto (8%): R$ ${impostoDoPedido.toFixed(2)}`);
console.log(`Total a Pagar: R$ ${totalDoPedido.toFixed(2)}`);
console.log(`Status do Frete: ${statusFrete}`);

// --- Atividade 3: Arrow Functions ---
console.log("\n--- PRÁTICA 10 - ATIVIDADE 3: ARROW FUNCTIONS ---");

const exibirBoasVindasArrow = () => console.log("Bem-vindo(a) à Padaria MD! (Arrow version)");

const calcularSubtotalArrow = (preco, quantidade) => preco * quantidade;

const verificarFreteGratisArrow = (valorPedido) => valorPedido > 50 ? "Frete Grátis!" : "Sem frete grátis.";

console.log("\n--- Demonstração das Arrow Functions ---");
exibirBoasVindasArrow();
const subtotalComArrow = calcularSubtotalArrow(produto10.preco, 1);
const statusFreteComArrow = verificarFreteGratisArrow(subtotalComArrow);
console.log(`Subtotal da Pizza: R$ ${subtotalComArrow.toFixed(2)}`);
console.log(`Status do Frete: ${statusFreteComArrow}`);


  //=======================================================//
 //               PRATICA 11 - ENCONTRO 28                //
//=======================================================//

// ==================================================================
//          INÍCIO DO CÓDIGO DA PRÁTICA 11 - ATIVIDADE 1
//          (Eventos de Clique e Interação com a Página)
// ==================================================================

/*
 * ===================================================================
 * FUNÇÃO REUTILIZÁVEL PARA O BOTÃO "VER DETALHES"
 * ===================================================================
 * Esta função serve como um "molde" para criar a interatividade de 
 * mostrar/ocultar os detalhes de qualquer produto.
 */
function configurarBotaoDetalhes(idBotao, idDetalhes) {
    const botao = document.getElementById(idBotao);
    const detalhes = document.getElementById(idDetalhes);
  
    // Se o botão ou a div de detalhes não for encontrada no HTML, a função para.
    if (!botao || !detalhes) {
      return;
    }
  
    // Adiciona um "ouvinte" que espera por um clique no botão.
    botao.addEventListener("click", function() {
      // Verifica se a div de detalhes está escondida
      if (detalhes.style.display === "none") {
        // Se estiver, mostra a div
        detalhes.style.display = "block";
        botao.textContent = "Ocultar Detalhes"; // Muda o texto do botão
      } else {
        // Se não, esconde a div
        detalhes.style.display = "none";
        botao.textContent = "Ver Detalhes"; // Volta o texto original
      }
    });
  }
  
  // --- ATIVANDO A FUNÇÃO PARA CADA PRODUTO DO CARDÁPIO ---
  // Aqui nós "ligamos" a função para cada um dos produtos da sua página HTML.
  configurarBotaoDetalhes("btn-detalhes-paofrances", "detalhes-paofrances");
  configurarBotaoDetalhes("btn-detalhes-paodequeijo", "detalhes-paodequeijo");
  configurarBotaoDetalhes("btn-detalhes-catarina", "detalhes-catarina");
  configurarBotaoDetalhes("btn-detalhes-paosovado", "detalhes-paosovado");
  configurarBotaoDetalhes("btn-detalhes-paotrancado", "detalhes-paotrancado");
  configurarBotaoDetalhes("btn-detalhes-carolinas", "detalhes-carolinas");
  configurarBotaoDetalhes("btn-detalhes-bolocaseiro", "detalhes-bolocaseiro");
  configurarBotaoDetalhes("btn-detalhes-bolocobertura", "detalhes-bolocobertura");
  configurarBotaoDetalhes("btn-detalhes-pizza", "detalhes-pizza");
  configurarBotaoDetalhes("btn-detalhes-suco", "detalhes-suco");
  configurarBotaoDetalhes("btn-detalhes-cafe", "detalhes-cafe");
  
  
  // ######################################################
// ### INÍCIO DA PRÁTICA 11 - VERSÃO INTELIGENTE E FINAL ###
// ######################################################

// --- LÓGICA DO CONTADOR DE QUANTIDADE (FUNCIONA PARA TODOS) ---
const todosBotoesAumentar = document.querySelectorAll('.btn-aumentar');
todosBotoesAumentar.forEach(botao => {
    botao.addEventListener('click', function(event) {
        const produtoDiv = event.target.closest('.product-list-item');
        const quantidadeSpan = produtoDiv.querySelector('.quantidade');
        let quantidadeAtual = parseInt(quantidadeSpan.textContent);
        quantidadeAtual++;
        quantidadeSpan.textContent = quantidadeAtual;
    });
});

const todosBotoesDiminuir = document.querySelectorAll('.btn-diminuir');
todosBotoesDiminuir.forEach(botao => {
    botao.addEventListener('click', function(event) {
        const produtoDiv = event.target.closest('.product-list-item');
        const quantidadeSpan = produtoDiv.querySelector('.quantidade');
        let quantidadeAtual = parseInt(quantidadeSpan.textContent);
        if (quantidadeAtual > 1) {
            quantidadeAtual--;
            quantidadeSpan.textContent = quantidadeAtual;
        }
    });
});

// --- LÓGICA DE VER/OCULTAR DETALHES (FUNCIONA PARA TODOS) ---
const todosBotoesDetalhes = document.querySelectorAll('.btn-detalhes');
todosBotoesDetalhes.forEach(botao => {
    botao.addEventListener('click', function(event) {
        const produtoDiv = event.target.closest('.product-list-item');
        const detalhesDiv = produtoDiv.querySelector('.detalhes-produto');
        if (detalhesDiv.style.display === 'none' || detalhesDiv.style.display === '') {
            detalhesDiv.style.display = 'block';
            botao.textContent = 'Ocultar Detalhes';
        } else {
            detalhesDiv.style.display = 'none';
            botao.textContent = 'Ver Detalhes';
        }
    });
});

// --- LÓGICA DE ADICIONAR AO CARRINHO (FUNCIONA PARA TODOS) ---
const todosBotoesAdicionar = document.querySelectorAll('.btn-adicionar');
todosBotoesAdicionar.forEach(botao => {
    botao.addEventListener('click', function(event) {
        const produtoDiv = event.target.closest('.product-list-item');
        const nomeProduto = produtoDiv.querySelector('h3').textContent;
        alert(nomeProduto + ' foi adicionado ao carrinho!');
    });
});

// --- LÓGICA GERAL DA PÁGINA (BOTÃO LIMPAR) ---
const btnLimpar = document.getElementById('btn-limpar-carrinho');
if (btnLimpar) {
    btnLimpar.addEventListener('click', function() {
        const confirmacao = confirm('Você tem certeza que deseja limpar o carrinho?');
        if (confirmacao) {
            alert('Carrinho limpo com sucesso!');
        }
    });
}