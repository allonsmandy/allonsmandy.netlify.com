---
title: Fundamentos de Arquitetura de Sistemas - Parte 2
description: ' Conceitos de arquitetura em aplicações para Internet'
date: '2020-04-21 09:59:22'
image: assets/img/arquitetura-sistemas-768x512.jpg
category: dev
background: '#88c18c'
---
### Introdução a Arquitetura de Sistemas

#### Tipos de Arquitetura

###### Monolito

Mecanismo mais simples pra gente começar a aplicação, geralmente as aplicações começam com o monolito, ou seja, uma unica aplicação que é desenvolvida e tem acesso ao banco de dados, serviços externos, etc.

![monolito](assets/img/monolitounnamed.png "monolito")

No cenário de monolito acima, nós vamos ter aplicações client, sendo web e mobile, "conversando" com este serviço através de protocolo http e, no caso do exemplo, nós temos uma aplicação que vai ter três instâncias, e essas instâncias vão estar sendo organizadas através de um sistema de orquestração de aplicação, enfim...

Elas vão passar sempre por um **proxy http** e este proxy vai redirecionar para qual instância trabalhar, e estas instâncias estarão conectadas em um banco de dados, podendo ser mais de um banco com base na escalabilidade deste banco.

É interessante ter várias instâncias para que seja distribuida a demanda entre as instâncias, e também por motivos de erro . Se por exemplo a instancia 1 falhar, ainda teriamos a 2 e 3. Portanto, os proximos requests que entrarem neste proxy, ele vai parar de redirecionar para a instância 1 e vai redirecionar para a 2 e 3.

Essa arquitetura é a mais simples porém ela tem alguns pontos falhos no qual veremos depois.

###### MICROSERVIÇOS #1

![](assets/img/microservices.png)
