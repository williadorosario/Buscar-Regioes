Buscador de Estados e Capitais do Brasil - JavaScript

🌟 Funcionalidades Principais
Este script JavaScript implementa um buscador inteligente de estados e capitais brasileiros com:

Busca flexível por nome de estado ou capital

Reconhecimento sem acentos (digite "sao paulo" ou "para")

Ativação por clique ou Enter

Exibição de resultados formatados

💡 Como Funciona
Estrutura de Dados
Array estadosBrasil contendo todos os estados e suas capitais

Cada estado é um objeto com propriedades estado e capital

Funções Principais
removerAcentos(texto):

Remove acentos e caracteres especiais para facilitar a busca

Exemplo: "São Paulo" → "Sao Paulo"

buscar():

Captura o texto digitado no input

Remove acentos e padroniza para minúsculas

Procura correspondência nos estados e capitais

Exibe o resultado ou mensagem de "não encontrado"

Event Listeners
Clique no botão: Executa a busca

Tecla Enter: Também executa a busca

🛠️ Melhorias Implementadas
Busca inteligente: Encontra mesmo com erros de digitação

Case insensitive: Não importa se digita em maiúsculas ou minúsculas

Performance: Uso de Array.find() para busca eficiente

📝 Exemplo de Uso
javascript
 Ao digitar "rio" e pesquisar, mostra:
 Estado: Rio de Janeiro
 Capital: Rio de Janeiro
 
🎯 O Que Aprendi
Manipulação de arrays e objetos

Métodos de string como normalize() e replace()

Trabalho com eventos do DOM

Formatação de saída HTML dinâmica

O código está otimizado para desempenho e facilidade de manutenção.

✨ Funcionalidades
🔍 Busca flexível por estados ou capitais

🎯 Reconhecimento inteligente (funciona sem acentos e com erros de digitação)

🎥 Fundo dinâmico com vídeo em tela cheia

🌗 Efeitos visuais interativos nos botões

⚡ Resposta instantânea (por clique ou tecla Enter)

🛠️ Tecnologias Utilizadas
Tecnologia	Descrição
HTML5	Estrutura semântica da página
CSS3	Estilos avançados e efeitos visuais
JavaScript	Lógica de busca e interatividade
🎨 Design e Estilo
Fonte Oranienbaum do Google Fonts

Vídeo de fundo em tela cheia

Efeitos de hover e active nos botões

Cores contrastantes para melhor legibilidade

Layout centralizado e harmonioso

💡 Destaques do Código
Busca sem acentos: removerAcentos(texto)

Ativação por Enter: eventListener para tecla Enter

Vídeo de fundo: Configuração CSS completa

Efeitos de botão: Transformações e transições CSS

📚 O Que Aprendi
Com este projeto, desenvolvi habilidades em:

Manipulação do DOM

Trabalho com arrays e objetos em JS

Event listeners e interações

CSS avançado (flexbox, z-index, object-fit)

 
