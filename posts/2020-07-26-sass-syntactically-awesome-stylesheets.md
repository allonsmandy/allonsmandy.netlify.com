---
title: SASS ( Syntactically Awesome StyleSheets)
description: Um poderoso pre-processador CSS
date: '2020-07-26 09:19:58'
image: assets/img/sass.png
category: css
background: '#3182bb'
---
Olá! Vamos aprender um pouquinho sobre o pré-processador de CSS chamado SASS?

Um pre processador é um programa que pega alguns dados como entrada, e os devolve de forma diferente, na qual outro programa vai poder entendê-los. Os dados de entrada neste caso serão os arquivos **.scss** ou **.sass**, que são compilados em um arquivo **.css**, podendo serem interpretados pelo browser.

> O Sass é uma extensão do CSS que adiciona poder e elegância à linguagem básica

* Totalmente compatível com CSS
* Funções internas para manipular cores e outros valores
* CSS com superpoderes
* Variáveis, importação, herança, aninhamento, mixins e funções
* Saída bem formatada e personalizável
* Redução no tamanho do CSS
* Diretivas de condicionais e de repetição, além de bibliotecas

```scss
$cor-principal: #84E;
$cor-secundaria: #88B;

a {
  color: $cor-principal;
  &:hover {
    color: $cor-secundaria;
  }
}
```

O código acima será convertido em css normal:

```css
a {
  color: #8AE;
}

a:hover {
  color: #88B;
}
```

###### Sass ou Scss?

A sintaxe do Sass é mais antiga, onde não há ponto e virgula no final e também não precisa das chaves.

```sass
// style.sass

$font-family: sans-serif
$font-size: 14px
p 
  font-family: $font-family
  font-size: $font-size
```

```scss
// style.scss

$font-family: sans-serif;
$font-size: 14px;
p {
  font-family: $font-family;
  font-size: $font-size;
}
```

###### Convertendo arquivo do tipo Sass para Scss e vise-versa (linha de comando)

No [site oficial do sass](https://sass-lang.com/install) você consegue instalar ele globalmente no seu sistema de maneira bem simples! Caso você faça isso, você consegue utilizar os comandos do sass para fazer as conversões e testar seus usos, basta adicionar o comando que você deseja no seu terminal.

```sass
// converte .sass em .scss
sass arquivo.sass arquivo.scss

// converte .scss em .css
sass arquivo.scss arquivo.css

// converte .scss em outro arquivo .css e vai alterar automaticamente sempre
// que você fizer alterações
sass --watch input.scss:output.css

// monitora tudo que tiver na pasta scss e coloca na pasta css
sass --watch scss:css
```

###### **Ambiente gráfico**

É bem comum também utilizar um ambiente gráfico para essas tarefas. Existem vários aplicativos de compilar o sass de forma gráfica. Acesse <https://sass-lang.com/install> e confira em *Applications* algumas das propostas :)

###### **Sass online**

Caso você prefira fazer algo rapidinho pra estudar e testar seu código, pode acessar o ambiente online :) <https://www.sassmeister.com/>

##### Tipos de estilo de saida

O Sass permite que você escolha entre diferentes estilos de saída

* aninhado (nested)

```css
#main {
  font-size: 14px;
  border: 1px solid black;}
  #main p {
    width: 10em; }
```

* Expandido (expanded)

```css
#main{
  font-size: 14px;
  border: 1px solid black;
}
#main p{
  width: 10em;
}
```

* Compacto (compact) - Ocupa menos espaço que os anteriores

```css
#main{ font-size: 14px; border: 1px solid black; }
#main p{ width: 10em; }
```

* Comprimido (compressed) - Ocupa a quantidade minima de espaço possível

```css
#main{font-size:14px;border:1px solid black;}#main p{width:10em;}
```

Você pode testar esses estilos de saídas com o seguinte comando: `sass --watch scss:css --style compressed`

Só substituir o compressed por outro estilo que desejar, seja nested, compact etc.

###### Aninhamento

O Sass permite que as regras CSS sejam aninhadas umas nas outas. A regra interna aplica-se somente dentro do seletor da regra externa. O código aninhamento obedece a uma hierarquia.

```scss
.card {
  width: 50%;
  p {
    color: #000;
    
    a { 
      text-decoration: none
    }
  }
}
```

###### Referenciando seletor pai

O **&** representa o seletor pai, ao invés de repetir o nome a gente coloca o &, podemos aplicar a separação com *hífen* ou *underline*

```scss
.card {
  width: 50%;
  
  &:__text { // .card__text (metodologia BEM)
    color: pink;
  }
}
```

###### Propriedades em namespace

Existe a possibilidade de usar a sintaxe abreviada que reúne todas as sintaxes estendidas ***font/border/background***

```scss
div {
  border: {
    color: black;
    style: solid;
    width: 2px;
  }
}
```

###### Variáveis

Uma variável é um espaço reservado na memória do computador. A variável começa com o sinal de $.

