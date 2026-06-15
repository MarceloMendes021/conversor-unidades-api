# Conversor de Unidades API

![GitHub License](https://img.shields.io/github/license/MarceloMendes021/conversor-unidades-api)
![Node.js](https://img.shields.io/badge/node.js-Express-green)

Converte unidades de comprimento, massa e temperatura via API REST. Backend em Node.js com Express.

## Tecnologias

- JavaScript
- Node.js
- Express
- Body-parser

## Como rodar

```bash
git clone https://github.com/MarceloMendes021/conversor-unidades-api
cd conversor-unidades-api
npm install
npm start
```

O servidor sobe em `http://localhost:3000`.

## Rotas

### Temperatura — `POST /convertTemperature`

Unidades aceitas: `Celsius`, `Fahrenheit`, `Kelvin`

```json
{ "value": 25, "fromUnit": "Celsius", "toUnit": "Fahrenheit" }
```

```json
{ "result": 77 }
```

### Comprimento — `POST /convertLength`

Unidades aceitas: `Quilometro`, `Metro`, `Centimetro`

```json
{ "value": 1, "fromUnit": "Quilometro", "toUnit": "Metro" }
```

```json
{ "result": 1000 }
```

### Massa — `POST /convertMass`

Unidades aceitas: `Tonelada`, `Quilograma`, `Grama`

```json
{ "value": 1, "fromUnit": "Tonelada", "toUnit": "Quilograma" }
```

```json
{ "result": 1000 }
```

## Erros

**Parâmetro obrigatório ausente**

```json
{ "error": "Todos os parametros são obrigatórios" }
```

**Valor inválido (não numérico)**

```json
{ "error": "O valor fornecido é inválido" }
```

**Unidades de origem e destino iguais**

```json
{ "error": "As unidades de medidas utilizadas são as mesmas!" }
```

**Unidade não suportada**

```json
{ "error": "Unidade de origem não suportada" }
```

```json
{ "error": "Unidade de destino não suportada" }
```

## Testando com cURL

```bash
curl -X POST http://localhost:3000/convertTemperature \
  -H "Content-Type: application/json" \
  -d '{"value": 0, "fromUnit": "Celsius", "toUnit": "Fahrenheit"}'
```

## Arquitetura

```
Cliente (Postman, frontend, etc.)
        |
        | POST /convertTemperature | /convertLength | /convertMass
        v
Express Router
        |
        v
Controller
        |
        | valida parâmetros e executa a conversão
        v
Resposta JSON
```

**`src/server.js`** — inicia o servidor na porta definida.

**`src/app.js`** — configura o Express, middlewares e rotas.

**`src/routes/`** — define os endpoints e direciona para os controllers.

**`src/controllers/`** — implementa a lógica de cada conversão.

## Estrutura

```
conversor-unidades-api/
├── src/
│   ├── app.js
│   ├── server.js
│   ├── routes/
│   │   └── convertRoutes.js
│   └── controllers/
│       ├── temperatureControllers.js
│       ├── lengthControllers.js
│       └── massControllers.js
├── package.json
└── README.md
```
