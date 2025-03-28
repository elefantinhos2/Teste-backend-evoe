# Teste-backend-evoe

Sistema Para Cadastra um Usuário

# Documentação da API

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Início Rápido](#2-início-rápido)
  - [Instalando Dependências](#21-instalando-dependências)
  - [Variáveis de Ambiente](#22-variáveis-de-ambiente)
  - [Migrations](#23-migrations)

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [uuid](https://www.npmjs.com/package/uuid)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [bcryptjs](https://www.npmjs.com/package/bcrypt)


## 2. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 2.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 2.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 2.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

## 3. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [User]()
  - [POST - /users](#2-criação-de-usuario)
  - [GET - /users](#3-listando-usuários)
  - [GET - /users/:id](#6-listando-usuários-especifico)
  - [DELETE - /users/:id](#5-deletando-usuários-especifico)
  - [PATCH  - /users/:id](#4-atualizando-usuários)

## 1. **User**

[ Ir para os Endpoints ](#endpoints)

A criação do usuário é definida pelos campos abaixo

| Campo        | Tipo    | Descrição                                        |
| ------------ | ------- | ------------------------------------------------ |
| id           | string  | Identificador único do usuário.                  |
| name         | string  | O nome do usuário.                               |
| email        | string  | O e-mail do usuário.                             |
| password     | string  | A senha do usuário.                              |
| age          | number  | A idade do usuário.                              |

## Endpoints

| Método | Rota               | Descrição                                         |
| ------ | ------------------ | ------------------------------------------------- |
| POST   | /users             | Criação de um Usuário.                            |
| GET    | /users             | Lista todos os usuários.                          |
| GET    | /users/:id         | Lista um Usuario usando seu ID como parâmetro     |
| PATCH  | /users/:id         | Atualiza um Usuario usando seu ID como parâmetro  |
| DELETE | /users/:id         | Deleta um Usuario usando seu ID como parâmetro    |

### 2 **Criação de Usuario**

### `/user`

### Exemplo de Request:

```
POST /user
Host: http://localhost:3000
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZlNTlkMmQ2LTg5MmUtNGE5OC1iNjJjLWJiM2RkZWVmYWM4MiIsImFkbSI6ZmFsc2UsImlhdCI6MTY1ODM1MTk2MiwiZXhwIjoxNjU4MzU1NTYyfQ._S5WW_T4kDMnVTLjESv2GqQgjO21pNBW9O2dxejWXFM
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "name": "Shanks",
  "email": "Shanks@email.com",
  "password": "senhaForte",
  "age" : 34
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "00dfaa44-8032-4d05-9e65-a8f764c6af53",
  "name": "Shanks",
  "email": "Shanks@email.com",
  "age" : 34,
  "created_at": "2022-09-25T20:02:41.068Z"
}
```

### Possíveis Erros:

| Código do Erro | Descrição                 |
| -------------- | ------------------------- |
| 400 Bad Request| Illegal arguments.        |

[ Voltar para os Endpoints ](#índice)


### 3 **Listando Usuários**

### `/users`

### Exemplo de Request:

```
GET /users
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```


### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
	{
		"id": "aa3f4db7-5471-45dd-8b99-9c8233e6388b",
		"name": "Douglas",
		"email": "Douglas@email.com",
        "password": "senhaFraca",
        "age" : 20,
		"created_at": "2022-09-25T18:02:50.448Z",
		"updated_at": "2022-09-25T18:02:50.448Z"
	},
	{
		"id": "00dfaa44-8032-4d05-9e65-a8f764c6af53",
		"name": "Shanks",
		"email": "Shanks@email.com",
        "password": "senhaForte",
        "age" : 34,
		"created_at": "2022-09-25T20:02:41.068Z",
		"updated_at": "2022-09-25T20:02:41.068Z"
	}
]
```

### Possíveis Erros:

| Código do Erro  | Descrição                         |
| --------------- | --------------------------------- |
| nenhum          | Nenhum erro tratado               |

[ Voltar para os Endpoints ](#índice)

### 4 **Atualizando Usuários**

### `/users/:id`

### Exemplo de Request:

```
PATCH /users/:id
Host: http://localhost:3000
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZlNTlkMmQ2LTg5MmUtNGE5OC1iNjJjLWJiM2RkZWVmYWM4MiIsImFkbSI6ZmFsc2UsImlhdCI6MTY1ODM1MTk2MiwiZXhwIjoxNjU4MzU1NTYyfQ._S5WW_T4kDMnVTLjESv2GqQgjO21pNBW9O2dxejWXFM
Content-type: application/json
```

OBS: Todas as informações podem ser atualizados, ou apenas uma

### Corpo da Requisição:

```json
{
	"name": "Shank - O Ruivo"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"message": "User updated",
	"user": {
		"id": "00dfaa44-8032-4d05-9e65-a8f764c6af53",
		"name": "Shank - O Ruivo",
		"email": "Shanks@email.com",
        "password": "senhaForte",
        "age" : 34,
		"updated_at": "2022-09-25T20:03:37.821Z"
	}
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                         |
| --------------- | --------------------------------- |
| 404 Bad Request | "User not found".                 |

[ Voltar para os Endpoints ](#índice)

### 5 **Deletando Usuários Especifico**

### `/users/:id`

### Exemplo de Request:

```
DELETE /users/:id
Host: http://localhost:3000
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZlNTlkMmQ2LTg5MmUtNGE5OC1iNjJjLWJiM2RkZWVmYWM4MiIsImFkbSI6ZmFsc2UsImlhdCI6MTY1ODM1MTk2MiwiZXhwIjoxNjU4MzU1NTYyfQ._S5WW_T4kDMnVTLjESv2GqQgjO21pNBW9O2dxejWXFM
Content-type: application/json
```


### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"message": "User Delete",
	"user": {
		"id": "55743eab-0889-4aa2-81b4-029672a8d432",
		"name": "Shank - O Ruivo",
		"email": "Shanks@email.com",
        "password": "senhaForte",
        "age" : 34,
		"created_at": "2022-09-25T19:12:37.755Z",
		"updated_at": "2022-09-25T19:13:19.567Z",
	}
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                         |
| --------------- | --------------------------------- |
| 404 Bad Request | "User not found".                 |

[ Voltar para os Endpoints ](#índice)

### 6 **Listando Usuários Especifico**

### `/users/:id`

### Exemplo de Request:

```
GET /users/:id
Host: http://localhost:3000
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZlNTlkMmQ2LTg5MmUtNGE5OC1iNjJjLWJiM2RkZWVmYWM4MiIsImFkbSI6ZmFsc2UsImlhdCI6MTY1ODM1MTk2MiwiZXhwIjoxNjU4MzU1NTYyfQ._S5WW_T4kDMnVTLjESv2GqQgjO21pNBW9O2dxejWXFM
Content-type: application/json
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"id": "00dfaa44-8032-4d05-9e65-a8f764c6af53",
	"name": "Shank - O Ruivo",
	"email": "Shanks@email.com",
    "password": "senhaForte",
    "age" : 34,
	"created_at": "2022-09-25T20:02:41.068Z",
	"updated_at": "2022-09-25T20:03:37.821Z",
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                         |
| --------------- | --------------------------------- |
| 404 Bad Request | "User not found".                 |

[ Voltar para os Endpoints ](#índice)
