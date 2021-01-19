---
title: Fundamentos de Arquitetura de Sistemas - Parte 4
description: Arquitetura de dados essencial
date: 2020-05-14 09:39:09
image: assets/img/arquitetura-sistemas-768x512.jpg
category: dev
background: "#b49bf1"
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

Para criar o nosso banco de dados relacional, nós precisamos primeiramente criar um modelo, ou seja, projetar o nosso banco. Ele descreve como o negocio funciona dentro do banco de dados relacionais ele tem que estar muito bem alinhado a necessidade do sistema alvo.

###### Modelo conceitual projetado através do **MER (Modelo Entidade-Relacionamento)**

![Modelo conceitual projetado através do MER](assets/img/modelo conceitual mer.png "Modelo conceitual projetado através do MER")

Vamos descrever as nossas entidades e os relacionamento, além de qual tipo de relacionamento cada entidade possui entre si.

Como vimos anteriormente, as entidades são as tabelas, então é apenas uma abstração conceitual do modelo anterior que vimos, onde tem as tabelas, linhas, colunas, e como os dados vão se relacionar entre si, entre as chave primaria e chave estrangeira.

###### Modelo Lógico

O modelo lógico por si só é a implementação do nosso modelo lógico na linguagem, ou melhor, no sistema de banco de dados relacional que escolhemos para a instalação.

![](assets/img/versao1.png)

O **MER** pode ser representado através do **DER** que é nosso Diagrama de Entidade-Relacionamento. Esse diagrama facilita que nós tenhamos uma compreensão de como o modelo deve se comportar, e que também possamos aplicar conceitos de normalização. (Veremos sobre isto mais adiante).

O **DER** é um diagrama gráfico onde podemos representar nossas entidades que são as tabelas, com o nome da entidade, os atributos da entidade que seriam as colunas, o relacionamento entre uma nova entidade, enfim. Nesse caso eu tenho que, a entidade **Venda** possui itens da entidade **Produto**, e também possui **Cliente** que é uma outra entidade. O relacionamento entre essas entidades se dá de uma forma direta ou indireta e por isso nossa entidade tem um poder de existência. 

![](assets/img/versao2.png)

Nós temos entidades fortes que são entidades que não dependem de outra entidade pra existir, por exemplo, eu tenho **Produto** que não depende de Venda pra existir, eu posso ter no meu sistema informações cadastradas na lista de produto sem nunca ter feito uma venda, isso é perfeitamente normal! Eu to alimentando o sistema com dados que não depende de nenhum outro pra existir, assim como na minha entidade **Cliente** que não depende de outra informação pra existir.

![](assets/img/versao3.png)

 No **DER** eu também tenho a entidade fraca, no qual ela vai depender de outras entidades pra existir. Eu não posso ter uma **Venda** se eu não tenho **Cliente** para quem eu possa vender, ou também o **Produto** pra vender.

![](assets/img/versao4.png)

A nossa entidade neste nosso modelo possui uma relação entre elas, portanto eu vou precisar descrever como que essa relação vai se comportar. No modelo do **DER** nós temos uma notação que vem ao lado da entidade, ou seja, eu posso dizer que da direita pra esquerda, a **Venda** tem que ter 1 ou N produtos, nós chamamos isso de M, ela precisa ter no minimo 1 produto, ou seja, 1 item da outra entidade, e pode ter N, pode ter vários.

![](assets/img/versao5.png)

Da esquerda pra direita, eu digo que a entidade pode ter 0 ou N vendas, ou seja, o **Produto** pode ter sido vendido nenhuma vez, já que ele não depende da existência da Venda pra existir (entidade forte), mas ele pode ter varias vendas.

Esse relacionamento é chamado de **M pra N.**

![](assets/img/versao6.png)

Na outra ponta temos um relacionamento chamado **1**, emque a **Venda** só pode ter sido feita para 1 **Cliente**, e precisa ter sido feita para 1 **Cliente**, eu não posso ter uma **Venda** pra ninguém. Então neste caso eu tenho um relacionamento de 1 pra 1, uma Venda precisa ter um 1 no máximo 1 Cliente.

![](assets/img/versao7.png)

