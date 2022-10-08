# Desafio Cielo

O projeto foi criado utilizando a versão 13.1.0 global do Angular.
O projeto consiste em um dashboard analítico com informações de lançamentos de contas do périodo de 26/05/2021 à 26/05/2021. Os dados são exibidos todos em uma tabela com possibilidade de exportar tais dados para uma planilha de excel, dando mais autonomia para que o usuário possa manipular os dados.

## Instruções para rodar o projeto

Passo 1:
Rode o comando `npm i` ou `npm i --force`, ambos irão instalar as dependências do projeto.

Passo 2:
rode o comando `ng server` ou `ng s -o`, ambos os camando irão compilar todos os pacotes e abrir o projeto no seguinte caminho `http://localhost:4200/dashboard`, porem o segundo comando `ng s -o` irá abrir o projeto direto no navegador sem a necessidade de uma ação manual.

## Arquitetura

Para a construção desse projeto foi utilizada a arquitetura de pastas abaixo:

SRC > APP > APIS > JSON ("Neste caminho encontra-se o arquivo JSON `lancamento-conta-legado.json` e outro arquivo chamado `index.js` onde é feita a exportação do json para utilização do mesmo em diversas partes do projeto")

SRC > APP > APIS > MODELS > RESPONSES ("Neste caminho foram criados 4 responses que são equivalentes a divisão estabelecida no arquivo JSON, o `summary.response.ts`, `pagination.response.ts`, `items.response.ts` e o ultimo engloba todos os demais `lancamento-conta-legado.response.ts` ")

SRC > APP > PAGES > DASHBOARD ("Neste caminho encontram-se toda estrutura da página HTML da aplicação e também o seu respectivo arquivo TS com as lógicas necessárias para o funcionamento, tais com ordenação, paginação e a ligação do response com JSON para exibir os dados na página ")

SRC > APP > SHARED ("Neste caminho foram criados os componentes globais da aplicação tais como NAVBAR e FOOTER que são ou serão utilizados em toda a aplicação")
