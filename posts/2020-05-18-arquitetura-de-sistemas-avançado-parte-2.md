---
title: Arquitetura de Sistemas Avançado - Parte 2
description: Arquitetura de dados não estruturados e business intelligente
date: '2020-05-18 07:52:45'
image: assets/img/arquitetura-sistemas-768x512.jpg
category: dev
background: '#88c18c'
---
Business Intelligence em Modelos de Dados é o que vai nos dar um norte para modelar os nossos dados em apoio a decisoes estrategicas de uma organizaçao de uma empresa.

o que é B.I? Bi é um conjunto de coisas que vao fornecer ferramentas para gestores, diretores, enfim toda organizaçao de uma empresacomporraçao a tomar decieos extrategicas de negocio, modelo, enfim
sao ferramentas voltadas a toda a conduçao de direotira e de areas de inteligentecia dentro das empresas e organizaçoes

é composto por ferramentas que vao permtiir que essas pessoas q precisam tomar decisoes extrategicas interpretem os dados de maneira pratica e facil de ajudar com essa decisao q precisa tomar ou entender quais rumos dessa operaçao q ele ta controlando. Pra suportar estas ferramentas precisamos de infraestrutura. seriam os servidores pra armazenar ferramentas ou dados, a rede, enfim ,tudo que compoe de infra prasuportar as ferramentas de bi
profissionais corpo tecnico q vai trabalhar dentro desse ecossistema q sao pessoas que tem cunho de analitycs q conseguem manusear os dados e ferramentas, profissionais q irao compor todas as fases e necessidades de um bi
vem os dados por fim q é alvo doq ue iremos discutir novamente

de onde vem os dados para BI? os dados essencilamente dentro de uma corporaçde bi vem inicialemnte dos sistemas de sgbds ou outros q sao sistemas de operaçao, mas sao os dados dos sistemas q estao na operaçao da empresa

os dados q vem desse sistema podem ser complementando com outras infos externas as corporaçoes,e ai sao levantadas pelos profissoes q travalham com bi ou com ajuda das ferramentas q vao incorporar  o ecossistema de bi. essas infos podem vir de uma infinidade de origem q poede ser por exemplo dados gerenciais da nossa propria empresa, emputadas por outros gerentes, indicados de venda, qualquer coisa q ta interna mas nao sao dados geraods pelos sistemas de operaçao

tbm podem vir de pesquisas de campo, levantamento de tendencias de mercado, desejo de consumidos, enfim toda informaçao q pode ser enriquecida para dentro do ecossistema de bi é mt bem vinda pois ela vai compor um grand epoder de decisao nas maos de quem ta gerindo a empresa ou corporaçao
BI - SOLUTION

existem varias soluçoes completas e incopletas de bi, mas se vc desejar completa uma visao basica do q seria necessario é q ela tenha infraestrurua, capacidaede de gerenciamento dos dados, ferramentas q permitam a analise ou exposisao dos dados, deve permite o comportilhamento deses dados,  e ferramentas gerais como controle de acesso, redundancia a falha ou ate alguns aspector de inteligencia artificial q podem ser integrados em soluçoes bi

BI FERRAMENTAS....



DATA WAREHOUSE

quando falamos em modelagem de dados para apoio a BI, inicialmente nós temos o termo data warehouse q é uma estrategia um estilo de modelagem de dados para acomodar os dados de forma q eles sejam eficientes e satisfatorios para apoio ao BI

o CONCEITO DE dw surgiu muito antes de se falar em qualquer outra coisa comp big data ou data lake, e vamos entender elhor pq ele é necessario e como funciona

quando eu estou falando de dw, inicialmente nos entramos com dois conceitos q irao definir os nossos dados a nivel de negocio

OLTP E OLAP

de um lado o oltp representa as transaçoes online, como a propria diz online transition propcwssion, transaçoe s ponto a ponto q acontecem no meu sistema, insert de novo client, att de um produto, insert de uma nova venda



do outro lado tenho o meu modelo q é direcionado a analise dessas infos, a consolidaçao dessses dados para relatorios e ferramentas estrategias q é o online analitc processing

veja q os dois é online, a diferença é q um é baseado em transaao e o outro em analitics

OLTP normalmente tende a atender uma gama mt grande de users, entao eu tenho varios vendedores, sistemas conectados no sistema oltp e estao realziando varias transaçoes ao mesmo tempo

