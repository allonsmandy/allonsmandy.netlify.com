---
title: Arquitetura de sistemas avançado - Parte 4
description: Desenvolvimento e operação de software integrado
date: '2020-05-21 09:26:01'
image: assets/img/arquitetura-sistemas-768x512.jpg
category: devops
background: '#B9D030'
---
O que é devOps?

Antigamente a gente tinha as areas totalmente separadas e cada area tinha sua propria responsabilidade, entao a gente tinha a area de desenvolvimento, a area de operações e as áreas de apoio em geral pra que isso funcionasse bem, como por exemplo QA. Por serem areas isoladas, cada uma dessas areas tinham as suas proprias metas e nao gostavam de assumir a responsabilidade do outro time, eram coisas totalmente separadas, entao uma demanda que saisse da area de devolvimento para a de operações, como por exemplo implantar um software em produção, a area de operação nao colaborava tanto com o time de desenvolvimento e muitas vezes criava mutos bloqueios. muitas vezes isso ia pra are de desenvolvimento e por muitas vezes tornava o processo lento

O devops veio para ajudar a gente com vários conceitos, práticas de automatizaçao pra que a gente consiga integrar melhor esses times e mudar o mdset da galera, e ai com as areas mais integradas a gente consegue atingir uma cultura de colaboraçao e tambem uma entrega mais rapida de valor ao nosso cliente garantindo uma qualidade superior ao nosso produto.

> Devops é um termo criado para definir o conjunto de práticas que integram e automatizam os processos entre as equipes de desenvolvimento, operações e de apoio (como QA) para a produção rápida e confiável de software.
>
> O conceito do DevOps baseia-se em criar uma cultura de colaboração entre as equipes que sempre trabalharam separadas. Devops é uma mudança de mentalidade, uma cultura, um movimento, uma filosofia.

Framework CALMS

esse framework serve pra suportar se agente realmente ta conseguindo aplicar o devops ou nao e ele é definido nos 5 pilares:

* Culture

Todas ferramentas e automações são inúteis se não forem acompanhas pela verdadeira disposição da área de desenvolvimento e operações em trabalhar juntos. Ou seja, não adianta você ter todas as ferramentas de integraçao continua, qualidade, infra como codigo, nao importa a feramenta q vc tenha se quem tiver trabalhando nas areas que ainda sao areas unicas mas que trabalham em conjunto se elas nao estiverem dispostas a colaborar  com essas integraçao e o compartilhamento. A cultura é o pilar mais forte de todos nada acontece se as pessoas envolvidas nao tiverem o mindset adequado ao devops.

Isso porque o devops nao resolve problemas de ferramentas, ele resolve problemas humanos. Ele atua muito conceitualmente na forma de pensar nas pessoas que estao integradas.

* Automation

Automação elimina o trabalho manual repetitivo, produz processos repetíveis e cria sistemas confiaveis. Automatizar gera velocidade na entrega e tornam os envolvidos mais produtivos.

Normalmente, compilação, teste, implementação e provisionamento automatizados são o ponto de partida típico para equipes que ainda não tem isso implantado

* Lean

Precisamos focar nas entregas de valor ao cliente. Precisamos ser objetivos e enxutos, precisamos conhecer as nossas limitações e os gargalos do processo. Precisamos ser Lean. A mentalidade do devops vê oportunidades de melhoria continua em toda parte. Identificando as limitações, podemos otimizar o fluxo, entregando mais velocidade e maior eficiência.

* Measurement

Devops é ciclico e infinito. Mensurar e obter métricas é o ponto de partida para novas melhorias, seja para o processo de desenvolvimento, o software produzido ou as regras de negocio.

Além de gerar conhecimento, métricas criam previsibilidade sobre possiveis incidentes que possam vir a surgir. Assim, temos insumos suficientes para analisar falhas e gerar melhorias constantemente.

* Sharing

O compartilhamento de informações, além de ser saudável, auxilia na descentralização de conhecimento em pessoas dos times, evitando que os processos se tornem dependentes. Compartilhar conhecimento ajuda na criação de times genéricos, com conhecimentos básicos em diversos assuntos do negócio e tecnologias. Assim, o time se torna autossustentável.

OS TRÊS CAMINHOS 

Eles definem basciamente como esses fluxos de entrega devem acontecer. 

* FLOW

A otimização de fluxo visa eliminar desperdicios, gargalos no processo, transferência de responsabilidades e tempos de espera. Esse caminho é trilhado entre a demanda e a entrega em produção. A chave para este caminho é a aplicação de metodologias ágeis e a automatização dos processos do desenvolvimento à release, como a integração contínua e/ou entrega contínua. 

