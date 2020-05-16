---
title: Fundamentos de Arquitetura de Sistemas - Parte 4
description: Arquitetura de dados essencial
date: '2020-05-14 09:39:09'
image: assets/img/arquitetura-sistemas-768x512.jpg
category: dev
background: '#88c18c'
---
### Dados?

![Dados](assets/img/dados.png "Dados")

Dados de uma maneira geral é um conjunto de valores e ocorrências que descrevem alguma característica.

Quando você quer descrever uma pessoa por exemplo, você pode atribuir valores a ela, como altura, cor de cabelo, cor dos olhos, estatura, peso... Essas informações são os dados dessa pessoa, e as ocorrências seriam se por exemplo, caso eu tivesse 2 pessoas, então eu teria 2 ocorrências, nesse caso teríamos um aglomerado de dados diferentes

### Importância

![Importância](assets/img/importancia.png "Importância")

Dos dados nós podemos obter informações, e com elas temos algo importante que é o conhecimento. O conhecimento nos ajuda a tomar decisões, como por exemplo, como evoluir o sistema de uma empresa, a gerencia do seu negocio, enfim. 

### Dados digitais

![](assets/img/dados digitais.png)

No mundo digital os dados podem acontecer de maneiras diversas, mas lá atrás, antes mesmo do computador se tornar popular, alguém ia fazer compra no armazém e se a pessoa não tivesse dinheiro o dono do armazém fazia uma anotação do nome e do valor, mas com a popularização dos computadores domésticos e pessoais, permitiu-se que criasse arquivos digitais com seus respectivos formatos digitais, o arquivo de texto é um formato digital por exemplo.

Mas veja que os dados NÃO tem uma explicação por si só, no exemplo acima, eu não sei onde começa e termina determinada informação. Por logica, da pra ver que temos o nome da pessoa e o seu telefone, assim como possivelmente o valor. Se eu adicionar outra linha eu posso manter o mesmo padrão...

Embora eu tenha os dados, eles por si só não se explicam, são brutos! Por isso há necessidade de que se crie um **modelo sustentável**. 

![](assets/img/modelo sustentavel.png)

Para que tenha uma **estruturação** desses dados e que os dados sejam duráveis, eu não posso ter ele anotado, pois de repente alguém pode ir lá e apagar, posso até perder o computador ou coisa do tipo. 

Nós vimos no exemplo da imagem somente duas linhas, mas em uma grande empresa pode ser que tenha milhões de registros, portanto eu vou precisar pegar a informação e obter o conhecimento de forma rápida, eu não posso esperar nessa busca!

Eu preciso ter controle de acesso, essas informações poderiam ser informações de salário de funcionários por exemplo, então o acesso precisaria ficar restrito a algumas pessoas.

Também é preciso ter isolamento! Eu tenho uma informação e eu preciso que mais de uma pessoa possa acessar o registro e possa também alterar ou ler ao mesmo tempo, como veremos mais a frente.

### O que é um banco de dados?

Uma vez que tenhamos a necessidade de um modelo sustentável, e também de sistemas que o gerencie, é ai que surge o banco de dados. **Banco de dados** nada mais é que conjuntos de sistemas e funcionalidades que gerenciam esses dados e permite que tenhamos acesso e controle sobre eles, independente da plataforma, seja windows ou linux; Há vários tipos de sistemas de banco de dados e cada sistema de acordo com sua  plataforma, tem uma maneira de gerenciar o aspecto físico da informação, do armazenamento, enfim. Isso não é de importância para o nosso usuário, então temos que ter no nosso sistema a capacidade de abstração, em que pegará a informação que ta no meio físico e vai abstrair em uma visão que seja pratica no qual realmente traga a informação e o conhecimento para os usuários.

![Abstração](assets/img/abstração.png "Abstração")

Esses sistemas são chamados de **sgbd's**. No nível de abstração foi criada então linguagens e ferramentas que controlam todo esse mecanismo. 

Os três grandes pilares: 

* Linguagem de definição

Onde posso definir a estrutura dos meus dados

* Linguagem de manipulação, 

Como eu vou recuperar a informação

* Dicionário de dados

Banco de dados dentro de outro, no qual guarda toda a estrutura pois preciso saber como meu banco foi estruturado.

###### Modelo Flat

![Modelo Flat](assets/img/Captura de tela de 2020-05-14 11-07-11.png "Modelo Flat")

O modelo mais básico é o Flat, no qual se assemelha nos registros anotados em uma linha, só que dessa vez nós temos uma estruturação melhor com a definição de colunas e linhas, além do enriquecimento da explicação, o dicionario da informação. O modelo flat nada mais é que uma tabela.

###### Modelo hierárquico

![Modelo Hierárquico](assets/img/modelo hierarquico.png "Modelo Hierárquico")

Na evolução do banco de dados, o primeiro modelo a surgir foi o hierárquico, em que ocorre a divisão de certos aspectos da informação em grupos na arvores hierárquica, essa era a forma de acessar os dados, esse modelo não é tao utilizado, mas por exemplo, o registro do windows que é um dicionario onde contem todas as informações é baseada no modelo hierárquico já que ele é rápido de se obter informações, porém é complicado de manter e acaba apresentando redundância de informação.

###### Modelo relacional

![](assets/img/modelo relacional.png)

É o modelo mais utilizado no mercado atualmente pois ele resolve uma serie de necessidades, alem da melhor compreensão e manutenção dos dados.