Na contramão eu tenho um relacionamento **N**, ou seja, um **Cliente** pode estar no cadastrado no meu sistema mas nunca ter feito uma **Venda**, ou pode ter feito **N** vendas.

Esse relacionamento é chamado de **1 pra N**

![](assets/img/versao8.png)

No **DER**, quando eu tiver um relacionamento **M pra N**, o meu relacionamento também assume o comportamento de uma **entidade associativa**. Se eu posso ter muitos produtos na **Venda** e posso ter muitas vendas para o **Produto**, eu preciso de uma outra entidade que explique essa relação de multiplicidade.

![](assets/img/versao9.png)

Por si só essa ligação de chave não resolveria o meu problema, então eu crio uma nova entidade chamada **Item** que vai pertencer a **Venda** e ao **Produto**, e que é chamada de entidade associativa. Ela vai possuir uma chave estrangeira herdada de Produto (então eu vou ter o código do produto no Item), e outra chave estrangeira de Venda, além de que temos também a quantidade, ou seja, quantos produtos eu vendi na minha Venda. Então essa entidade associativa passa a existir quando tenho um relacionamento de **M pra N**, é uma necessidade que precisa ser resolvida dessa forma.

![](assets/img/versao11.png)

Agora que temos uma entidade no meio, eu também vou ter um novo relacionamento entre eles que funciona da mesma forma que os demais. 

Para o **Produto** e **Item** eu tenho que ter pelo menos 1 Produto, e o Produto pode estar em nenhum item(pois ele é uma entidade forte) mas pode estar em N itens.

Eu tenho agora um relacionamento **1 pra N**.

![](assets/img/versao12.png)

Da mesma forma, eu vou te meu relacionamento **N** onde a **Venda** precisa ter 0 ou N Itens (logo mais irei explicar esse numero azul da cor azul), e o **Item** precisa estar associado a 1 e no máximo 1 **Venda**, que é um relacionamento de chave composta, eu tenho **Produto** mais **Venda** se transformando em uma *chave primária* e que pertence apenas a 1 **Venda**.

Esse número zero marcado na cor azul, diz que, por **Venda** e **Item** serem uma entidade fraca, quando estou criando uma **Venda** eu não preciso ter um **Item**, eu posso ter registrado uma venda sem nenhum item, mas isso não faria sentido no mundo dos negócios. **Por que eu vou ter uma venda na qual eu não tenho nenhum item?** Embora no meu entendimento de descrição do meu **DER** eu possa colocar que tem 0 ou N, na pratica isso não vai acontecer, então isso pode ser alterado pra **1** ou **N**, o importante é entender que quando eu estou desenhando eu preciso entender como meu negocio funcionará, e essa visão é importante depois para definirmos os mecanismos de proteção desse meu modelo.

#### Normalização

Quando eu estou modelando, aquele passo onde eu fiz a quebra numa entidade de relacionamento, nós chamamos esse processo de **Normalização**.

Na Literatura nós vamos encontrar normalizações que vão de 1 a 5, ou seja, Primeira a Quinta forma normal. Mas na prática o que é aplicado é a primeira, segunda e a terceira forma normal. O modelo relacional permite que você crie ele sem utilizar nenhuma normalização, mas isso pode gerar alguns problemas no controle e na duplicidade de informação, é pra isso que aplicamos a normalização.

###### PRIMEIRA FORMA NORMAL

![](assets/img/NORMA1.png)

A **primeira forma normal** tem haver com a existência de valores únicos em cada coluna, ou seja, note que eu tenho dois telefones dentro de uma mesma coluna, é possível ter essa informação? Sim! Mas ela não é prática de ser gerenciada, pois eu teria que editar uma unica coluna inteira pra remover ou alterar essa informação. O outro problema que podemos observar é com relação a duplicidade de valor e também o erro de digitação, veja que eu tenho duas informações que aparentemente pertence a uma Profissão de **Vendedor**, mas por um erro de digitação alguém emitiu a **letra "e"** e acabou ficando *Venddor*.

É por isso que se da a necessidade de que apliquemos as normalizações.