> Boa prática do CSS: Escolha nomes de ID e classes que lembrem a função que o seletor desempenha no documento e não a sua apresentação (estilização)

###### Shell interativo SassScript

Conseguimos executar operações, podemos usar pra criar variáveis, etc. É só digitar o comando abaixo no seu terminal :)

```sass
sass -interative

```

###### Tipos de dados SassScript

* Números (1.2, 10, 200px, 50%)
* Cadeias de texto, com e sem aspas ("lateral", 'content', principal)
* Cores (red, #cccccc, rgba(255, 255, 0, 0.8)
* Booleanos (true, false)
* Nulos (null)
* Lista de valores, separados por espaços ou virgulas (1.5em 2em 0 6em ou Heveltica, Arial, sans-serif)
* Mapas de um valor para outro ($mapa: (key1: value1, key2: value2))

  * Acessando o mapa:

    * `$cor: map-get($mapa, chave1)`

Visualizando o tipo de dado: `type-of(dados)` ou `type_of(dado)`

###### Imports

Utilizamos a diretiva **@import** para importar arquivos para dentro do Sass.

* Oque podemos importar?

  * Arquivos com extensões: .scss, .sass ou .css
  * Arquivos começando com http://
  * Arquivo com nome do arquivo em uma url()

Se o **@import** tiver qualquer media queries

`@import 'reset.sass'`

podemos colocar sem a extensão se quiser.

`@import 'reset' 'variaveis'`

```scss
// main.scss

/* Settings */
@import 'settings/_all';

/* Generic */
@import 'generic/_all';

/* Tools */
@import 'tools/_all';

/* Object */
@import 'object/_all';

/* Components */
@import 'components/_all'
```

Essa estrutura de pastas é da [Arquitetura ITCSS](https://allonsmandy.netlify.app/blog/arquitetura-css-itcss/), recomendo a leitura! ^_^

##### Mixins

Mixins são blocos de código escrito com sintaxe sass, que pode ser incluído uma ou mais vezes em um arquivo sass a ser compilado.

Você pode importar seu mixin utilizando o **@include**

```scss
@mixin colorir($cor-bg, $cor-texto: black) {
  background: black;
  color: white;
}

#main {
  font: {
    style: italic;
    weight: bold;
    variant: small-caps
  }
  @include colorir(black, white);
}
```

Você não pode colocar o parâmetro com o valor padrão no inicio, tem que colocar no final. (caso você já queira definir algum valor padrão para algum dos parâmetros como é exemplificado no código acima)

Exemplo de mixin com número de argumentos desconhecidos

```scss
@mixin box-shadow($sombras...) {
  -webkit-box-shadow: $sombras;
  -mox-box-shadow: $sombras;
  box-shadow: $sombras;
}

.card {
  @include box-shadow(0px 4px 4px #ccc, 2px 5px 8px #888)
 }
```

###### Extend

Com o extend você consegue herdar as propriedades, funcionando como uma herança

```scss
%componente-pai {
  color: red;
  font-size: 14px;
}

.componente-filho {
  @extend %componente-pai;
  background: black;
}

/* arquivo processado */

.componente-filho {
  color: red;
  font-size: 14px;
  background: black;
}
```

O placeholder é o sinal de identificador desse seletor, então colocamos o %, ele vai funcionar como um seletor normal porem não vai se processado \o/

###### Operações em sasscript

O sasscript possibilita que se realize operações que normalmente são previstas em outras linguagens de script. As operações possibilitam comparação e manipulação de dados. São utilizados operadores aritméticos, relacionais e de igualdade. 

```scss
20px + 6px = 26px
20px + 6em = syntax error
20% + 6% = 26%
20em + 6em - 4 = 22em
20 - 1px = 19px
```

* **Divisão com resultado adimensional sem a unidade de medida**

  (20px) / 6px = 3.33333.
* **Opções com cores: só é possível a operação em cores com o mesmo alpha**

  \#112233 + #223344 = #335577

  \#330044 * 2 = #660088

  red - 9 = #f60000

  red + blue - 4 = #fb00fb
* **Cores HSL**

  Os parâmetros de cor utilizados nesse sistema são tonalidades **hue**, **saturação** e **brilho**

  hsl(120, 75%, 100%)

  darken(escurecer) e lighten(clarear)

  lighteen(blue, 30%)

  sturate(aumentar) e desaturate(diminuir)

  adjust-hue - altera a tonalidade

  rgba(cor, alpha) - cor em hexideimal mas voce quer aplicar um alpha nela
* **Operações com strings**

  Em sass, o operador de adição destina-se a concatenar strings

  font + -size = font-size

#### Diretivas de controle: @if, @else e @else if, @for, @each e @while

O Sass script suporta diretivas de controle e expressões básicas para incluir estilos sob algumas condições ou incluindo o mesmo estilo varias vezes com variações. As diretivas são um recurso avançado e são incomuns no dia a dia. Elas existem principalmente para uso em mixins.

```sass
@diretiva expressao {
    // script
}

@if($cor == red) {
  body {
      background: $cor;
  }
} @else if($tamanho > 10) {
  
}
```

Exemplo de mixin baseado em horário

```scss
@mixin tema($horario) {
  @if $horario == manha {
    background: white;
    color: black;
  } @else if $horarioo == tarde {
    background: pink;
    color: purple;
  } @else {
    background: black;
    color: white;
  }
}

body {
  @include tema(manha)
}
```

```scss
@mixin colorir($cor, $propriedade, $tom) {
  @if($tom == 1) {
    #{$propriedade}: lighten($cor, 40%)
  } @else if($tom == 2){
    #{$propriedade}: lighten($cor, 20%)
  } @else if($tom == 3){
    #{$propriedade}: lighten($cor, 10%)
  } @else if($tom == 4){
    #{$propriedade}: lighten($cor, 10%)
  } @else if($tom == 5){
    #{$propriedade}: darken($cor, 15%)
  } @else if($tom == 6){
    #{$propriedade}: darken($cor, 20%)
  }
}

body {
@include colorir(pink, background, 3)
}
```

###### Repetição com @for

O for usa uma variável contadora que é incrementada. Normalmente o próprio valor da variável contadora é utilizado no script.

```scss
@for $i from 1 through 4 {
  div.item-#{$i}{ width: 20% * $i; }
}

// repete isso 4 vezes

//div.item-1 { width: 20%; }
//div.item-2 { width: 40%; }
//div.item-3 { width: 60%; }
//div.item-4 { width: 80%; }
```

Se você trocar o **through** por **to**, ele não vai mais executar 4 vezes e sim, executar só até o 4, só que vai excluir o 4 e ir até o 3

```scss
@for $i from 1 to 4 {
  $k: 2 * $i;
  div.item-#{$k * 100}{ width: 100px * $k; }
}

// div.item-200 { width: 200px; }
// div.item-400 { width: 400px; }
// div.item-600 { width: 600px; }
```

###### Repetição com @each

O each usa uma variável que atua como um ponteiro e executa o script toda vez que o ponteiro encontra um valor em uma lista ou um mapa

```scss
@each $icon in insta, face, youtube {
  .icone-#{$icon}{
    background: url(img/#{$icon}.png);
   }
}

// .icone-insta { background: url(img/insta.png); }
// .icone-face { background: url(img/face.png); }
// .icone-youtube { background: url(img/youtube.png); }
```

```scss
$redes-sociais: (insta, face, youtube);
@each $icon in $redes-sociais {
  .icone-#{$icon} {
    background: url(img/#{$icon}.png)
  }
}
```

###### Repetição com @while

Executa um bloco de código enquanto um valor for verdadeiro

```scss
$cont: 1;
@while $cont < 5 {
  .item-#{$cont} {
    width: 50px * $cont;
  }
  $cont: $cont + 1;
}

// .item-1 { width: 50px; }
// .item-2 { width: 100px; }
// .item-3 { width: 150px; }
// .item-4 { width: 200px; }
```

##### O que são funções?

Funções destinam-se a criar blocos de códigos para serem executados em vários pontos de um script, são semelhantes aos mixins, a diferença é que ela sempre vai ter um retorno!

```ags
@function calc($arg1, $arg2, ...) {
  // script que ira utilizar os argumentos
  @return $res
}

@function quadrado($valor) {
  $res: $valor * $valor;
  @return $res;
}

h1 {
  font-size: quadrado(6) + px;
}

// h1 { font-size: 36px; }
```

**Funções nativas** 

O sass prevê funções nativas para manipular todos os tipos de dados

* **Funções para cores (rgb)**

  * rgb($red, $blue, $green);
  * rgba($red, $blue, $green, $alpha)
  * red($cor); blue($cor); green($cor)
  * mix($cor1, $cor2, $porcentagem)
* **Funções para cores (HSL)**

  * hsl($hue, $saturation, $lighten)
  * hsla($tom, $sat, $lum, $alpha)
  * hue($cor); saturation($cor); lightess($cor)
  * grayscale($cor)
  * complement($cor); invert($cor)
  * adjuste-hue, lighten, darken, saturate, desaturate
* **Funções para opacidade**

  * alpha($cor) ou opacity($cor);
  * rgba($cor, $alpha)
  * opacity($Cor, $val) ou fade-in($cor, $val)
  * transparentize($cor, $val) ou fade-out($cor, $val)
* **Funções para strings**

  * unquote($string);
  * quote($string);
  * str-length($string);
  * to-upper-case($string)
  * to-lower-case($string)
* **Funções para numeros**

  * percentage($num, round($arredonda);
  * ceil($arred-prox); floor($arred-ante);
  * min($numeros...); max($numeros...)
  * random($limite)
* **Funções para listas**

  * length($lista);
  * nth($lista, $pos-item);
  * set-nth($lista, $pos-item, $novo-valor)
* **Funções para mapas**

  * map-get($mapa, $chave)
  * map-merge($mapa1, $mapa2)
  * map-remove($mapa, $chaves..)
