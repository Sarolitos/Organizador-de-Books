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

##  Funcionalidades de Usuário

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

##  Banco de Dados

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

##  Autor

* Sarah Oliveira dos Santos
* Maria Sophia Muniz Costa
* Sara Nicoly Santos Araújo