Esses são os pontos que precisamos resolver inicialmente, portanto vamos aplicar a primeira forma normal.

![](assets/img/Normalizaçao primeira.png)

Uma vez que eu tenha dois telefones ou duas informações, essa informação precisa ser quebrada em uma nova coluna, veja que agora eu tenho o **Telefone_2.** Ou então eu posso ter uma nova entidade, como por exemplo uma tabela onde eu tenha uma relação de chave estrangeira em que informo que o cliente do código 111 por exemplo possui dois telefones. Eu poderia resolver destas duas formas, nesse caso eu to aplicando a minha 1º forma normal.

###### Segunda forma Normal

![](assets/img/PRIMEIRA FORMA NORMAL.png)

A segunda forma normal resolve aquele problema da digitação errada ou da duplicidade de informação nas linhas, ou seja, onde eu tinha a minha profissão no qual possuía por escrito **Vendedor**, inclusive a palavra errada, eu transformo em uma nova entidade que será chamada de **Profissão**, onde eu vou ter apenas dois cadastros, um registro com o Código do Vendedor, e um registro com Código do Consultor, e ali na minha chave estrangeira eu apenas aponto para a minha entidade que contém a informação. Dessa maneira, se eu digitar errado ou até mesmo alterar a informação, automaticamente todos os registros pertencentes por exemplo ao cadastro 1 serão alterados.

###### Terceira forma Normal

![](assets/img/norma3.png)

A Terceira Forma Normal diz que os valores precisam ser totalmente dependentes das chaves primárias e não podem ser dependentes de valores que não são chaves em meu conjunto.

Neste exemplo, eu tenho na tabela alguns itens. Veja que na linha 1 a minha venda teve uma quantidade 10 e o valor foi de 22, 300, mas eu inclui também o valor Total, observe que esse valor Total é dependente da multiplicação da **quantidade** com o **valor unitário**, ou seja, se eu fizer alguma alteração na quantidade ou no valor, eu teria que criar um mecanismo que altere também o valor Total.

Isso gera uma dependência desses valores que não são chaves, e que são desnecessárias podendo gerar problemas para o meu sistema. Note que se eu não tiver esse mecanismo que faça essa alteração, e caso eu vier a mudar esse valor da quantidade para 11 ainda neste exemplo da linha 1, e mesmo assim não mudar o Total, eu vou ter uma inconsistência de informação. Então essa terceira forma normal é importante de ser aplicada.

![](assets/img/norma33.png)

Neste caso nós temos que remover a coluna Total, e é desta forma que eu estou na terceira forma normal. A partir de então, o meu sistema e NÃO meu banco de dados resolverá esse calculo de **quantidade** vezes **valor** sem criar uma dependência física que cause problemas de informação. Um detalhe que vale a penar mencionar é que, eu só posso estar na *segunda forma normal* se eu já tiver aplicado no meu modelo a *primeira forma normal*, ou seja, primeiro eu preciso aplicar a primeira normalização pra aplicar a segunda, e assim por diante :)

#### SGBDR (Sistema Gerenciador de Banco de Dados Relacional) - SQL

Nós precisamos ter uma linguagem que orquestre todos os mecanismos que controlam esse sistema, então dentro de um sgbdrs eu vou ter vários processos, gravando em discos, gravando em memória, extraindo dados, protegendo dados, verificando permissões, enfim. Mas eu tenho uma necessidade maior que é gerenciar o proprio modelo, realizar a manutenção dos dados e recuperar os dados. E para isso, nos sistemas de banco de dados relacionais foram implantados códigos chamados de SQL que é uma lingugaem estruturada de consulta, além de fazrr outras operações dentro do nosso banco.

O SQL está fundado dentro de três pilares

* **DDL - Data Definition Language**

Ou seja, é o mecanismo que utilizo para criar o dicionário do meu banco, definir as minhas entidades, os relacionamentos e todos meus objetos criados dentro do meu banco.

* **DML - Data Manipulation Language**

Essa linguagem tem ação sobre os dados mas ela é responsável pela manipulação dos dados no termo físico, ou seja, eu posso incluir os meus dados nas minhas tabelas, posso alterar as informações dessas tabelas e remover a linha ou todas as linhas da tabela, enfim, eu posso transformar as informações que tenho nas minhas entidades.

