---
title: SASS ( Syntactically Awesome StyleSheets)
description: Um poderoso pre-processador CSS
date: '2020-07-26 09:19:58'
image: assets/img/sass.png
category: css
background: '#3182bb'
---
Um pre processador é um programa que pega alguns dados como entrada, e os devolve de forma diferente, na qual outro programa vai poder entendê-los. Os dados de entrada neste caso serão os arquivos .scss ou .sass, que sao compilados em um arquivo .css, podendo serem interpretados pelo browser.

> O Sass é uma extensão do CSS que adiciona poder e elegância à linguagem básica

* Totalmente compativel com CSS
* Funções internas paa manipular cores e outros valores
* CSS com superpoderes
* Variaveis, importação, herança, aninhamento, mixins e funções
* Saída bem formatada e personalizável
* Redução no tamanho do CSS
* Diretivas de condicionais e de repetição, além de bibliotecas

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

TODO

sass arquivo.sass arquivo.scss

sass arquivo.scss arquivo.css

sass --watch input.scss:output.css

sass --watch scss:css -> monitora tudo que tiver da pasta scss e coloca na pasta css

**Ambiente gráfico**

TODO

Existem varios aplicativos de compilar o sass de forma gráfica\
KOALA (css, sass)

**Sass online**

<https://www.sassmeister.com/>

###### Tipos de estilo de saida

O Sass permite que você escolha entre quando diferentes estilos de saída

* aninhado (nested)

```css
#main {
  font-size: 14px;
  border: 1px solid black;}
  #main p{
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

* Comprimido (compressed) - Ocupa a quantidade minima de espaço possivel

```css
#main{font-size:14px;border:1px solid black;}#main p{width:10em;}
```

sass --watch scss:css --style compressed

###### Aninhamento

O Sass permite que as regras CSS sejam aninhadas umas nas outas. A regra interna aplica-se somente dentro do seletor da regra externa. O codigo aninhamento obedece a uma hierarquia.

```scss
#main {
  width: 50%;
  p, div {
    color: #000;
    
    a { 
      text-decoration: none
    }
  }
}
```

###### Referenciando seletor pai

O & representa o seletor pai, ao invés de repetir a gente coloca o &, podemos aplicar a separação com hifen ou underline

```scss
$cor: black;

.#{$cor} {
  color: $cor;
}
```

###### Propriedades em namespace

Existe a possibilidade de usar a sintaxe abreviada, que reune todas as sintaxes estendidas font/border/background

Cria um namespace para aquela propriedade

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

Uma variável é um espaço reservado na memória do computador. A variavel começa com o sinal de $.

> Boa prática do CSS: Escolha nomes de ID e classes que lembrem a função que o seletor desempenha no documento e não a sua apresentação (estilização)

###### Shell interativo SassScript

sass -interative

$sass -i

Conseguimos executar operações, podemos usar pra criar variveis, 

###### Tipos de dados SassScript

* Numeros (1.2, 10, 200px, 50%)
* Cadeias de texto, com e sem aspas ("lateral", 'content', principal)
* Cores (red, #cccccc, rgba(255, 255, 0, 0.8)
* Booleanos (true, false)
* Nulos (null)
* Lista de valores, separados por espaços ou virgulas (1.5em 2em 0 6em ou Heveltica, Arial, sans-serif)
* Mapas de um valor para outro ($mapa: (key1: value1, key2: value2))

  * Acessando o mapa:

    * $cor: map-get($mapa, chave1)

type-of(dados) ou type_of(dado)

###### Imports

Utilizamos a diretiva @import para importar arquivos para dentro do Sass.

Oque podemos importar?

Arquivos com:

extensoes: .scss, .sass ou .css

começando com http://

nome do arquivo uma url()

e se o @import tiver qualquer media queries

@import 'reset.sass'

podemos colocar sem a extensao se quiser.

@import 'reset' 'variaveis'

###### Mixins

Mixins são blocos de código escrito com sintaxe sass, que pode ser incluido uma ou mais vezes em um arquivo sass a ser compilado

pra importar voce usa o @include

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

Voce nao pode colocar o valror padrao do padrao no inicio, tem que colocar no final o que tem valor padrao

MIXINS COM NUMERO DE ARGUMENTOS DESCONHECIDOS

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

vai herdar essas propriedas e funciona como uma herança

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

Placeholder é o sinal de identificador desse seletor, entao colocamos o %, ele vai funcionar como um seletor normal porem nao vai se rprocessado

###### Operações em sasscript

O sasscript possibilita que se realize operações que normalmente são previstas em outras linguagens de script. As operações possibilitam comparação e manipulação de dados.  Operadores aritmeticos, relacionais e de igualdade. 

```
20px + 6px = 26px
20px + 6em = syntax error
20% + 6% = 26%
20em + 6em - 4 = 22em
20 - 1px = 19px


