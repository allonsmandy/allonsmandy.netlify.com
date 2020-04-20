---
title: Fundamentos de Arquitetura de Sistemas - Parte 1
description: vantagens e desenvolvimento de web services
date: '2020-04-20 08:09:30'
image: assets/img/arquitetura-sistemas-768x512.jpg
category: dev
background: '#88c18c'
---
#### Vantagens e desenvolvimento de Web Services

O que são Web Services?

Serviços Web ou Web Services são soluções para aplicações se comunicarem independente de linguagem, softwares e hardwares utilizados.

Inicialmente Services Web foram criados para troca de mensagens utilizando a linguagem XML (Extensible Markup Language) sobre o protocolo HTTP sendo identificado por URI (Uniform Resource Identifier)

Podemos dizer que Serviços Web são API's que se comunicam por meio de redes sobre o protocolo HTTP

Uma aplicacao x que ela tem um banco de dados, e ai temos outra aplicaçao a Y que acessa seu banco de dados, e essas aplicaçoes preicsam se comunicar, só que essas aplicaçoes sao de empresas diferentes, em redes diferentes, bandos de dados diferentes, linguagens diferentes, como elas podem se comunicar nesse cenesarui?

o web service ele vai ter acesso ao  banco de dados, a diferença é que ele vai expor uma uri para que a aplicaçao x consiga fazer o acesso, entao ao inves dela ir direto ao banco ela vai ao web service, e o web service vai fazer troca de mensagem com a aplicaçao y, seja com json, xml, graphql, etc

essa linguagem de marcaçao é meio que universal, entao voce pode escrever um web service em python e ter a aplicaçao em java que ela vai saber se comunicar.

toda essa comunicao é pelo protocolo http e por uma uri 

entao a aplicaçao Y vai fazer uma requisiçao http pro web service, o web service vai pegar essa requiçao, ele vai no bd faz a consulta e deve para a aplicaçao y.

aentao temos uma integraçao universal, qualquer aplicacao pode integrar, melhora a segurança pois o banco de dados está guardado lá, e tem velocidade nas integraçoes!



a aplicaçao y quer retorna um endereço





vantagens

linguagem comum 

integraçao

reutilizaçao de implementaçao

segurança

custos

principais tecnologias

soap

rest

xml

json

###### ESTRUTURA SOAP

Soapo - Simple object Access Protocol

É um protocolo baseado em XML para acessar serviços web principalmente por HTTP

Pode-se dizer que soap é uma definiçao de como serviços web se comunicam

Foi desenvolvido para facilitar integrações entre aplicações

VANTAGENS

Permite integraçoes entre aplicaçoes, independente de linguagem, pois usa como linguagem comum o XML

É independente de plataforma e software

Meio de transporte generico, ou seja, pode ser usado por outros protocolos além do http



XML - Extensible markup language

É uma linguagem de marcaçao criada na decada de 90 pela w3c

facilita a separaçao de conteudo, ja que ele possui tags, e atraves delas voce consegue seprar bem o que voce ta enviando de mensagem

nao tem limitaçao de criaçao de tags, ou seja, voce consegue mandar muitos atributos

linguagem comum para integrações entre aplicações, entao fica muito facil interagir com as aplicaçoes utilizando xml, é uma linguagem simples de manipular



O soap message possui uma estrutura unica que deve sempre ser segyuda



o soap envelope é o primeiro elemento do documento e é usado para encapsular toda a mensagem SOAP

O SOAP HEADER é o elemento onde possui informações de atributos e metadados da requisiçao

o soap body é o elemento que contém os detalhes da mensagem