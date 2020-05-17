---
title: Design Patterns com a linguagem ES6
description: Introdução ao Design Patterns
date: '2020-05-17 01:46:25'
image: assets/img/1200px-Unofficial_JavaScript_logo_2.svg.png
category: js
background: '#D6BA32'
---
**Design Patterns** ou padrões de projetos são soluções generalistas para problemas recorrentes durante o desenvolvimento de um software. Não se trata de um framework ou um código pronto mas de uma definição de alto nível de como um problema comum pode ser solucionado.

**Por que usar?**

* Soluções catalogadas e testadas
* Principio KISS (keep it simple)  - Mantenha isso simples!
* Agnóstico a linguagem
* Melhora a comunicação com os desenvolvedores

**Como e quando utilizar?** Pode acontecer naturalmente ou conhecendo de fato o problema.

O Design Patterns surgiu do livro **A Pattern Language** que foi feito em 1978. Os autores detalharam neste livro mais de 253 tipos de problemas/desafios de projetos.

Além disso, neste livro também foi definido o formato de um Pattern.

#### Formato de um Pattern

* Nome
* Exemplo
* Contexto
* Problema
* Solução

Já em 1987, Kent Beck e Ward Cunningham falaram sobre 5 padrões de projetos numa palestra chamada Using Pattern Languages for Object-Oriented Programs.

> Pra quem não sabe, Kent Beck foi responsável pela criação do Extreme Programming e do TDD.

Já em 1994 foi escrito um livro chamado **Design Patterns: Elements of Reusable Object-Oriented Software**. Nesse livro os Design Patterns são categorizados em 3 tipos 

* Criação
* Estruturais
* Comportamentais



###### Padrões de Criação

Os padrões de criação são aqueles que abstraem e/ou adiam o processo de criação dos objetos. Eles ajudam a tornar um sistema independente de como seus objetos são criados, compostos e representados.

* Abstract Factory
* Builder
* Factory Method
* Prototype
* Singleton

###### Padrões estruturais

Os padrões estruturais se preocupam com a forma como classes e objetos são compostos para formar estruturas maiores.

* Adapter
* Bridge
* Composite
* Decorator
* Facade
* Business Delegate
* Flyweight
* Proxy

###### Padrões comportamentais

Os padrões de comportamento se concentram nos algoritmos e atribuições de responsabilidades entre os objetos. Eles não descrevem apenas padrões de objetos ou de classes, mas também os padrões de comunicação entre os objetos.

* Chain of Responsibility
* Command
* Interpreter
* Iterator
* Mediator
* Observer
* State
* Strategy
* Template Method
* Visitor

#### Patterns mais utilizados no javascript

* **Factory**

Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o new, são consideradas funções Factory(fábrica)

```javascript
function FakeUser() {
  this.name = "Amanda";
  this.lastName = "Matos";
}

// não é Factory
const user = new FakeUser();
  
```

```javascript
function FakeUser() {
  return {
     name: "Amanda",
     lastName: "Matos"
  }
}

//Factory
const user = FakeUser();
```

* **Singleton**

O objetivo desse pattern é criar uma única instância de uma função construtora e retorná-la toda vez em que for necessário utilizá-la. Um exemplo clássico deste pattern é usar um único objeto como namespace de sua aplicação.

```javascript
var SETTINGS = {
  api: 'http://localhost',
  trackJsToken: '12345'
}
```

```javascript
function MyApp() {
    if (!MyApp.instance) {
        MyApp.instance = this;
    }
  
  return MyApp.instance;
}
```

* **Decorator**

Uma função decorator recebe uma outra função como parâmetro e estende o seu comportamento sem modificá-la explicitamente.

Vamos supor que eu quero controlar a execução de uma função, e essa função só será executada se o usuário estiver autenticado.

```javascript
let loggedIn = false;

function callIfAuthenticated(func) {
  return !!loggedIn && func();
}

function sum(a, b) {
  return a + b
}

callIfAuthenticated(() => sum(2, 3)) // false
loggedIn = true
callIfAuthenticated(() => sum(2, 3)) // 5
loggedIn = false
callIfAuthenticated(() => sum(2, 3)) // false
```

* **Observer**

É um pattern muito popular em aplicações javascript. A instância (subscriber) mantém uma coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças no estado. 

```javascript
class Observable {
  constructor() {
     this.observers = [];
  }
  
  subscribe(func) {
     this.observers.push(func)
  }
  
  unsubscribe(func) {
    this.observers = this.observers.filter(subscriber => subscriber !== func);
  }
  
  notify(data) {
     this.observers.forEach(func => func(data));
  }
}

const instance = new Observable()
const logData1 = data => console.log(`Subscribe 1: ${data}`)
const logData2 = data => console.log(`Subscribe 2: ${data}`)
const logData3 = data => console.log(`Subscribe 3: ${data}`)

instance.subscribe(logData1)
instance.subscribe(logData2)
instance.subscribe(logData3)

instance.notify('notified 1')

instance.unsubscribe(logData2)
instance.notify('notified 2')

```

* **Module**

É um pattern que possibilita organizarmos melhor o nosso código, sem a necessidade de expor variáveis globais.

Esta é a forma que fazíamos antigamente:

```javascript
(function($){
  // your plugin here
})(jQuery);
```

É muito comum, por exemplo, usarmos o Module Pattern para criar plugins do jQuery, pois passamos o objeto jQuery como dependência e atribuímos a uma variável com um nome melhor, normalmente $.

Agora com o ES6:

```javascript
class Person {
   constructor(name) {
      this.name = name;
   }
}

export default Person;

// Utilizar Person
import Person from './models/person';
```

Nós podemos declarar uma classe, função ou objeto, faz a exportação e ai a gente faz a importação do que precisa, assim podemos separar os arquivos de acordo com a necessidade.



Lá no github tem um repositório bacana com a tradução do livro "L**earning JavaScript Design Patterns**" por Addy Osmany. Vale a pena conferir: [](https://github.com/fhferreira/aprendendo-padroes-de-projeto-javascript?fbclid=IwAR3bCG8ZOhkHY4JFvPKKKWgDaCUJbfM7XoJ2jgtOT7c0bwx-xJAGt0vq-ig)<https://github.com/fhferreira/aprendendo-padroes-de-projeto-javascript>
