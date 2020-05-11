---
title: 'Arquitetura CSS: OOCSS'
description: CSS Orientado a Objeto
date: '2020-05-11 12:38:13'
image: assets/img/frontend.png
category: css
background: '#0169B0'
---
O CSS orientado a objetos ( OOCSS ) é uma metodologia de CSS desenvolvida e promovida por Nicole Sullivan.

A finalidade do OOCSS é incentivar a reutilização de código, um objeto CSS é todo padrão visual que poderá se repetir no site ou aplicação e é identificado como uma classe, ou seja, esse objeto CSS pode ser reutilizável em todo o site.

### 1º principio - Separação de estrutura e visual(skin)

> Podemos usar o OOCSS para modularizar o código, reaproveitando as estruturas em diversos casos, mantendo um padrão, porém diferenciando vários comportamentos.

### 2º principio - Independencia entre container e conteúdo

> Simplesmente quebrar a dependência dos componentes de seus respectivos containers.

Veja que as **divs** abaixo possuem a mesma estrutura, no qual foi definida na classe `.box`, porém cada uma possui cores diferentes. Portanto, eu defini apenas a estrutura do box em uma *classe*, e criei *novas classes* apenas para definir o estilo.

```html
<!-- Separação de estrutura e visual (skin) -->
<div class="box box-red">Lorem ipsum</div>
<div class="box box-green">Lorem ipsum</div>
<div class="box box-blue">Lorem ipsum</div>

<!-- Independencia entre container e conteúdo -->
<aside>
    <h3 class="title">Titulo :3</h3>
</aside>

<footer>
    <h3 class="title">Titulozinho :3</h3>
</footer>
```

```css
/* Separação de estrutura e visual (skin) */

.box {
    height: 100px;
    outline: 1px solid black;
    width: 100px;
}

.box-red {
    background-color: #ee5e5e;
}

.box-green {
    background-color: #4ddd4d;
}

.box-blue {
    background-color: #5353aa;
}

/* Independencia entre container e conteúdo */

.title {
    color: #e0425d;
    font-family: Georgia, 'Times New Roman', Times, serif;
    line-height: 1;
    text-shadow: rgba(0, 0, 0, .3) 3px 3px 6px;
}

aside .title {
    font-size: 2em;
    text-shadow: rgba(0, 0, 0, .3) 3px 3px 6px;
}

footer .title {
    font-size: 1.5em;
    text-shadow: rgba(0, 0, 0, .3) 2px 2px 4px;
}
```

## Boas práticas

Existem algumas boas práticas que fazem parte do OOCSS e que melhoram muito o planejamento e a prática do desenvolvimento web:

###### Modularização de código css

O objetivo é que o código CSS seja reutilizado em várias partes da produção evitando que você crie mais código. É aconselhável que se defina padrões de código para os principais elementos do layout.

###### Minimizar usos de seletores muito específicos

Encontre o meio termo. Não faça seletores muito específicos ou seletores muito genéricos. O CSS trabalha com especificidade: quanto mais específico, mais certeiro você é ao capturar um elemento, mas seu CSS fica mais engessado e consequentemente você usa mais código. Quanto mais genérico, mais elementos do mesmo tipo você formata, mas o risco de conflito de estilos aumenta. O ideal é encontrar o meio termo, onde você nem é tão específico e nem tão genérico.

###### Formatar elementos com classes modulares

A ideia é que ao criar uma nova página, você não tenha que criar novo código CSS. Se a página tiver a estrutura diferente mas os elementos tem características visuais iguais, aí está uma boa oportunidade para modularizar o código visual dos objetos.

## Performance OOCSS

* Intenso reúso de código

O que significa menos código CSS, arquivos menores e transferências mais rápidas.
