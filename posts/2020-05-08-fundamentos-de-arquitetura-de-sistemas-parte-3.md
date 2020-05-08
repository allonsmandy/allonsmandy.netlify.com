---
title: Fundamentos de arquitetura de sistemas - Parte 3
description: A arquitetura de aplicações móveis e internet das coisas
date: '2020-05-08 11:48:10'
image: assets/img/arquitetura-sistemas-768x512.jpg
category: dev
background: '#88c18c'
---
#### Conceitos da Internet das Coisas

A internet que conhecemos hoje começou com um projeto chamado ARPANET. Esse projeto visava interconectar os computadores da época, a ideia era conectar os computadores de centros de pesquisas para que os pesquisadores pudessem trocar informações!

A Arpanet cresceu e ao longo dos anos ela começou a não integrar somente centros de pesquisas, mas instituos do govenros, centros de inteligencia militar, e sssa expansao nao parou e hoje nós conhecemos ela como a rede mundial de computadores! :)

Com o advento da internet começaram a surgir os aplicativos, os browsers de navegadores, começamos a consumir video e audios pelo youtube itunes, a participar de comunidades no facebook, trocar mensagens por email, e com a chegada do smarthphone houve uma explosao no numero de aplicativos.

O que todos os aplicativos estão fazendo é utilizando uma rede mundial de comitadores pra poder conectar pessoas.

A interrt nada mais é que uma rede de pessoas conectadas trocando informações. 

É ai que surge a internet das coisas! QUnado as coisas que nao sao pesoas começam a utilizar dessa rede mundial que ja esta funcionando por anos pra poder tambem conectar dados e enviar informaões.

###### Por que conectar coisas?

* Embutir sensores em objeto do dia a dia
* Coletar dados dos sensores
* Usar o dado para tomar decisão

###### Conceitos básicos de IoT

A internet das coisas passa por essas três fases. 

As coisas que é onde a gente quer colocar os nossos sensores, onde a gente quer coletar dados.

A nuvem que é onde a gente quer processar esses dados e armazenar esses dados

A inteligencia que é o processo de utilizar todos esses dados gerados, se beneficar do poder dessa rede, dessas coisas todas conectadas, e utilizar os dados de forma inteligente, pra resolver problemas, otimizar processos, ter vantagem competitiva.

EXEMPLOS DE ONDE PODEMOS IMPLEMENTAR O IOT

SMART BUILDING: As vezes a gente nao para pra pensar na quantidade de informações que eu poderia coletar de um predio, seja residencial, comerial, etc. Há uma série de componentes que compõe a estrutura do edficio.

Smart building é a capacidade de voce conseguir coletar dados desses componentes e utilizar de forma inteligente pra poder melhorar por exemplo a segurança do predio, ou os sistemas de prevençao de incendio, etc.

START HOME: Tem caratceriscaparecia com a anteiro,r onde eu tenho diverso sensores na casa que eu posso coletar dados e monitorar, seja sensor de temepratura, dado de gerenciamento de enrgia da  cas,a ou dados pra acessar casa como fechadura eletronica por exemplo, sistema de alarme que notifica caso ocorra um disparo, entao eu tenho diversos sensores na casa que podem me entrear daos relacionados a isso.

Mas a diferneça é que ele tbm prever a presençar do morador da casa. Pra que eu coleto os dados? pra suprir os moradores da casa e fornecer determinado tipo de sevriço, poderia ter um sensor de tempetuara que ao verificar que to abrindo o portao da garagem ele autoatiamente poderia ligar o ar codicionado e olocar em determinado comodo numa temperatura ais agravel, entao eu tenho essa automaçao que coletando dados do sensores toma uma decisao por mim.

WEARABLES: Cada vez mais comu, eles sao vestiveis, componentes que a gente coloca no corpo e ele caba coletando dado sobre a nossa saude, os nossos habitos, os lugares que frequentamos, nossos horarios, etc.

AGRICULTURE Ja ta bastante impregado principalmente ao que se refere a ter processos produtivos mais sutenciaveis, eu posso ter junto do que to planatando poderia ter um sensor que mediria a umidade do solo e assim eu saberia se poderia aplicar mais ou menos irrigaçao na planta.

SMART TRANSPORTATION: oS veiculos passam a ser agentes que coletam dados de transito, um exemplo é a empresa Tesla

RFID Supply chain: Aqui na verdade é onde o IoT nasceu. Rfid é aquela etiqueta por radio frequencia, onde voce coloca a etiqueta no produto e ao passar por um scanner de raido frequencia lee é detectado.

Toda essa cadeia desde o momento que o produto é produzido até o momento que ele é adqurido pode ser rastreado atraves do rfid.

ENERGY EFFICIENT: COm Iot é possivel começar a coletar dados tanto de fontes geradores de energia como tbm consumidoras criando uma rede de informaçoes iportantepra tomada de decisao..



Como vimos, o IoI ja esta bastante presente em nossa vida. cada vez mais o que veremos é uma quantidade maior de coisas se conectando em uma ede, mandando informaçoes e info

Segnundo mark weiser, nos estamos entrando na era da computaçao obliquea, esse momento é quando os computadores saem do nosso campo de visao, a tecnologia recua para um plano de fundo, e é nesse momento em que a tech se torna mt importante em nossas vidas pois n conseguimos vela de forma facil, com o crescimento de IoT esse processo vai se tornar cada vez mais rapido. Quando a tecnologia se trna realmente eficaz.

###### Desafios da Internet das Coisas

1. Privacidade e segurança
2. Quantidade exponencial de dispositivos conectadas a rede
3. Ser capaz de processar e armazenar uma enorme quantidade de informaçoes
4. Gerar valor a partir dos dados coletados

#### Arquitetura IoT