```

o sinal / a saida é o proprio /, exceto se um ou ambos os valores dai retorna a divisao:

* da divisao forem armazenados em uma variavel ou retornado por uma funçao
* estiverem entre parenteses e nãõ fizerem parte de uma lista
* forem parte de uma epxresao aritmetica

Divisao com resultado adminesional sem a undiade de medida

(20px) / 6px = 3.33333.

Opçoes com cores: só é possivel a operação emcores com o mesmo alpha

\#112233 + #223344 = #335577

\#330044 * 2 = #660088

red - 9 = #f60000

red + blue - 4 = #fb00fb

CORES HSL

Os parametros de cor utilizados nesse sistema sao tonalidadehue satuaçao naturation e brilho lightness

hsl(120, 75% 100%)

darken(escurecer) e lighten(clarear)

lighteen(blue, 30%)

sturate(aumentar) e desaturate(diminuir)

adjust-hue - altera a tonalidade

rgba(cor, alpha) - cor em hexideimal mas voce quer aplicar um alpha nela



OPERAÇÕES COM STRINGS

Em  sass, o operador de adição destina-se a concatenar strings

font + -size = font-size



DIRETIVAS DE CONTROLE @if, @else e @else if, @for, @each e @while

O Sass script suporta diretivas de controle e expressoes basicas para incluir estilos sob algumas condiçoes ou incluindo o mesmo estilo varias vezes com variações. As diretivas são um recurso avançado e são incomuns no dia a dia. Elas existem principalmente para uso em mixins.

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

MIXINS BASEADO NO HORARIO

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

REPETIÇÃO COM FOR

O for usa uma variavel contadora que é incrementada. Normalmente o proprio valor da variavel contadora é utilizado no script.

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

Se trocar o through por to, ele nao vai mais executar 4 vezes e sim, executar até o 4, so que vai excluir o 4 e ir até o 3

//div.item-1 { width: 20%; } \
//div.item-2 { width: 40%; }
//div.item-3 { width: 60%; }

```scss
@for $i from 1 to 4 {
  $k: 2 * $i;
  div.item-#{$k * 100}{ width: 100px * $k; }
}

// div.item-200 { width: 200px; }
// div.item-400 { width: 400px; }
// div.item-600 { width: 600px; }
```

REPETIÇÃO COM EACH

O each usa uma variavelque atua como um ponteiroe executa o script toda vez que o ponteiro encontra um valor em uma lista ou um mapa

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

REPETIÇÃO COM WHILE

execut aum lboco de ocdigo enquanto um valor for verdadeiro

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

#f23
```

OQ UE SÃO FUNÇOES

FUnçoes destinam-se a criar blcoos de codigos para serem executdos em vrios pontos de um script, sao semelhantes ao mixins, a diferença é que ela sempe vai ter um retorn

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

FUNÇOES NATIVAS

 O sass prevê funçoes nativas para manipular todos os tipos de dados

\- funçoes para cores (rgb)

rgb($red, $blue, $green);

rgba($red, $blue, $green, $alpha)

red($cor); blue($cor); green($cor)

mix($cor1, $cor2, $porcentagem)

\- funções para cores (HSL)

hsl($hue, $saturation, $lighten)

hsla($tom, $sat, $lum, $alpha)

hue($cor); saturation($cor); lightess($cor)

grayscale($cor)

complement($cor); invert($cor)

adjuste-hue, lighten, darken, saturate, desaturate



\- Funçoes para opacidade

alpha($cor) ou opacity($cor);

rgba($cor, $alpha)

opacity($Cor, $val) ou fade-in($cor, $val)

transparentize($cor, $val) ou fade-out($cor, $val)



\-Funçoes para strings

unquote($string);

quote($string);

str-length($string);

to-upper-case($string)

to-lower-case($string)



\- funçoes para numeros

percentage($num, round($arredonda);

ceil($arred-prox); floor($arred-ante);

min($numeros...); max($numeros...)

random($limite)



\-funções para listas

length($lista);

nth($lista, $pos-item);

set-nth($lista, $pos-item, $novo-valor)



\- funçoes para mapas

map-get($mapa, $chave)

map-merge($mapa1, $mapa2)

map-remove($mapa, $chaves..)
