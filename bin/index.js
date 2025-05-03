#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Estrutura das pastas que serão criadas 
const folders = [
  'public',
  'public/html',
  'public/css',
  'public/js',
  'src',
  'src/controllers',
  'src/repositories',
  'src/models',
  'src/utils',
  'src/services',
];

// Criando as pastas
folders.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir); // Usa o diretório atual
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Criado: ${dir}`);
  } else {
    console.log(`Já existe: ${dir}`);
  }
});

// Criando o arquivo .gitignore
const gitignorePath = path.join(process.cwd(), '.gitignore');
if (!fs.existsSync(gitignorePath)) {
  const gitignoreContent = `
# Node modules
node_modules/

# Logs
*.log

# Environment files
.env
  `;
  fs.writeFileSync(gitignorePath, gitignoreContent);
  console.log('.gitignore criado');
} else {
  console.log('.gitignore já existe');
}

// Criando o arquivo .env
const envPath = path.join(process.cwd(), '.env');
if (!fs.existsSync(envPath)) {
  const envContent = `
# Variáveis de ambiente para o projeto
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=project_db
  `;
  fs.writeFileSync(envPath, envContent);
  console.log('.env criado');
} else {
  console.log('.env já existe');
}

// Criando o arquivo server.js
const serverPath = path.join(process.cwd(), 'src/server.js');
if (!fs.existsSync(serverPath)) {
  const serverContent = `
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(\`Servidor rodando na porta \${PORT}\`);
});
  `;
  fs.writeFileSync(serverPath, serverContent);
  console.log('server.js criado');
} else {
  console.log('server.js já existe');
}

// Criando o arquivo app.js
const appPath = path.join(process.cwd(), 'app.js');
if (!fs.existsSync(appPath)) {
  fs.writeFileSync(appPath, '// Arquivo principal\n');
  console.log('Arquivo app.js criado');
} else {
  console.log('app.js já existe');
}
