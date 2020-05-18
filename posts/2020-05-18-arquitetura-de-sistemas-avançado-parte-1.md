---
title: Arquitetura de Sistemas Avançado - Parte 1
description: Conceitos de integração de sistemas e mensageria
date: '2020-05-18 12:35:01'
image: assets/img/arquitetura-sistemas-768x512.jpg
category: dev
background: '#88c18c'
---
Aprenda o que é e como funciona arquitetura em mensageria

O que é uma arquitetura em mensageria?

![Arquitetura](assets/img/opa.png "Arquitetura")

Uma arquitetura básica sobre o uso de mensagens seria algo assim, imagina que temos aplicações client extenas, web e mobile, que vao fazer comunicaçao atraves de http pra um serviço. esse serviço terá o proxy de entrada, que podera hostear requisiçoees  pro serviço 1 2 e qualquer operaçao isso será gerado uma mensagem, entao possivelmente , esse proxy pode fazer o request para o serviço 1 no qual ele vai se comunicar com uma API, ou com algum outro serviço externo, vai gerar uma mensagem na qual ela pode ser consumida por outros serviços, da mesma maneira pode acontecer com o serviço 2.

Note que neste exemplo de arquitetura eu tenho o prxy http se comunicando com o serviço 1 e 2, no qual eles esta sendo expostos pro mundo externo porém o serviço 3 nao ta linkado neste proxy. Esse é um exemplo de serviço que nao vao ter comunicação direta com o mundo externo, porem é um serviço que esta conectado diretamnete com o message broker. Ou seja, a arquitetura em messageria nos permite que a gente cnonsiga ter serviços q se comunicam com aplicaçoes externas da nossa arquitetura, e ter aplicaçoes que nao se comunicam diretamente  porem elas estao consumindo mensagens de serviços que tiveram essa comunicação entao operaçoes como cadasttro de usuario, a app pode fazer um requset http pelo serviço q vai criar o usuario, apos isso a operaçao, esse serviço responde de volta usuario cadastro com sucesso e possui uma logica de criar uma mensagem no message broker q vai ser espalhado em todos os serviços interessados em ouvir a mensagem sobre cadastro de usuario, assumindo que o serviço 3 seria um serviço de pagamentos por exemplo, esse serviço pode estar sim interessado em ouvir qualquer mensagem de cadastro de usuario 

Pros 

* Desacoplamento -- eu tenho uma arquitetura que os serviços nao se comunicam diretamente entre si, é feita atraves do message broker
* Facil plug e play
* Comunicação assincrona
* Simples escalabilidade
* Broadcasting
* Permite Event Source

Contras

* Single Point of failure - minha arquitetura fica comprometida se o meu serviço de mensageria cai 
* Dificil monitoramento

COMUNICAÇAO ASSINCRONA ENTRE OS SERVIÇOS

Vamos imaginar um cenario bem simples, no qual eu vou ter uma aplicaçao web que vai fazer o request http atraves de um proxy e o serviço numero 1 é o que vai ta recebendo esse request, entao digamos que esse serviço fez alguma operaçao simples e mandou a mensagem para o message broker

esse message broker possui a mensagem do serviço 1. Vamos dizer que o serviço 2 quer consumir todas as mensagens que o serviço 1 ta produzindo entao esse serviço 2 consome essa mensagem, faz determinadas operaçoes e como resultado pode ser que ele queira mandar mais uma mensagen no message broker

dado o outro caso que o serviço 3 deseja receber mensagem dos erviço 2

acaba sendo uma comunicaçao assincrona e desacoplada e indireta entre o serviço 1 e 2, e 2 e 3.





so que esse exemplo parece mais uma comjunicaao lnear 

porem, eu posso chegar num ponto que eu vou comunicaao de srviços mais complexa





vamos suopr que esse serviço 1 fez uma operaçao e escreveu uma mensagem no message broker, porem ao inves de ter só o serviço 2 escutandoo a mensagem ei vou ter o 2 e 3.

e isso ainda pode escalar para um ponto maior



