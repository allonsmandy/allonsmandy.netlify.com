---
title: 'Arquitetura CSS: ITCSS'
description: Organize seu CSS com ITCSS
date: '2020-05-10 05:19:19'
image: assets/img/itcss-cover.png
category: css
background: '#0169B0'
---
#### O que é o ITCSS (Inverted Triangle CSS)?

O ITCSS é uma estrutura com a finalidade de termos uma arquitetura CSS mais organizada. Basicamente a ideia é visualizar o CSS em diferentes camadas separadas, que ao serem montadas formam um triângulo de cabeça para baixo.

Os seletores mais genéricos ficam no topo (na parte mais larga do triângulo invertido) e as mais específicas na base (parte pontuda). Faz sentido se você pensar que os seletores mais genéricos influenciam toda a aplicação enquanto os mais específicos são configurações também mais específicas para um determinado elemento na tela.

![](assets/img/itcss.jpg)

Veja que as camadas estão organizadas das mais genéricas até as mais especificas.

###### Settings

Você colocará em Settings suas configurações básicas! Geralmente é aqui que você define as variáveis globais do css, seja variáveis de cores, fontes, espaçamentos, enfim!

```css
$cor-principal: #E7E4D8;
$rgba: rgba(0, 0, 0, 0.6);
```

###### Tools

Em Tools é onde ficará seus mixins e as funções que construirão seu estilo e layout.

```scss
@mixin botao {
    position: relative;
    bottom: 0;
    padding: 5px 10px;
    background: $back-button;
    border: 0;
    cursor: pointer;
    color: $cor-principal;
    font-weight: bold;
    letter-spacing: 1px;
    transition: ease-in-out 0.3s;
    outline: none;
}
```

###### Generic

É aqui que finalmente começaremos a aplicar os códigos css. Em Generic você colocará propriedades mais genéricas, como por exemplo os reset, box-sizing, etc.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

###### Base/Elements

Irá conter estilizações básicas. Nesta camada você não utilizará seletores por id ou classes, apenas seletores diretamente nas tags. Lembre-se que são estilizações mais básicas ok?

```css
ul {
    list-style: square outside;
}
```

###### Objects

Em Objects nós vamos começar a criar pequenos pedaços da nossa interface...Podemos colocar alguns padrões que se repetem por todo o site, como botões, listas, painéis, etc. Nesta camada será permitido APENAS seletores por classes!!

```scss
.ui-list{
    margin: 0;
    padding: 0;
    list-style: none;
  
  &:__item {
    padding: $spacing-unit;
}
```

###### Components

Agora já teremos nossos elementos da interface com contextos mais específicos. Nós poderemos jogar aqui todos os elementos anteriormente criados.

Normalmente, aqui ficarão listas específicas como de produtos, cards específicos como aqueles incluindo imagens, etc. 

```scss
.products-list {
    @extend font-brand();
    border-top: 1px solid $color-ui;

    > .item {
        border-bottom: 1px solid $color-ui;
    }
}
```

###### Trumps

Nesta camada temos seletores que trazem estilos que devem ganhar de todos os outros.

Um ótimo exemplo é uma classe como `.hidden`. Você a usaria quando quisesse fazer algo desaparecer. Segundo o ITCSS, aqui é perfeitamente aceitável que você use **!important,** já que estas classes devem ser utilizadas ativamente, não em reação a um problema de especificidade.

```css
.hidden {
    display: none !important;
}
```

Neste meu projetinho eu coloquei na prática como utilizar esta arquitetura juntamente com o SASS, caso se interesse pode dar uma olhadinha :) Tá bem basiquinho pois o css dele não é nada grande hehe acabei tentando colocar em prática quando comecei a ver sobre o assunto (e confesso que talvez precise de uma refatoradazinha)

<https://github.com/allonsmandy/dogs/tree/master/src/sass>

Observe também em como está organizado as pastas e os arquivos scss!
