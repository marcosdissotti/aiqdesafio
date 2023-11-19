<p align="center">
   <img src="https://raw.githubusercontent.com/marcosdissotti/images/main/cover.png" />
</p>

# AiqDesafio 😋

Desafio para vaga de Desenvolvedor Front-end Pleno do Aiqfome com objetivo de construir uma aplicação de pedidos de delivery para restaurantes com foco na tela de detalhes do item, disponibilizado o design no [figma](https://www.figma.com/file/xh0VpeVVEZohI2QLXoRAgz/%5Baiqfome%5D-teste-front-end---WEB?type=design&node-id=1201%3A1241&mode=dev).

---

- [🏗 Instalação](#installation)
- [📦 Arquitetura](#architecture)
- [🚀 Desafios](#challenges)
- [💡 Melhorias](#improvements)

<a name="installation"></a>

# 🏗 Instalação

**Clone o repositório e entre no diretório da aplicação, utilizando estes comandos:**

`git clone git@github.com:marcosdissotti/aiqdesafio.git`

`cd aiqdesafio`

**Instalar o json-server globalmente e executa-lo com o arquivo json do projeto (É interessante manter um terminal aberto com o json-server)**

`npm install -g json-server`

`json-server --watch db.json --port 3001`

**Instalar as dependências do projeto**

`npm install`

**Executar a aplicação**

`npm run start`

Assim, a aplicação pode ser acessada no endereço:

[http://localhost:3000](http://localhost:3000)

<a name="architecture"></a>

# 📦 Arquitetura

````shell
src/
|-- @types --> Contém as declarações de módulos e definições do theme.
|-- assets --> Contém as fontes do Meteocons.
|-- components --> Contém os components com lógica isolada e globais.
|-- contexts --> Contém os contextos de informações do tempo e geo localização.
|-- interfaces --> Onde são declarados os tipos de dados e funções e contratos de API.
|-- pages --> Localiza as paginas da aplicação.
|-- services --> Contém todas as integrações com APIs.
|-- styles --> Diretório dos estilos globais.
|-- utils --> Onde é abstraído lógicas reutilizáveis.


```js
 Resources
  http://localhost:3001/establishment
  http://localhost:3001/customer
  http://localhost:3001/order

  Home
  http://localhost:3001

````

Regras:

- Quando aparecer ou não um input radio? quando maxOption for igual a 1, quando for maior que 1 é um select multiplo
- Quando aparecer os input type number? quando o hasQuantity ser igual a true

<a name="challenges"></a>

# 🚀 Desafios

## 1

## 2

## 3

## 4

<a name="improvements"></a>

# 💡 Melhorias

- melhorias

---

Contato: marcosdissotti@gmail.com

Linkedin: https://www.linkedin.com/in/marcosdissotti/

```

```
