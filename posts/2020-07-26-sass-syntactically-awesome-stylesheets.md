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

Placeholder é o sinal de identificador desse seletor, entao colocamos o %, ele vai funcionar como um seletor normal porem nao vai se rprocessado,