como eu faria pra rastrear por exemplo se o serviço 6 aprensetou um erro, como eu consigoenteder que ele executou umamensagem vinda do serviço 3 q veio do seerviço 1 

sao muitos pontos e acaba sendo complicado ter esse rastreio e ver a raiz do problema

GERENCIANDO ERROS EM UMA ARQUITETURA ASSINCRONA

* Dead letter queue (Filas de re-tentativas)
* Monitoramento entre serviços
* Rastreamento de fluxo

INONSISTENCIA DE DADOS

Imagina um sistema de streaming de videos em q to adquirindo esseplano, eu tenho meu cadastro e agora quero coprar esse plano, dado uma operaçao que to usando app web, eu faço um req pra o serrviço de carteira adicionar meu cartao de credito, preencha as infos na ap web, ela via mandar pra platafomra, o proxy identifica o serviço correto e manda pr ala.

esse serviço de carteira recebeuy, processou, guardou no bd, ele produziu a mesagem "usario mandy agora possui cartao de credito na sua carteira"

digamos que o proximo passo seria de fato nao so ter add o cartao mas chegar e apertar o botao adquriir plano, vou fazer o mesmo fluxp!

imagina que temos um serviço de cobrança, dado que agora eu tenho meu cartao de credito cadastrado e o meu plano ja guardado no sistema, euvou ter um serviço de cobrança que vai ler a mensagem aquisiçao de plano do message broker e vai tentar guardar isso no banco de dados

dai digamos que por esse momento alguma coisa aconteceu na infraestrutura que a mensagem aquisiçao de plano chegou ANTES da adiçao do cartaode credito, entao o serviço de cobrança dado q tem uma logica q faça a cobrando de um valor likado ao plano pra um determiado cartao, se a mensgaem de aquisiçao de cplano chegue antes da de cartao de credito o serviço nao vai saber como fazer determinada operaçao

por isso vai gerar um certto erro por INCONSISTENCIA DE DADOS

nesse gerencimaneot de erro do dead letter queu esse serviço pega ess amensgame, processa, identifica que deu um erro e guarda a mensagem numa fila de re tentativas



num outro momento essa mensgaem vai tentar ser executada de segundo em segundos ou minutes e minutes depende da configuraçao dessa fila, mas se em algum momento essa mensgaem de novo cartaode credito acabar chegando no serviço de cobrança, o serviço de cobrança pode receber essa mensgaem , guardar no banco de daods, e na prxima re tentativa de executar essa aquisiçao de plano  ele vai verificar que o cartao foi eprsitindo no banco e agora vai poder proceder com a logica de cobrança



RASTREAMENTO DE FLUXO

vamos supor que eu tenho mais um request que vem da minha aplicaçao web q foi consumida pelo serviço 1,e le vai gerar varios logs no processanmento e colocar a menasagem no mesage brpker



vamos ter oserviço 2 que ler a mensagem do message broker e por sua vez vai fazer variso processos e gerar varios logos, ele tbm coloca messagem no message broeker, e o terceiro serviço vai ler a mnesgaem, vfazer seu processamento e colocar tbm no message broker

no final das contas mas vamos o requeset q veio de uma app web, e esse reuqest http pasou pelo serviço 1......

eu pego esseslogos dos serviçso, seri IMPORTANTE ter esses daods guuardados em um lugar centralizado no qual tu consiga consumir todos os logs dos serviços e colcoar indexadas em um unico lugar

o ponto importante é coletar todos os serviçpos e armazenar em unico lugar de maneira organizada e dps disso seriainteresante eu pegar um determinada informaçao matadata

eu posso dizer q quando chegar reuqest pro serviçp 1, ele pega o requset e essa operaçao vai ser trigada no requeset gere um id de rastreamento, eu posso atrelar ele a todas as operaçoes

todos os logs gerados por causa da opçeraoacao cadastro de usuarios todos eles terao o tracker id atrelado

no moento q for produzida msg como oresultao da opeçraoa

no final eu vou ter log do serviço 1 2 3 que terao tracke id no seu metadata, agr so ter uma ferramente apropiada de consulta delogos que consigo buscar mais facilente e claramente ese rastreio
