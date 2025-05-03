# GENERATOR MVC

Uma ferramenta de linha de comando (CLI) simples e prática para gerar a estrutura base de um projeto Node.js no padrão **MVC (Model-View-Controller)**. Ideal para quem deseja iniciar rapidamente com organização e produtividade.

---

## 📦 Instalação

### Instalação global

```bash
npm install -g generator-mvc
````

### Ou como dependência de desenvolvimento

```bash
npm install --save-dev generator-mvc
```

---

## 🚀 Como usar

Após a instalação, execute no terminal dentro da pasta do seu projeto:

```bash
gerar-mvc
```

Esse comando irá criar automaticamente toda a estrutura base para seu projeto Node.js com Express.

---

## 📁 Estrutura criada

```bash
gerar-mvc/
├── public/
│   ├── html/
│   ├── css/
│   └── js/
├── src/
│   ├── controllers/
│   ├── repositories/
│   ├── models/
│   ├── utils/
│   ├── services/
│   └── server.js
├── .gitignore
├── .env
├── README.md
└── app.js
```

---

## 🧠 O que faz cada pasta dentro de `src/`?

* `controllers/` – Camada responsável por lidar com as requisições e respostas da API. É onde ficam os controladores das rotas.
* `repositories/` – Responsável por lidar com a lógica de acesso aos dados (banco de dados ou fontes externas).
* `models/` – Estrutura dos dados (modelos), como esquemas de banco de dados ou classes.
* `utils/` – Funções auxiliares e reutilizáveis, como formatadores, validadores, etc.
* `services/` – Lógica de negócio que conecta modelos, repositórios e controladores de forma limpa.
* `server.js` – Arquivo que inicia o servidor Express e faz as configurações básicas.

---

## 📄 Arquivos gerados

### `.gitignore`

Ignora arquivos que não devem ser versionados, como:

```gitignore
node_modules/
.env
*.log
```

---

### `.env`

Arquivo de variáveis de ambiente com exemplo básico:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
```

---

### `server.js`

Servidor básico com Express:

```js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```

---

## 🎯 Por que usar este CLI?

✅ Geração instantânea da estrutura
✅ Padrão organizado e escalável (MVC)
✅ Evita perda de tempo com setup repetitivo
✅ Ideal para projetos com Express.js

---

## 👨‍💻 Contribuindo

Sinta-se à vontade para contribuir! Relate bugs ou envie sugestões via [issues](https://github.com/MatheusBezerraLima/gerar-mvc/issues).

Pull requests também são bem-vindos 🚀

---

## 📘 Licença

Distribuído sob a licença [MIT](LICENSE).

---

## 🔗 Links úteis

* 📂 [Repositório no GitHub](https://github.com/MatheusBezerraLima/package-npm-generator-mvc)
* 📦 [Página no NPM](https://www.npmjs.com/package/generator-mvc)

---

Feito por [@MatheusBezerraLima](https://github.com/MatheusBezerraLima)