Ele é basicamente um conjunto de tabelas do modelo flat que se relacionam entre si obedecendo regras...

OUTROS MODELOS

* \- Redes (grapho) 
* Modelo orientado a objeto 
* Objeto relacional
* Big data

#### BANCO DE DADOS RELACIONAIS

![Banco de dados relacionais](assets/img/banco de dados relacional.png "Banco de dados relacionais")

Os sistemas que gerenciam esse tipo de arquitetura são chamados de **sgdbr**, ele é composto por entidades que agrupam as nossas informações, na qual são chamadas de tabelas!

Nossas tabelas possuem as linhas que contém as informações, que são os nossos dados, elas são chamadas de Registros ou Tuplas. Essas linhas precisam ter uma classificação em que iria conter um enriquecimento do que significa aquela informação, essa divisão no qual fica na vertical são as colunas. Temos em sistemas de banco de dados relacionais as chaves que podem ser **primary key**, em que eu não posso ter duplicidade então ela é unica, e também temos a **foreign key** que é a herança da chave primaria de uma outra tabela e que cria o nosso relacionamento entre as duas tabelas, as duas instancias da informação.

#### Modelagem



Pra criar o nosso bd relaconall nos preicsamos primeiramente criar um mdoelo. ele descreve com oo negocio funciona dentro do banco de dados relacional

1 - modelos conceitual projetado atraves do MER

VAMOS DESCREVER AS NSOSAS identidades e os relcionamentos e qual tipo de relacionaento cada uma possui entre si

elas como vimso antes sao as tabelas entao é uma abstacao conceitual do modelo anteiror das tabelas linha scolunas e como osdados vao se relcionarentre si, entr as chave priaria e estrangeria

MODELO LOGICO

é a implementaçao

umm MER pode ser representado através do DER que é nosso diagrama  entdade e relaconamento dado, facilita q tenhamos compreensao de ocmo um modelo deve se comportar e tbm possamos aplicar conceitos de normalizaçao , o der é um diagarama grafico ondep odemos representar nossas entidades q sao as tabelas, com o nome da entidade com seus atributos, o relacionamento entre uma nova entidade, nesse eu tenho que vendas possui itens da identidade produto e tbm possui cliente que é outra etnidade, o relacinamento entre as entidades se da de forma direta ou indireta e por isso nova entidade tem um poder de existencia, nos temos entidades fortes  q n dependem de outra entidade pra existir, eu tenho produto q nao depende de venda pra existir, eu posso ter info cadastar na lista de produto sem nunca ter feito uma venda, eu to alimentando o sistema co dados q nao depende de outra pra existir, assimcomo cliente q nao depende de outra info pra exisitr, no DER tbm tem a entidade grafica q dpeende de outras pra existir, eu n posso ter ua vendase  eu nao tenho client ou produto pra vender

 a nsosa entidade psossui uma relaçao entre eleas e eu precos desrevr como ela vai se comportar, no modelo do der temos umanotalaonq vem ao lado da entidade, eu posso dizer da direta pra esquerda que venda tem que ter 1 ou N produto, nos chamamos isso de M, ela precisa ter no minimo 1 produto e pode ter N, varios.

ada esqurda pradireita eu digo q a entidade pode ter 0 ou n vendas, o produto pode ter sido vendido em nenhuma ele n depende da existencia da venda pra exidtir, mas ele pode ter varias vendas

esse relcinamento é chamado de M pra N

NA outra ponta temos um relacionamento chamado 1 que a venda so pode ter sido feita pra um client, e precisa ter feita pra 1, eu n posso ter 0 venda

na contramaçao eu tenho u relacionamento M, um client pode ta no sistema mas nunca ter feiot uma venda, ou pode ter feito N vendas esse relacionamento é chamado 1 pra N

NO der quando eu tiver um relacionamento m pra n, o meu relacionamento tbm asusme o comportamente de uma entidade associativa, se eu posos ter mtos produtos na venda e muitas vendas pra o produto eu preciso de outra enifade q explique essa relaçao de multicplidade, por sisó essaligaçao de chave n resolveira meu problema entao crio new entifade chama item q pertence a venda e produto e é chamada de entidade sociisdativa, ela vai possuir uma chave estrangeira herdada de produto e outra de venda, e nos temos tbm  a quantidade d eprodutos ventidos, entao essa entidade pass a existir quando tenho um relacionamento de M pra N, e ai precisa ser resolvida dessa foma.

Agora qtemos uma entidade no meio eu tbm vou ter um novo relacionamento entrre eles q funciona da mesma forma que anteiromente, para o produto e item eu tenho que ter pelo menos 1 produto e o produto pode etsar em nehnhum item e ele n depende pra exitir mas pode estar em n itens

eu tenho agora um relacionamento 1 pra n

da mesma forma do outro lado, eu vou te meu rlecioanment N onde a venda precisa ter 0 ou N itens, o item precisa estar associado a uma e no maximo uma venda q é um relaionamento de chave composta, eu tenho produto amis venda se transformando em chave primaria e que pertence a so ua venda

o 0 arcado diz q quando to criando uma venda eu n preciso ter um item, eu posso ter registrado a venda sem nenhum item, mas isso nao faria sentido no mundo do negocio, entao embora no meu entendiment odo mer der eu possa colocar q tem 0 ou N, na pratica nao vai acontecer,etnao pode ser alterado pra 1 ou N. o importante entender é que eu preciso entender como meu negocio funciona