* **DQL - Data Query Language**

É a minha linguagem de consulta de dados, apenas extração e exibição dessa informação.

###### DDL

```sql
Create Table Cliente (
  Codigo number(10) Not Null Primary Key,
  Nome varchar(50) Not Null,
  Telefone varchar(15)
)
```

Quando falamos de DDL, eu tenho por exemplo o comando que cria uma tabela no banco de dados. Há algumas pequenas diferenças entre as versões de sistemas de banco de dados relacionais no mercado, mas meio que esse é o padrão.

Eu tenho o comando auto explicativo que cria a tabela chamada Cliente, onde eu vou ter 3 colunas. A primeira é o Código que o tipo de dados é vai ser numérico, eu estou definindo que essa variável vai poder conter 10 posições numéricas. Não será permitido que eu cria uma linha nessa coluna com o valor nulo, ou seja, esse campo se torna OBRIGATÓRIO! É uma regra do meu banco e que faz parte também das regras de banco de dados relacionais. Além de que também estou definindo que ela vai ser uma Primary Key, ou seja, essa coluna será a chave principal e ela terá um valor único para cada linha dentro da minha tabela.

Em seguida, estou criando uma coluna chamada Nome que seu tipo vai ser Varchar(aceita diversos caracteres) de 50 posições, também será Not Null, pois não faz sentido que eu tenha uma tabela Cliente onde eu tenha o código do cliente mas não tenha o nome, e também há a outra coluna de Telefone com Varchar de 15 posições, e nesse caso eu não to especificando que ela é Not Null, portanto é permitido que tenha um Cliente que não precise adicionar  o Telefone.

###### DML

```sql
Insert into Cliente (Codigo, Nome, Telefone)
values (1, "Lorem Ipsum", "(88) 999 9999")

Delete from Cliente
Where Codigo = 1

Update Cliente
set Nome = "Lorem Ipsum"
Where Codigo = 1
```

Para manipularmos a informação para dentro da tabela, ou até mesmo que já existe na tabela, nós vamos utilizar a DML, que é composta por esses três comandos:

* **Insert**

Neste caso ele vai inserir dentro de Cliente nas colunas Codigo, Nome e Telefone os seus respectivos valores: o código de número 1, o nome Lorem Ipsum e o telefone (88) 999 9999. 

Eu posso omitir colunas no meu Insert, mas quando a coluna for obrigatória, eu vou receber um erro se eu tentar inserir essa informação sem passar o valor para os campos que são obrigatórios. Neste caso, se eu omitir o telefone no insert, ele vai fazer a inserção da linha na tabela com o código e nome do cliente, e vai deixar o telefone em branco ou nulo. 

* **Delete**

Neste caso ele vai apagar da tabela Cliente o registro quando o código for igual a 1

* **Update**

Neste caso ele vai atualizar a tabela Cliente para o Nome recebendo esse novo nome quando o código for igual a 1.

###### **DQL**

```sql
Select Codigo, Nome
from Cliente
<Where> Codigo = 1
  <Group by> Profissao
  <Having> Count(1) > 0
<Order by> Nome, Codigo
```

Neste exemplo eu vou selecionar as colunas Código e Nome da tabela Cliente. Abaixo desses comandos eu posso ter clausulas complementares ao meu comando DQL, onde eu tenho o Where que é meu filtro, ou seja, quando meu codigo for igual a 1, assim eu traria o unico registro pertencente a este codigo. Em seguida, temos o Group By, Having e Order By, elas não são obrigatórias.

##### Query

```sql
Select Codigo, Nome
from Cliente
Where Codigo = 2
Union
Select Codigo, Nome
from Cliente
Where Nome = "Lorem Ipsum"
```

Nós temos aqui uma primeira Query onde eu seleciono Codigo e Nome da tabela Cliente quando o código é igual a 2, e eu vou juntar com outro conjunto de informações que é utilizando o comando Union com o meu segundo Sleect, ou seja, quando eu tiver o primeiro resultado da tabela cliente quando n ome for igual a Loem Ipsum.
