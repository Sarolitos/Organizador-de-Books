# 📚 Organizador de Livros

Projeto desenvolvido para a disciplina de **Programação Orientada a Objetos (POO)** utilizando **Node.js**, **Express**, **EJS**, **Prisma ORM** e **MySQL**.

## 🎯 Objetivo

O sistema permite que usuários realizem o gerenciamento de livros por meio de um CRUD completo, incluindo cadastro, edição, exclusão e listagem de livros, além de autenticação de usuários com login e logout.

---

## 🚀 Tecnologias Utilizadas

* Node.js
* Express
* EJS
* Prisma ORM
* MySQL
* Cookie Parser
* Body Parser
* JavaScript ES Modules

---

## 📂 Estrutura do Projeto

```text
organizador-livros/
│
├── prisma/
│   └── schema.prisma
│
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── views/
│
├── public/
│
├── app.js
├── package.json
├── .env
└── README.md
```

---

## 👤 Funcionalidades de Usuário

* Cadastro de usuário
* Login
* Logout
* Validação de credenciais
* Controle de sessão com cookies

---

## 📖 Funcionalidades de Livros

* Cadastro de livros
* Listagem de livros
* Edição de livros
* Exclusão de livros
* Associação de livros ao usuário cadastrado

---

## 🧠 Conceitos de Programação Orientada a Objetos

O projeto aplica os seguintes conceitos:

### Classes e Objetos

* Classe `Livro`
* Classe `Usuario`

### Encapsulamento

Utilização de atributos privados:

```js
#id
#titulo
#autor
#email
#senha
```

### Getters e Setters

Proteção e controle de acesso aos atributos das classes.

### Modularização

Uso de ES Modules:

```js
import
export default
```

### Tratamento de Exceções

Utilização de:

```js
throw new Error()
```

e

```js
try/catch
```

para validações e tratamento de erros.

---

## 🗄️ Banco de Dados

Banco de dados MySQL gerenciado pelo Prisma ORM.

### Tabelas

#### Usuario

| Campo | Tipo   |
| ----- | ------ |
| id    | Int    |
| nome  | String |
| email | String |
| senha | String |

#### Livro

| Campo         | Tipo   |
| ------------- | ------ |
| id            | Int    |
| titulo        | String |
| autor         | String |
| genero        | String |
| anoPublicacao | Int    |
| sinopse       | String |
| usuarioId     | Int    |

---

## ⚙️ Instalação

### Clonar o repositório

```bash
git clone https://github.com/Sarolitos/Organizador-de-Books.git
```

### Entrar na pasta

```bash
cd Organizador-de-Books
```

### Instalar dependências

```bash
npm install
```

### Configurar o arquivo .env

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/organizador_livros"
```

### Gerar o Prisma Client

```bash
npx prisma generate
```

### Criar as tabelas

```bash
npx prisma db push
```

### Executar o projeto

```bash
npm start
```

---

## 🌐 Acesso

Após iniciar o servidor:

```text
http://localhost:3000
```

---

## 👨‍💻 Autor

Projeto acadêmico desenvolvido para a disciplina de Programação Orientada a Objetos.