OLAP tende atender uma gama mais reduzida de users, eu tenho diretores, responsaveis por setores de vendas coordenadores, enfim. eu tenho um publico alvo mais reduzido com relaçao ao oltp





em uma visao geral o oltp e olap sao mt  distintos e a distinão passa desde foco, q onde olap é mais focado no nivel estrategico da organizaçao e o oltp é focado mais no nivel operacional

e toda essa visao vai se devindido em termo de performance, nserlao e recuperaçao desses dados, como eu estrututo, como eu armazeno a info, qual a abrangencia, a freqnuencia de att, qual a volatilidade desses dados e os tipos de permissoes q esses dados tem por exemplo de insersao, apenas leitura, alteraçao.

preste atençao na volatilidade, onde olap os dados sao historicos e nao sao volateis, ou seja, nao devem ser alterados só apenas em casso mt raros q precisa alterar uma info consoloiddada de forma errada

o oltp sao volateis, 







pra dar uma compreensao um pouco melhor, nos temos aqui em oltp uma transaçao pontual, transaçoes q acontecem com o select, uodate insert em clausulas mt reduzidas, em um unico registro, meia duzia de registro, 10 registro, enfim sao transaçoes pontuais, inclusao de produto, alteraçao do preço do produto, inclusao de uma venda, faturamento de uma nota fiscal

no olap que a grosso modo sao relatorios consolidados de tudo q eu fiz no meu oltp, por exemplo, um relatorio onde eu consolido por ano e mes, determina regiao, produto, quantidade ventdida e valor faturaod, pra gerar esse relatorio precisa aplicar select q contem clausulas como sum, min, max, uma infiidade de funçoes de grupo e estao acompanhadas por um group by ou qualquer outra funçao q sumarize esse resultado para uma visao mais consolidada. sao dados q uma vez exibidios eles naod everiam mudar, nao tem pq eu ter uma alteraçao no meu quantidade de vendas de janeiro, é algo consolidado e pela logica de negocio n deve mudar







em data waresouhe nos temos a ideia de q eu posso obter essas infos a partir do meu bd oltp, e como posso conseguir?

o primeiro modelo é atraves de sql, consultas, so que essas consultas elas geralmente sao mt pesadas pq exigem grande volume de processamento e muitas veze spode concorrer e prejudicar a concorrencia com o online, o oltp

em outros aspectos vc tem ferramentas q vaoa acessar as infos q vao consumilas ou exibilas de diversas formas e diversas vezes, isso é mt conhecido de dw como cubos, entao meu relatorio pode gerar cubos de visoes q sao projetados em uma dimensinabilidade

nesse exemplo eu tenho 3 dimensoes de cubo de info q é a de tempo, uma dimensiaol atraves da geografica e dos itens q seriam os memmbros do meu cubo,fora o fato de q,, seue tiver q executar querys o tempo todo pra processsar esses cubos se torna mt custoso  para o meu sistema de oltp online essas infos devem ser immutaiveis e tratadas como se fosse uma fotografia consolidada da minha situaçao atual, ou passada, enfim.

veja bem, é mt mais vantahoso tanto de hardware performance concorrencia e visao e disponibilidade para o suaurio final de BI que eu tenha uma estrutura ja consolidada desses dados q é chamada olap ou dw



outros aspecto importante em dw É que vc pode implementar a estrutura de dados num banco de dados relacional ou noSQL (dados nao estruturados) mas o conceito mais impactante q diferencia daquilo q a gente pode ter vistos anteriomente bano de dados transacionais, voltados ao oltp, é q essa estrutura de relacionamento ocupa processamento dentro do meu sistema, entao toda evvz q incluir uma venda eu preciso verificar se o produto existe pelas regras do sistema, eutenho toda uma estrutura q mantem o meu bd relacional e q agora no DW com a consolidaçao eu n tenho mais, entao os inserts sao mt mais rapidos pq n tenho essa verificaçao e nas consultas eu n preciso mais ter o custo do relacionamento do join entre uma tabela e outra pq ja tao consolidadas, eu posso ate ter outras pequenas consultas q sao direcionadas a departamentos olhando para aquele cubo ou para pequenas fraçoes do dw  mas eu ja nao tenho mais necessidade de ter todo esse relacionamento, exceto algumas tabelas de apoio q podem  ate ficar em outro bd relacional q vao controlar por ex o acesso a essa info, estruturas de apoio a essa info mas q n tao ligadas diretamente aos dados q foram gerados pela operaçao em si
