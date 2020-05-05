---
title: Introdução aos testes
description: Um pouco da teoria sobre testes
date: '2020-04-26 06:59:50'
image: assets/img/arquitetura-sistemas-768x512.jpg
category: testes
background: '#88c18c'
---
#### Por que testar?

* Reduz o tempo gasto em análise e correção de bugs
* Facilita refatoração
* Gera documentação do seu código 
* Melhora o design do código
* Garante que o trabalho tenha qualidade

#### Como funciona o fluxo do TDD?

###### Fluxo de Teste

1. Escrever o teste
2. Escrever o código para o teste passar
3. Escrever um segundo caso de teste
4. Corrigir o código para que passe
5. Escrever um terceiro caso de teste (se necessário)
6. Refatorar o código

###### Pensando como testar

* O que o código precisa fazer?
* Que dados ele recebe?
* Que dados ele precisa retornar?
* Que ações precisam acontecer para o código rodar?

###### Padrão do Teste

* "Ele deve fazer isso quando aquilo..." - "*it should do that when this*"

```javascript
export const sum = (num1, num2) => num1 + num2

```

```javascript
it('should return when receive 2,2') {
  expect(sum(2, 2)).to.equal(4)
}
```

#### Tipos de Testes

![Pirâmide de testes](assets/img/tests.png "Pirâmide de testes")

**Testes unitários:** São aqueles testes de responsabilidade unica onde você testa como um método funciona de forma isolada, ou seja, esse teste unitário vai fazer os testes do método pra ver se retorna um valor, etc.

É um simples e pequeno teste automatizado que prova o comportamento de um único método. Tem como objetivo ser bem rápido e fazer o teste de um comportamento.

* Evite o ruído entre os testes (isolamento). Todos os testes precisam ser independentes, sem depender de um teste externo.
* Pra evitar isso é sempre legal usar **beforeEach** e **afterEach** para limpar as variáveis globais que você possa ter criado.
* Escolha os melhores *asserts* para cada momento
* Procure usar *mocks* para chamadas externas
* Utilize o teste unitário para organizar o design do seu código

**Testes de serviço ou integração:** Supomos que temos um componente no qual já fizemos todos os testes unitários, e este componente faz uma chamada ao banco, a api, e ai a gente busca alguns resultados e retorna outras coisas. No unitário esta parte de serviço a gente simplesmente faz um *mock....* ou seja,fazemos uma chamada pra um valor que já sabemos qual vai ser, *pois não queremos testar a api no unitario* e sim como vai se comportar. No teste de integração precisa saber se de fato vai integrar e funcionar, então não da pra criar mais estes *mocks*.

É um teste para validar se os componentes estão funcionando em conjunto.

* **Cuidado para não criar um teste inútil**
* **Isole o máximo possivel dos ambientes**

**Testes de UI/ e2e:** Você ver a maquina mexendo na UI por você. Este teste é importante pra verificar se não tem um botão que esta sendo escondido onde não deveria, se conseguimos chamar um dropdown e ele ta funcionando, se ele pode ser clicável, enfim. Além de também termos os testes de regressão que é quando faz uma mudança ou outra de css ou js e você acaba quebrando uma integração.

**O teste de aceitação é realizado com o proposito de avaliar a qualidade externa do produto e, na medida do possível, também a qualidade em uso.**

* **Valide apenas o fluxo de funcionamento do projeto, ou seja, você tem que validar a etapa indo de A pra B, indo de B para C. O usuário abriu a pagina, o usuário digitou no search, abriu a tela, ele clicou no link, etc.**

SPIES, STUBS E MOCKS 

###### SPIES

Como o nome sugere, **spies** são usados para vigiar informações sobre chamadas de funções (métodos). Um spy vai nos dizer se o método foi chamado, quantas vezes, quais argumentos foram passados, etc. 

São muito uteis para testar callbacks e como métodos são usados dentro do sistema. Os spies te permitem verificar se um outro método foi chamado dentro do método que você está testando.

```javascript
it('should inspect Jquery.getJSON usage of jQuery.ajax', function() {
  sinon.spy(jQuery, 'ajax')
  
  jquery.getJson('/some/resource')
  assert(jquery.ajax.calledOnce)
 })
```

###### STUBS

