---
title: ' Currying hoisting e imutabilidade'
description: ' Currying hoisting e imutabilidade'
date: '2020-05-13 01:26:34'
image: assets/img/1200px-Unofficial_JavaScript_logo_2.svg.png
category: js
background: '#D6BA32'
---
###### Currying

É bem comum em linguagens funcionais, o javascript não é na verdade uma linguagem é funcional por padrão, mas você consegue escrever código funcional!

Currying é a tecnica de transformar uma função de n paramentros em apenas uma função que recebe só um parametro, e pra cada parametro é retornado uma nova função!

Função normal:

```
function soma(a, b) {
  return a + b
}

soma(2, 2)
soma(2, 3)
soma(2, 4)
soma(2, 5)
```

Percebe que o primeiro parametro ta sendo repetido? Podemos aplica ressa tecnica na funçao soma (pra cada parametro vamos criar uma nova funçao certo?)

```
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

HOISTING

Comportamento que occorre no javascriptna declaçarao devaris e funcoes, elas sao elevadas no escopo que ela ta, seja de lboco func global.

variaveis

funçoes

tipo ^



o hoist de var so eleva a criaçao e nao sua atribuçao, ja a funçao é elevada ao topo como um todo

HOISTING VARIAVEIS

```javascript
function fn() {
  console.log(text)
  
  var text = 'exemplo'
  
  console.log(text)
}

/*
function fn() {
var text;
console.log(text)
  
  text = 'exemplo'
  
  console.log(text)
  }
*/
```

Foi criada uma função que faz o console da variavel declada em baixo, se vc for tentarusar uma var q n foi declarada ainda, provavelmente vai da erro pois nao existe, no js por causa do hoisting, o comportamento vai ser tipo como esta no bloco comentado. Seeu tenho um var text, ele vai declarar a variavel la no topo SEM  o seu valor, portanto no primeiro console vai dar um undefined pois aindan possui valor, porem existe!

FUNÇAO

```javascript
function fn() {
  log('Hoisting de função')
  
function log(value) {
    console.log(value)
}

}

fn()

/*
function fn() {
function log(value) {
    console.log(value)
}
log('Hoisting de função')
}

*/
```

diferença é que a funçao é içada como um todo entao qunado for executado o log, por mais que elesteja antes da declarao da funçao, eu vou conseguir executar o value.

IMUTABILDADE

Um conceito tbm de linguagem funcional masque temos no js

os dados que vamos criando nuncamudam, a varivel nunca vai mudar e se vc precisar alterar ela vc cra ua nova

ao inves de mudar um array, a gente cria um novo array baseado no q querems alterar e pra add pega tod o oarray e concatena, e pra removerfiltra, assim como obj, ele nuncaé atualizado, ele vai ser cpiado e vc alterar so o que quiser

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

temos um user e ua func que recebe o user e eu add um novo atributo do fullname, entao passo um user e retorna um fullname, name + lastname, aqui ja temos duas implementaçoes novas do ecmascript

primeiro é o spread operator + string literals

user.name + ' ' + user.lastname

spread pra cada prop que eu sreceber do user ele coloca no meu novo obj

imutabilidade : eu nao vou pegar o user e alterar direto a eferencia dele

toda vez q passamos pra func um obj ou aray ele é passado por referencia ou seja se vc alterar ele ele vai ta alterando o mesmo local q a variavel aponta, n vamos alterar um user e sim criar um novo



criar uma conste chamar a funçao passando o user q criei em cima

esperoqeleretorne um novo objeto com esses atributos mais  ofullname

OUTRO EXEMPLO DE IMUTABILIDADE

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
