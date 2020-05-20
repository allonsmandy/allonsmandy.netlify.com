---
title: Arquitetura de Sistemas Avançado - Parte 3
description: Fundamentos de arquitetura de aplicações em nuvem
date: '2020-05-19 07:50:54'
image: assets/img/arquitetura-sistemas-768x512.jpg
category: dev
background: '#88c18c'
---
Arquitetura em nuvem e sua evolução

CLOUD COMPUTING

É um provedor ou serviço q faz o gerenciamento de hadrware  software pra nos, o qe se tinha na empresa antes era uma salinha ou data centers pra q la ficasse os servidores e tivesse auta adisponibilidade e erformance, tinha q profisisonais monitoramento os serviços, backup de eletricidade, etc.

isso acabou se tornando uma coisa custosa, principalmente para de pequeno perto empresa, entao nasceu esse clid coupint, emrpesas q gostariam de seus serviços ao inves de bancarem todos esses funcionarios e infra pra ter tudo isso, eles acabavam adqurindo os serviços de outra empresa po exemplo aws, que iriam prover todo esse suporte :)

* gerenciamneto de hardware e software
* provedores de servidor e armazenamneto
* pague o que consumir
* Iaas, Pass, Baas

IAAS - Infrasctrute as a service

é uma infra coom serviço, o cc nasceu com essa infra como serviço entao se eu quiser ter meu serviço disponivel seja web, telecomunicaçoes, qualquer oitrpo proctoclo que fuja do padrao http, eu posso pegar essas maquina e instalar o que quiser nelas, posso usar aws, digital ocean, localhost

podemos simplesmente adquirir um plano ou paga um valor x conforme for alugando essas maquinas e podemos fazer o que quiser com elas.

posso pegar uma maquina dessas, instalar meu serviço, seja api rest ou etc, disponibilizar um dominio que vai apontar pra essa maquina  e ta la meu site

é basicamente uma infra q eu n preciso ter q prover a infra em si eu so pago o valor x e eu tenho semprea  infra provida pra mim

EVOLUÇAO

PAAS - Platform as a service

nao so eu tenho mais agora a infra como serviço mas tbm toda uma plataforma, que acaba envovlendo n so esssas maquinas disponivel como tbm um meio de automatizar o meu procesos, como eu consigo prover essas maqinas, escalas essas maquinas, etc

isso acabou nos possibilitando ter ferramentas como terraform u cloud fromation q sao ferramentas utilizadas pra prover os serviços q quero utilizar

com o terraform q tem pugin pra cada um desses provedores como exemplo, queeu posso simplesmente ecrever toda minha infra como codigo, na qual no momento q eu rodo o terraform com aquela receita eu consigo pover todas as maqinas que quero

foi evoluido nao so a infra como a plataforma que eu tenha prover essa infra, permite q eu enha facilidade de versionar esse meu codigo assim eu consigo manter o rastreio das mudanças, e posso fazer o rollback se algo der errado

BAAS - Backend as a service, Mobile backend as a service

Um proximo passo que ta mais comum agora pra desenvolvimento mobile, é prover um serviço de backend e isso acaba sendo mt comum pra quem desenvolve app mobile ou ate app pra web, frontends, no qual os profissionais nao tem interesse e nao querem dedicar tanto tempo em desenvolver o back, toda a complexidade de lidar com bd, ficar conectando em google autenticados ou criar manualmente gerando usuarios numa tabela, token, trabalhando com tokens expirados, enfim, toda essa complexidade pra um dev mobile ou front n faz mt sentido, é uma complexidade extra q nao é ofoco

temos o serviço que é o firebase, eu possofocar na minha aplicaçao, ter mais a funcionalidade visual e deixo o firebase fazer todo o resto de backend, lidando com permissoes, autenticaçao, etc.

eu faço todo o meu app lidar com a api do firebase que é troca de comunicaçao utilizando http, json, pra fazer toda uma autenticaçao, conextao de db, toda a comada de segurança provisionada pelo firebase!!

DISPONIBILIDADE

* IaaS - hardware  e internet
* PaaS - auto scale on the go
* BaaS - nao ha backend service

O que o pessoal usa hoje em dia pra disponibilidade de serviço

* Kubernetes 
* Multiplos nodos
* Load balancer

SERVELESS

* sem servidor
* sem serviço "rodando"
* sem down time

seria eu nao ter que cuidar nem de um servidor rodando numa cc. Esse provedor ta garantindo que eu nao preciso nem cuidar do servidor que ta provendo pra mim.

Uma arquitetura serveless eu nao tenho um serviço pra ta executando 24 horas, eu tenho um serviço q conforme eu tenha algum evento alguma coisa q dispare esse serviço esse serviço executa um codigo meu (lambda funcions)

meu serviço nunca vai ta fora do ar pois ele n ta rodando,

ex da aws

se eu quise trabalhar com uma aplicaçao q vai prover uma api rest eu posso usar o api gateway no qual todas as req vai bater nele, ele vai olhar uma lista de rotas previamente setadas, posso usar o terraform pra definir os endpoints no apu gateway por ex,cada endpoint vai ter sua propria config, ou seja, posso dizer q o post/user vai cair num serviço x, essa lamba vail idar com aquele evento camado http no qual o verb é post e o req é /user entao essa lambda func vai receber um event, e a propria aws vai invocar meu codigo chamando func q eu escrevi, meu trabalho é receber esse evento   e fazer oq quiser co ele

o post vai passar por uma valid o user tem permissoa de criar user, psso garantir que ele vai ta conectado em um bd e inserindo o user, etc.

isso garante q eu n preciso ter um serviço rodando, asim eu posso fazer novos reqs e vai subindo lambdas