São como os spies, exceto por eles substituírem a função alvo. Podendo inclusive mudar o comportamento, assim como os valores e exceções levantadas. 

Quando usar os stubs?

* Controlar comportamento de um teste: Ex: forçar uma exceção 
* "Pular" uma parte não necessária do codigo Ex: execução de db
* Simplificar o teste de código assíncrono

###### MOCKS

São métodos falsos (similares aos spies) com comportamento pre-programado (similar ao stub) e respostas/expectations pre programados. 

Mocks devem ser primariamente utilizados quando voce precisa de um stub, mas precisa verificar multiplos comportamentos num especifico ponto.

#### Alguns conceitos importantes

###### Describe

Vai descrever os testes de uma certa função e afins. Ele serve pra gente conseguir criar um bloco onde a gente vai testar métodos de uma função, o describe vai ser o que vai iniciar o teste. 

Usamos pra separar os metodos ou classes, podemos ter varios describe, pra minha classe Main, mas posso ter describe dentro de outros também.

```javascript
describe('Main', function() {

  describe('Method A', function() {
  
  })
  
  describe('Method B', function() {
  
  })
})
```

###### Context

Serve pra gente separar os nossos casos de testes, usamos pra separar os casos que teremos...

```javascript
  describe('Method A', function() {
    context('Case 1', function() {}
    context('Case 2', function() {}
  })
```

###### it

É o que de fato vai rodar primeiro comando do teste

```javascript
it('should happen blabla', function() {
  // espera que aconteça alguma coisa
  // entrada de dados/ método sum(2, 2)
  // espera retornar (4) => true | (3) => false Broken test! :P
}
```

#### Introdução aos hooks

###### Hooks

Códigos que são rodados a partir de alguma ação que foi executada. Serve por exemplo para criar métodos que são rodados antes de outros, ou seja, os hooks vão ajudar para que a gente consiga diminuir as nossas duplicatas 

* **before** => roda uma vez antes do bloco 
* **after** => roda uma vez depois do bloco 
* **beforeEach** => roda todas as vezes antes de cada bloco 
* **afterEach** => roda todas as vezes depois de cada bloco

###### chai

Responsavel por cada it, ele que de fato vai testar 

###### chains

Palavrinhas que vão conectar nossos testes

```javascript
  describe('method B', function () {

        before(function () {
            // inicio de conexao com o banco
            // criar um conjunto de dados
            console.log('before')
        })

        after(function () {
            // fecha conexao com o banco
            // apagar esse conjunto de dados
            console.log('after')
        })

        beforeEach(function () {
            console.log('beforeEach')

            arr = [1, 2, 3]
        })

        afterEach(function () {
            console.log('afterEach')
        })

        // testar tipos ou se existe (smoke test)
        it('should be an array', function () {
            expect(arr).to.be.a('array')
        })


        it('should have a size of 4 when push another value to the array', function () {

            arr.push(4)
            expect(arr).to.have.lengthOf(4)
            // console.log(arr.length) //4
        })

        it('should have a size of 2 when pop a value from the array', function () {

            arr.pop()
            expect(arr).to.have.lengthOf(2)
            // console.log(arr.length) //2
        })

        it('should remove the value 3 when use pop in the array', function () {

            arr.pop()
            expect(arr).to.not.include(3)
            // console.log(arr.pop() === 3) //true
        })

        it('should return true when pop 3 front the array', function () {
            expect(arr.pop() === 3).to.be.true
        })
    })
})

//before
//beforeEach
//teste1

//afterEach
//beforeEach
//teste2

//afterEach
//after
```

### Exemplificando com o Mocha e Chai

###### Reporters do mocha

* É como informa como os testes estao passando de uma forma diferente, menor, enfim. 

```javascript
npm test -- --reporters npm test -- --reporter=nyan
```

 (muito fofinhooooo >u<) 

**verde**: Teste que está passando 

**vermelho**: erros 

**azul**: quantos testes voce falou pra nao ser rodado no momento 

**bail**: npm test -- --bail 

No primeiro momento que encontrar um erro ele vai parar vai consertando por pedaço por pedaço e isso é bom :3 

**only**: roda somente o bloco especificado

`context.only('...', function () {})
`**skip**: serve pra nao rodar o teste em especifico. Mostra na coloração azul

`it.skip('should happen blablabla', function() {})`