* FEEDBACK

Ciclos rápidos de feedbacks visam resolver problemas o quanto antes, testando tudo, alertando em qualquer falha, considerando todas as métricas coletadas no ambiente produtivo sobre o valor entregado. O monitoramento é a chave, ajudando a gerar informações relevantes constantemente. Com feedbacks rápidos, o negocio consegue falhar rapido, e logo retornar o rumo, caso necessário.

* LEARNING

O aprendizado contínuo visa gerar conhecimento através da experimentação. Hipóteses são melhores do que uma certeza imediata. Este caminho é fruto do processo cientifico e produz segurança psicologica. A chave é o trabalho dinâmico, com times realizando experimentos em seu trabalho diário para gerar novas melhorias.

ENTREGANDO SOFTWARE

Na parte de planejamento a gente tem ferramentas como Microfosoft team, draw.io, balsamiq, clonfluence, que nos ajudam a desenhar soluçao tanto com diagramas como com prototipos, montar roadmap, administrar e gerenciar o quadro kambam. A gente faz um planehamento e ai vai pra codificaçao, na qual teremos varias IDES, visual studio, sublime, git, notepad++, qualquer ferramenta q apoie o desenvolviento do software esta nesta etapa. Na parte de construçao a gente pode ter tecnologias como npm, docker, MSBUILD, nuget. Para o teste tambem teremos uma outra gama de tecnologias como o loader.io, selenium, sonarqube, codacity, postman. 

A release seria:

Planajei, codifiquei, construi, testei, vou disponibilizar esse software para meu cliente.

O deploy seria a implantaçao efetiva em produçao, e ai temos ferramentas que nos ajudam a otimizar toda essa entrega, obtendo o codigo apos a codificaçao, executando o build, test, criando release e fazendo implantaçao em produçao, jenkins, gitlab cli, azure pipelines, travis cli. Automatizar esse ponto pra fazer a sua entrega de software em produçao é por onde a gente começa quando estamos implementando devops, ou seja, ja temos a metodologia agil implantada, ja tem a cultura de desenvolver teste, entao eu vou fazer essa execuçao, fazer a construçao, executar meus testes automaticamente.

E temos a parte de oepraçao que suporta toda implantaçao  que foi feita, podemos ter provedoes cloud como aws, azure, podemos te rprovisionamento dinamico utilizando terraform, puppet, orquestrar containers com kubernetes, rancher.

E depois disso a gente tem ferramentas que ajuda a coletar metricas pra que a gente possa entender o feeedback do nosso software e melhorar constanemnte, como zabbix, prometheus, datadog, rollbar. Essa parte é mt importante pra que a gente saiba se recuperar rapidamente quando houver uma falha.

Esse é mais ou menos o fluxo q agente tem pra entregar um software e fazer isso de fomra continua, no qual eu planejo, codifico, construo, testo, distribuo a minha release, faço implantaçao em produçao, tenho toda uma infra pra suportar minha implatançao em produçao, eu monitoro, coleto feedback e ai com esse feedback gero um novo planejamento e ai entro em um ciclo infinito pra ta desenvolvendo software rapido e com qualidade entregando constante valor com qaulidade para o cliente.



CI/CD Continuos integration

nós temos primeiramente a aplicação onde eu estou liberando um novo codigo, commitando um codigo no meu repositorio, seja no github ou enfim, e a partir dai eu tenho algum gatilho pra acionar minha integraçao continua.

A ic pode ser composta por um pipeline com diversas etapas, essas etapas podem ser as mais diversas possiveis que voce poderá definir de acordo com o seu projeto, porem temos como as principais a etapa de contruçao, teste unitario, a analise da qualidade do seu codigo e o empacotamento da sua release, o que vai realmente estar deployado para produçao, entao a ic temc omo limite  ageraçao do artefato, ela nao faz a implantaçao em produçao, e ai a gente começa a ir para a implantaçao continua que é uma opçao em paralelo com a ic, no exemplo da continuous deployment o deploy é feito automaticmaent,e apos o meu pipeline de int cont a implat cont é feita de maneira automatica e a app esta no ambiente q vc deseha, seja de homol, produçao, etc.

A etapa de entrega continua ou cotinuos delivery é mt parecida com a etapa de implantaçao contua, porem ela necessita de um aprovador no meio do caminho para q sua app seja aplicada em prod ou em outro ambiente.
