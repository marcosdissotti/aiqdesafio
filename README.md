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

O projeto é um Single Page Application desenvolvido com a biblioteca `reactjs`, `typescript` com `webpack` e `babel` configurado manualmente, utilizando como linter o `eslint` no padrão ES2022 e para estilização é utilizado _CSS in JS_ com o `styled-components` e o padrão [Idiomatic CSS](https://github.com/necolas/idiomatic-css), no gerenciamento dos formulários é utilizado a biblioteca `formik` e gerenciamento de estado da aplicação é feito com a API de contexto do react. Obs. Este projeto foi desenvolvido com nodejs na versão v18.17.1

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

Visando replicar a experiência real de uma aplicação de cardápio, onde o dono de negócio cadastra as opções de cada item do cardápio através de uma aplicação voltada ao cadastro das lojas, items e gerenciamento de pedidos, decidi por tornar a aplicação frontend mais dinâmica, apresentando campos de acordo com o que for definido no sistema, obtendo esses dados através de uma API. Para esse teste, utilizei a lib json-server para subir uma API com contrato simulado (mock).

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

## Código, qual receita seguir?

Todo bom prato tem que seguir uma receita a risca e com código não é diferente, dito isto, precisei definir como construir o SPA com react e com alta probabilidade de mudanças durante o projeto para isso optei por configurar manualmente o webpack com typescript e react para ter controle total sobre a configuração e personalização do projeto.

Na estilização dos componentes e paginas, utilizei CSS in JS com styled-components, facilita muito para modificar os estilos da página através dos estados ou mesmo utilização de tema, configurei também a possibilidade variação de temas como por exemplo, caso queira adaptar a pagina para cores que chamem atenção em um dia dos namorados (um dos mais movimentados nos restaurantes) é possível com o themes configurado, vale ressaltar também o padrão de escrever css de forma consistente e idiomática [Idiomatic CSS](https://github.com/necolas/idiomatic-css), onde devemos separar por posicionamento, caixa, display e outros, veja um exemplo da estilização da tag de campo obrigatório abaixo.

<p align="center">
    <img src="https://raw.githubusercontent.com/marcosdissotti/images/main/CSS.png" alt="imagem de um código css e a forma mais consistente de escrever" width="400">
</p>

Para o gerenciamento dos formulários utilizei o formik, pois estava começando a criar muitos states ao longo da criação dos renders dinâmicos dos inputs, acredito que essas libs adicionam um pouco de verbosidade, mas nesse caso, seria mais verboso não utilizar. É importante mencionar que optei por utilizar o mínimo libs possível, por exemplo acabei criando boa parte dos componentes somente com css e o svg disponibilizado no figma como esse input radio e input number abaixo:

<p align="center">
    <img src="https://raw.githubusercontent.com/marcosdissotti/images/main/radioandnumber.png" alt="imagem de um input radio e um input number" width="400">
</p>

Mesmo se atentando aos padrões e boas práticas, ainda faltam melhorias que poderiam deixar a página ainda mais funcional e visualmente agradável para todos dispositivos, que vou mencionar logo a seguir.

<a name="improvements"></a>

# 💡 Melhorias

- Docker, ambiente de desenvolvimento e produção com disponibilização rápida e destrutível é essencial.
- Validação e feedbacks de erros para usuário, implementei somente a pagina de erros das rotas e do axios.
- Responsividade, desenvolvi a estrutura para fazer o site responsivo com breakpoints, mas falta incorporar na aplicação.
- Botão Adicionar Item, no momento está sendo necessário clicar nele primeiro antes de selecionar os opcionais, mas poderia setar o estado dele para quantidade 1 automaticamente ao clicar em algum field ou desativar os fields enquanto ele não for selecionado.
- Alterar o input checkbox para ficar semelhante ao radio input nas cores, atualmente está com o padrão do navegador.
- Tests Unitários e End-to-End, cheguei a implentar o jest e testing-library, mas removi por estar focado em funcionalidades da página.

## O que fiz

Calculo de valor total
Multiplica o valor do tamanho do item pela quantidade
Diferentes inputs, checkboxes, radio e de numero para increment/decrement
Codificação da UI toda conforme especificado em design

## O que não fiz

Adaptação pra dispositivos móveis
Funcionalidade para o botão entrar
Funcionalidade para o botão ver ticket
Funcionalidade para o input de pesquisa na loja
Validação dos inputs, poderia usar yup passando o schema no validationSchema do Formik e adicionar textHelpers de erros para exibir quando tentar submeter sem selecionar os campos obrigatórios
Botão pra submeter o pedido/formulário (Ir para tela de Ticket ou Pagamento)

---

Contato: marcosdissotti@gmail.com

Linkedin: https://www.linkedin.com/in/marcosdissotti/
