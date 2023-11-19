![telas do projeto aiqdesafio](https://raw.githubusercontent.com/marcosdissotti/images/main/aiqdesafio.gif)

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

O projeto é um Single Page Application desenvolvido com a biblioteca `reactjs`, `typescript` com `webpack` e `babel` configurado manualmente, utilizando como linter o `eslint` no padrão ES2022 e para estilização é utilizado _CSS in JS_ com o `styled-components` e o padrão [Idiomatic CSS](https://github.com/necolas/idiomatic-css), no gerenciamento dos formulários é utilizado a biblioteca `formik` e gerenciamento de estado da aplicação é feito com a API de contexto do react.

```shell
src/
|-- @types --> Contém as declarações de módulos e definições do theme.
|-- assets --> Contém as fontes e ícones do projeto.
|-- components --> Contém os components com lógica isolada e globais.
|-- contexts --> Contém os contextos de informações do detalhes do item e pedido.
|-- interfaces --> Onde são declarados os tipos de dados e funções e contratos de API.
|-- pages --> Localiza as paginas da aplicação ItemDetail e pagina de erros.
|-- services --> Contém as integrações com APIs.
|-- styles --> Diretório dos estilos globais e temas da aplicação.
|-- utils --> Onde é abstraído lógicas reutilizáveis.
```

### Rotas da Aplicação

Fake API com json-server na rota /order para retornar os detalhes do pedido:
http://localhost:3001/order

Página de Detalhes do Item
http://localhost:3000/

Página de Erros
http://localhost:3000/error

<a name="challenges"></a>

# 🚀 Desafios

## Dados, como transformar o protótipo em uma linda página funcional?

Antes de começar a desenvolver, precisava estabelecer a expectativa da tela de detalhes do item, então coloquei como objetivo que iria fazer o mais próximo possível da realidade de uma aplicação de cardápio no âmbito do detalhes do pedido e principalmente os opcionais do cardápio.

Partindo deste principio, precisava estruturar os dados observando as telas e campos do design e prover os dados de um backend, assim com minha experiencia prévia desenvolvi um contrato de api como pode ser observado na imagem abaixo, optei por utilizar o json-server pela facilidade de configuração, porém o mais correto seria utilizar um BFF (Back-end for Front-end) ou miragejs, o contrato completo pode ser encontrado em [src/interfaces/OrderDataInterface](./src/interfaces/OrderDataInterface)
e no mock do json-server o db.json.

<p align="center">
    <img src="https://raw.githubusercontent.com/marcosdissotti/images/main/dados.png" alt="imagem com um opcional do cardápio onde eu destaco o campo qual o tamanho?" width="400">
</p>

Pode ser observado no json abaixo criado apartir dos requisitos da tela que precisei também criar alguns campos extras como `maxOption` ou `optionIsRequired` justamente para definir qual input será exibido (radio, checkbox ou number) dependendo dos dados recebidos.

```json
{
  "name": "qual o tamanho?",
  "description": "escolha 1",
  "hasQuantity": false,
  "maxOption": 1,
  "optionIsRequired": true,
  "optionList": [
    {
      "label": "médio",
      "price": 19.9,
      "saleOriginalPrice": 22.9,
      "quantity": 0
    }
  ]
}
```

Sendo assim, criei algumas regras para poder exibir o input correto e permitir com que todo o formulário seja dinâmico, pois em um cenário real, todos esses opcionais e o detalhes do item vem de um painel de pedidos (dashboard) que geralmente o restaurante cadastra e customiza do jeito que atenda ao seu negócio, algumas das regras para exibição abaixo:

Regras

- Quando mostrar um input checkbox? maxOption é limite de opcionais cadastrados pelo restaurante, por exemplo só pode escolher até 1, uma marmita grande ou pequena, sendo assim faz sentido se o maxOption for superior a 1, ser um checkbox.

```jsx
  const isCheckboxInput = (optionGroup: OptionsInterface) => {
    return optionGroup.maxOption > 1;
  };
```

- Quando mostrar um input number? hasQuantity (boolean) indica que o opcional cadastrado pode ter quantidade, como exemplo 3 coca-colas, então se tem quantidade e o maxOption é menor que 1, é um opcional de quantidade.

```jsx
  const isNumberInput = (optionGroup: OptionsInterface) => {
    return optionGroup.hasQuantity && optionGroup.maxOption <= 1;
  };
```

- Quando mostrar um input radio? quando hasQuantity ser false e maxOption menor ou igual 1, faz com que seja um radio input.

```jsx
  const isRadioInput = (optionGroup: OptionsInterface) => {
    return !optionGroup.hasQuantity && optionGroup.maxOption <= 1;
  };
```

Após definir o contrato da API e as regras para exibição do formulário dinâmico, se tornou viável a transformação do protótipo em uma linda página funcional.

## 2

## 3

## 4

<a name="improvements"></a>

# 💡 Melhorias

- melhorias

---

Contato: marcosdissotti@gmail.com

Linkedin: https://www.linkedin.com/in/marcosdissotti/
