# Conversor de Unidades com API

![GitHub License](https://img.shields.io/github/license/MarceloMendes021/conversor-unidades-api)

## Descrição

Este projeto é uma API para conversão de diferentes unidades de medida (comprimento, massa e temperatura). Desenvolvido com Node.js e Express, com foco em simplicidade e integração eficiente em outros sistemas.

## Linguagem Utilizada

-**JavaScript:** Usado para o desenvolvimento da lógica de conversão e configuração da API.

## Estrutura do Projeto

- **app.js**: Configura o middleware e as rotas principais.
- **server.js**: Inicializa o servidor na porta especificada.
- **temperatureControllers.js**: Contém a lógica de conversão de temperatura.
- **lenghtControllers.js**: Contém a lógica de conversão de comprimento.
- **massControllers.js**: Contém a lógica de conversão de massa.
- **convertRoutes.js**: Define as rotas e conecta aos controllers.

## Funcionalidades

A API oferece conversão entre diferentes unidades de medida, organizadas em três categorias:

- **Temperatura**: `POST /convertTemperature`
- **Comprimento**: `POST /convertLength`
- **Massa**: `POST /convertMass`

## Tecnologias Utilizadas

- Node.js
- Express
- Body-parser

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/MarceloMendes021/conversor-unidades-api
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd conversor-unidades-api
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## U

1. Inicie o servidor:

   ```bash
   npm start
   ```

   O servidor estará disponível em: `http://localhost:3000`.

2. Faça requisições para a API nos endpoint abaixo:

## Rotas e Exemplos

### 1. Conversão de Temperatura

- **Endpoint**: `POST /convertTemperature`
- **Descrição**: Converte valores entre Celsius, Fahrenheit e Kelvin.
- **Body**:
  ```json
  {
    "value": 25,
    "fromUnit": "Celsius",
    "toUnit": "Fahrenheit"
  }
  ```
- **Resposta**:
  ```json
  77
  ```

---

### 2. Conversão de Comprimento

- **Endpoint**: `POST /convertLength`
- **Descrição**: Converte valores entre quilômetros, metros e centímetros.
- **Body**:
  ```json
  {
    "value": 1,
    "fromUnit": "Quilometro",
    "toUnit": "Metro"
  }
  ```
- **Resposta**:
  ```json
  1000
  ```

---

### 3. Conversão de Massa

- **Endpoint**: `POST /convertMass`
- **Descrição**: Converte valores entre toneladas, quilogramas e gramas.
- **Body**:
  ```json
  {
    "value": 1,
    "fromUnit": "Tonelada",
    "toUnit": "Quilograma"
  }
  ```
- **Resposta**:
  ```json
  1000
  ```

## Possíveis Erros

### 1. Parâmetros ausentes

- **Descrição**: Quando um ou mais parâmetros obrigatórios não são fornecidos.
- **Resposta**:
  ```json
  {
    "error": "Todos os parametros são obrigatórios"
  }
  ```

### 2. Unidades de medida iguais

- **Descrição**: Quando as unidades de medida de origem e destino são as mesmas.
- **Resposta**:
  ```json
  {
    "error": "As unidades de medidas utilizadas são as mesmas!"
  }
  ```

### 3. Valores inválidos

- **Descrição**: Quando o valor fornecido não é numérico ou é inválido.
- **Resposta**:
  ```json
  {
    "error": "O valor fornecido é inválido"
  }
  ```

## Testes

Você pode testar a API utilizando ferramentas como [Postman](https://www.postman.com/) ou via terminal com cURL:

### Exemplo com cURL

```bash
curl -X POST http://localhost:3000/convertTemperature -H "Content-Type: application/json" -d '{"value": 0, "fromUnit": "Celsius", "toUnit": "Fahrenheit"}'
```

## Contribuição

Contribuições são bem-vindas!
