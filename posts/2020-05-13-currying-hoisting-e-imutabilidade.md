---
title: ' Currying, hoisting e immutability'
description: 3 conceitos interessantes sobre o uso do javascript
date: '2020-09-13 01:26:00'
image: assets/img/1200px-Unofficial_JavaScript_logo_2.svg.png
category: js
background: '#D6BA32'
---
## Currying

> Em ciência da computação, currying é uma técnica de transformação de uma função que recebe múltiplos parâmetros de forma que ela pode ser chamada como uma cadeia de funções que recebem somente um parâmetro cada. 

O currying bem comum em linguagens funcionais! O javascript não é na verdade uma linguagem funcional por padrão, mas você consegue escrever código funcional!

* Posso reutilizar e criar diferentes versões por causa do currying
* Posso criar versões intermediárias das funções

###### Função normal:

```javascript
function soma(a, b) {
  return a + b
}

soma(2, 2)
soma(2, 3)
soma(2, 4)
soma(2, 5)
```

Perceba que o primeiro parâmetro está sendo repetido! Podemos aplicar essa técnica na função soma (então pra cada parâmetro vamos criar uma nova função)

###### **Com currying**

```javascript
function soma(a) {
  return function(b) {
    return a + b
  }
}

const soma2 = soma(2)

soma2(2)
soma2(3)
soma2(4)
soma2(5)
```

Para mais exemplos:

<https://github.com/allonsmandy/js-functional-reactive/blob/master/functional-programming/currying_v1.js>

<https://github.com/allonsmandy/js-functional-reactive/blob/master/functional-programming/currying_v2.js>

<https://github.com/allonsmandy/js-functional-reactive/blob/master/functional-programming/currying_v3.js>

## Hoisting

> As variáveis declaradas com **var** é como se fossem declaradas no **topo do escopo de uma função** (se forem colocadas dentro de uma), ou no **topo do escopo global** (se forem declaradas fora de uma função), independentemente de onde a declaração real ocorrer. Isso essencialmente é “hoisting”.

Basicamente é o comportamento que ocorre no javascript na declaração de variáveis e funções. Elas são elevadas no escopo!

O hoisting de variáveis só **eleva a CRIAÇÃO** e **não sua ATRIBUIÇÃO**, já a função é elevada ao topo como um todo. 

###### **Variáveis**

```javascript
function fn() {
  console.log(text)
  
  var text = 'exemplo'
  
  console.log(text)
}

/*
// o código acima seria o mesmo que este:

function fn() {
  var text;
  
  console.log(text)
  
  text = 'exemplo'
  console.log(text)
 }
*/
```

Foi criada uma função que faz o console da variável declarada em baixo, mas se você for tentar usar a variável que não foi declarada ainda, provavelmente vai dar erro pois não existe! No javascript por causa do hoisting, o comportamento vai ser tipo como está no bloco comentado. Seu tenho um **var text**, ele vai declarar a variável lá no topo SEM o seu valor, portanto no primeiro console vai dar **undefined** pois ainda não possui valor, porém a variável existe!

Por isto é importante que usemos **let** e **const** :)

###### **Função**

```javascript
function fn() {
  log('Hoisting de função')
  
  function log(value) {
    console.log(value)
  }
}

fn()

/*
// o código acima seria o mesmo que este:

function fn() {
  function log(value) {
    console.log(value)
  }

  log('Hoisting de função')
}
*/
```

A diferença aqui é que a função é elevada ao topo, então quando for executado o **log()**, por mais que ele esteja antes da declaração da função, eu vou conseguir executar!

## Imutabilidade

Este é outro conceito de linguagem funcional que temos no javascript. Os dados que vamos criando nunca mudam, a variável nunca vai mudar, e se você precisar alterar ela você cria uma nova! Ao invés de mudar um array por exemplo, a gente cria um novo array baseado no que queremos alterar, e pra adicionar é só pegar todo o array e concatenar. Para remover um elemento podemos filtrar o array por exemplo, assim como o objeto ele nunca é atualizado, ele vai ser COPIADO e assim você altera só o que quiser :)

```javascript
const user = {
  name: 'Amanda',
  lastName: 'Almeida Matos'
}

function getUserWithFullName(user) {
  return {
    ...user,
    fullName: `${user.name} ${user.lastname}`
  }
}

const userWithFullName = getUserWithFullName(user)

console.log(userWithFullName)
```

Veja que neste exemplo temos uma função que recebe o objeto **user** e adiciona um novo atributo que é o nome completo (fullName), então eu passo um **user** como parâmetro e que vai retornar o nome, ultimo nome e nome completo. 

A ideia da imutabilidade é que, por exemplo, toda vez que passarmos pra função um objeto ou array, ele é **passado por referencia**, ou seja, se você alterar ele ele vai estar alterando o mesmo local que a variável aponta, *não vamos alterar um user e sim criar um novo.*

###### Outro exemplo de imutabilidade utilizando filtro:

```javascript
const students = [
  {
    name: 'Leonardo Da Vinci',
    grade: 10
  },
  {
    name: 'Van Gogh',
    grade: 7
  },
  {
    name: 'Claude Monet',
    grade: 4
  }
]

function getApprovedStudents(studentsList) {
     return studentsList.filter(student => student.grade >= 7)
}

console.log('Alunos aprovados')
console.log(getApprovedStudents(students))

console.log('Lista de alunos')
console.log(students)
```

Para mais exemplos:

<https://github.com/allonsmandy/js-functional-reactive/blob/master/functional-programming/immutability_1.js>

<https://github.com/allonsmandy/js-functional-reactive/blob/master/functional-programming/immutability_2.js>

<https://github.com/allonsmandy/js-functional-reactive/blob/master/functional-programming/immutability_3.js>
