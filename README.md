Padaria MD - Website Institucional
Bem-vindo ao repositório do site institucional da Padaria MD! Este é um projeto front-end que apresenta a padaria, seus produtos e diferenciais. O projeto foi criado com foco em um design clássico e acolhedor, refletindo a tradição de 20 anos do estabelecimento, e inclui um script de simulação de lógica de negócios em JavaScript.

📜 Índice
Visão Geral do Projeto

✨ Funcionalidades Detalhadas

🚀 Tecnologias Utilizadas

🎨 Estrutura de Estilos e Design

🔧 Como Executar o Projeto

🌟 Próximos Passos

✒️ Autor

📖 Visão Geral do Projeto
O site é apresentado em um estilo de página única (one-page), utilizando links de navegação para rolar suavemente até as seções correspondentes. A identidade visual é consistente, com uma paleta de cores em tons de marrom e bege que remetem a um ambiente aconchegante de panificação artesanal.

Além da interface visual, o projeto inclui um arquivo script.js que simula, no console do navegador, diversas operações da padaria, como gestão de produtos, simulação de compras, e formatação de dados, demonstrando conceitos fundamentais de JavaScript.

✨ Funcionalidades Detalhadas
O projeto implementa diversas funcionalidades modernas de front-end:

Layout Estrutural com CSS Grid: A estrutura principal da página (header, main, footer) é organizada de forma robusta e semântica utilizando CSS Grid.

Componentes Flexíveis com Flexbox: Flexbox é usado para alinhar de forma eficiente os componentes internos, como o menu de navegação, galerias de produtos e o rodapé.

Navegação Fixa e Interativa: Um menu no topo da página (position: fixed) acompanha o usuário durante a rolagem, permitindo acesso rápido a todas as seções.

Cardápio com Componentes Dinâmicos: Os produtos são exibidos em cards com hover effects e "badges" de "Promoção" e "Novidade" para destacar itens especiais.

Conteúdo Multimídia: A página incorpora um vídeo institucional hospedado localmente (<video>) e um vídeo do YouTube (<iframe>).

Elementos de UI Flutuantes: Botões de "Voltar ao Topo" e um link direto para o WhatsApp melhoram a usabilidade e o engajamento.

Simulação de Lógica de Negócios (via Console): O arquivo script.js executa uma série de operações que são exibidas no console do desenvolvedor, incluindo:

Gerenciamento de Dados: Criação de produtos, clientes e categorias usando objetos e arrays.

Simulação de Compra: Cálculo de subtotal, aplicação de descontos com base na quantidade e cálculo de troco.

Formatação de Dados: Conversão de valores numéricos para o formato de moeda (BRL e EUR), formatação de datas e capitalização de nomes.

Carrinho de Compras Dinâmico: Funções para adicionar, remover e visualizar itens em um carrinho de compras.

Geração de Relatórios: Criação de um objeto de pedido final consolidando todas as informações da compra.

🚀 Tecnologias Utilizadas
Este projeto foi construído utilizando tecnologias web fundamentais:

HTML5: Para a estruturação semântica de todo o conteúdo do site.

CSS3: Para estilização completa, layout e interatividade, com destaque para:

CSS Grid: Para o layout principal da página.

Flexbox: Para alinhamento de componentes internos.

CSS Variables: Para manter a consistência do tema (ex: var(--cor-fundo)).

Positioning: Uso de fixed e absolute para a barra de navegação e badges.

Pseudo-classes: Uso extensivo de :hover, :focus, :active, e :nth-child(even) para interatividade e legibilidade.

JavaScript (ES6+): Utilizado para simular a lógica de negócios da padaria no console do navegador, demonstrando conceitos como:

Estruturas de Dados: Objetos e Arrays para modelar a realidade.

Funções: Declaração de funções tradicionais, funções com retorno e Arrow Functions.

Controle de Fluxo: Uso de if/else if e laços for.

Manipulação de Dados: Métodos de String, Number e Date.

🎨 Estrutura de Estilos e Design
O arquivo style.css é organizado de forma clara, com seções comentadas que facilitam a manutenção. A fonte principal utilizada é a 'Cinzel', uma fonte serifada que confere um ar de elegância e tradição ao design. A paleta de cores foca em tons terrosos para criar uma atmosfera acolhedora.

🔧 Como Executar o Projeto
Para visualizar este projeto, basta seguir os passos:

Clone ou baixe o repositório para o seu computador.

Certifique-se de que a estrutura de pastas está correta, com index.html na raiz e os outros arquivos em suas respectivas pastas (css/, js/, assets/).

Abra o arquivo index.html em qualquer navegador de internet (Google Chrome, Firefox, etc.).

Importante: Abra o console do desenvolvedor (pressione F12) para ver a simulação do script.js em ação.

🌟 Próximos Passos
Como forma de aprimorar o projeto, as seguintes funcionalidades podem ser implementadas:

Responsividade: Adicionar Media Queries no CSS para garantir que o site se adapte perfeitamente a telas de tablets e celulares.

Interatividade com o DOM: Utilizar o JavaScript para manipular o HTML e o CSS diretamente, tornando a página interativa (ex: adicionar itens ao carrinho visualmente, em vez de apenas no console).

✒️ Autor
Projeto desenvolvido por Verônica Dias.