---
title: GraphQL - Introdução - Parte 1
description: Introdução aos principais conceitos do GraphQL
date: '2020-04-12 08:51:44'
image: assets/img/GraphQL_Logo.svg.png
category: GraphQL
background: '#e663ab'
---
#### **O que é o Graphql?**

É uma **linguagem de consulta a dados em API's** desenvolvida pelo Facebook. As consultas são interpretadas em tempo de execução no servidor usando um sistema de tipos que você define para seus dados.

Com isso, facilita o processo de entregar à aplicação Client apenas o que foi requisitado pela mesma.

Não está vinculado a qualquer banco de dados ou sistema de armazenamento especifico.

#### **Conceitos básicos**

**TYPE SYSTEM**: sistema de tipos que usamos para descrever nossos dados

**QUERIES**: obtém dados da nossa API (read)

**MUTATIONS**: faz alterações nos dados da nossa API (write)

**SCHEMA**: define o "Esquema" da nossa API, pense nele como um container para todos os tipos da nossa API.

> **GraphQL** é estaticamente *tipado*, tudo nele precisa de um tipo associado, e esses tipos formam um *schema*. É a partir desse *schema* que as queries são executadas e consequentemente validadas, tanto entrada quanto saída.

##### TYPE SYSTEM

O GraphQL tem seu proprio sistema de tipos para que possamos "descrever" dados para nossa API. Não seria mais necessário identificar nossos recursos por URL's.

```graphql
type User {
  name: String!
  email: String!
  photo: String
}

type Post {      
  title: String!
  content: String!
  photo: String!
  author: User!
  comments: [Comment!]!    
}

type Comment {      
  comment: String!
  user: User!
  post: Post!
}
```

Os tipos acompanhados de **!** informam que não aceitam **null** como valor, ele é obrigatório. Perceba que há um relacionamento. Em **Post**, há o field ***comments*** que aponta para outro tipo, o **Comment**. Assim como em **author**, que no caso vai receber um tipo **User** já cadastrado na aplicação.

##### QUERIES

Queries são o que usamos para buscar dados na nossa API. (analogia ao método **GET** do REST)\
Obs: os campos são resolvidos paralelamente

###### Definição da Query

```graphql
type Query {   
  users: [User!]! 
}
```

###### Requisição no Client

```graphql
{   
  query {
    users {
      name
      email
    }
  }
}
```

###### JSON retornado

```json
{   
  "data": {
    "users": [       
      {
        "name": "Mandinha",
        "email": "mandinha@email.com"
      }
    ]   
  }
}
```

##### **MUTATIONS**

As Mutations nos permitem criar, alterar e deletar dados (analogia ao **POST**, **PUT** e **DELETE** do REST)\
Obs: campos resolvidos em série (um após o outro)

###### Definição da Mutation

```graphql
type Mutation {   
  createUser(name: String!, email: String!): User!
}
```

###### Requisição no Client

```graphql
{   
  mutation {
    createUser (
      name: "Mandy",
      email: "mandy@gmail.com"
    ){
      name
    }
  }
}
```

###### JSON retornado

```json
{
  "data": {
    "createUser": {
      "name": "Mandy"
    }
  }
}
```

##### **SCHEMA**

O Schema engloba nossas **Queries**, **Mutations**, **Subscriptions**, **Directives**, etc

###### **Definição do Schema**

```graphql
type Schema {
  query: Query,
  mutation: Mutation
}
```

#### **Como funciona a execução do GraphQL**

##### RESOLVERS

O front-end envia a *consulta* ou *mutação* para a sua API que realiza a consulta no **schema** contendo as **querys** e **mutations**. 

Cada campo no GraphQL possui uma função "**Resolver**". Ele é um método utilizado para implementar uma logica e retornar a informação que aquele campo especifico espera. Portanto, tendo o conhecimento do que foi solicitado, os **resolvers** são requeridos para resolver e encontrar os dados. 

###### **Query para buscar pelo id**

```graphql
type Query {
  user(id: ID!): User
}
```

###### ***Resolver* assíncrono para query "user"**

```graphql
Query {
  user (parent, args, context, info) {
    return context.db.UserModel.findById(args.id)
  }
}
```

###### Parametros

* **Parent**: objeto pai do campo, neste caso é o user
* **Args**: argumentos que vai passando para esta query, nesta situação ele vai ter o atributo id 
* **Context**:  geralmente coloca nele alguns objetos que será preciso utilizar por toda aplicação. *ex: instância aberta do banco de dados, guardar informações do usuario logado na aplicação, etc*
* **Info**: traz algumas informações sobre a Query que estamos executando e que recebemos da aplicação client, ele guarda os campos que estão sendo requisitado na query

##### **TRIVIAL RESOLVERS**

Agora que temos o objeto User disponivel, precisamos resolver seus campos também. (no exemplo anterior, foi retornado na query o objeto User)

###### **User**

```graphql
type User {
  name: String!
  email: String!
  photo: String
}
```

###### ***Resolvers* dos campos do objeto "User"**

```js
User {
  name (parent, args, context, info) {
    return parent.name;
  },
  email (parent, args, context, info) {
    return parent.email;
  },
  photo (parent, args, context, info) {
    return parent.photo;
  }
}
```

Os campos do graphql eles só terminam de ser resolvidos quando um valor escalar é retornado.

##### **SCALAR TYPES (tipos primitivos de uma linguagem de programação)**

Um objeto GraphQL possui um nome e seus campos, mas em algum momento esses campos precisam ser resolvidos com valores concretos. É aí que entram os "tipos escalares": eles representam as folhas da árvore.

* INT: um inteiro de 32 bits (assinado)
* Float: um ponto flutuante de dupla precisão (assinado)
* String: uma sequência de caracteres UTF-8
* Boolean: true ou false
* ID: Representa um identificador único, geralmente usado para rebuscar um objeto ou como chave de cache

#### GraphQL é uma árvore

A forma como os campos são resolvidos no GraphQL, é bem semelhante a estrutura de dados do tipo árvore:

```graphql
type Post {
  title: String!
  content: String!
  photo: String!
  author: User!
  comments: [Comment!]!
}
```

##### Como funciona uma requisição a uma API Graphql

Suponha que temos a nossa aplicação Client e o nosso servidor com o banco de dados. O Graphql é o intermediário, o ponto de entrada da nossa api, e a gente faz uma requisição pra lá fazendo uma query.

![](assets/img/allonsmandygraphql.png)
