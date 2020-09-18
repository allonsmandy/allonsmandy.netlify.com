---
title: Arquitetura de software
description: Conceitos e tipos de arquitetura de software
date: '2020-09-17 07:05:10'
image: assets/img/arquitetura-sistemas-768x512.jpg
category: dev
background: '#b49bf1'
---
**Projeto em mais alto nível**

* Foco não são mais unidades pequenas (ex: classes), mas sim unidades maiores e mais relevantes

  * Pacotes, módulos, subsistemas, camadas, serviços....

##### Padrões (ou estilos) arquiteturais

* "Modelos" pré definidos para arquitetura de software

  * Camadas (duas e três camadas)
  * Model-View-Controller (MVC)
  * Microsserviços
  * Orientada a Mensagens
  * Publish/Subscribe



##### Arquitetura em camadas

* As classes são organizadas em módulos de maior tamanho, chamados de camadas
* As camadas são dispostas de forma hierárquica, como em um bolo. Assim, uma camada somente pode usar serviços, isto é, chamar métodos, instanciar objetos, estender classes, declarar parâmetros, lançar exceções, etc, da camada imediatamente inferior

Um exemplo é a arquitetura OSI de redes.

###### Vantagens

* Facilita o entendimento, pois "quebra" a complexidade do sistema em uma estrutura hierárquica 
* Facilita a troca de uma camada por outra (ex: TCP, UDP)
* Facilita o reúso de uma camada (ex: várias aplicações usam TCP)

**Variação 1: Arquitetura em 3 Camadas**

![](assets/img/Frame 1.jpg)

Muito comum na construção de sistemas corporativos, sistemas financeiros, de controle de estoque, etc.

**Variação 2: Arquitetura em 2 Camadas**

* Mais simples

  * Camada 1 (cliente): Interface + lógica
  * Camada 2 (servidor de banco de dados): Banco de dados
* Desvantagem: todo processamento é feito no cliente

##### Arquitetura em MVC (Model-View-Controller)

Propõe dividir as classes de um sistema em 3 grupos

* **Visão**:  classes responsáveis pela apresentação da interface gráfica, como janelas, botões, menus, barras de rolagem, etc
* **Controle**: classes controladoras que tratam eventos produzidos por dispositivos de entrada, como mouse e teclado
* **Modelo**: classes de dados

![](assets/img/Frame 2 (2).jpg)

A interface gráfica na arquitetura mvc é composta tanto pela visão como pelo controller, é como se a interface fosse representada pelas duas coisas que dependem desse modelo.

**Vantagens**

* MVC favorece a especialização do trabalho de desenvolvimento
* MVC permite que classes de Modelo sejam usadas por diferentes Visões
* MVC favorece testabilidade  

###### Diferença entre entre arquitetura 3 camadas e MVC

![](assets/img/Frame 3.jpg)

###### Exemplo: Single Page Applications (SPA)

Aplicações web tradicionais funcionam assim:

* Cliente requisita uma página ao servidor
* Servidor envia página e cliente a exibe
* Cliente solicita nova página, etc.

**Problemas**: Interfaces menos responsivas, mais lentas.

Com as SPA:

* Aplicação roda no browser, é mais independente do servidor e menos "burra"
* "menos burra": manipula sua própria interface e armazena os seus dados
* Pode acessar o servidor para buscar mais dados
* Exemplos: gmail, google docs, facebook, etc

##### Arquitetura orientada a mensagens

A comunicação entre clientes e servidores é mediada por um terceiro serviço que tem a única função de prover uma fila de mensagens

![](assets/img/Frame 4.jpg)

**Vantagens:**

* Tolerância a falhas

  * Não existe mais mensagem: "servidor fora do ar"
  * Assumindo que a fila de mensagens roda em um servidor bastante robusto e confiável
* Escalabilidade

  * Mais fácil acrescentar novos servidores (e mais difícil sobrecarregar um servidor com excesso de mensagens)
* Desacoplamento no tempo e espaço

###### Arquitetura Puslish/Subscribe

As mensagens são chamas de eventos. Os componentes da arquitetura são chamados de publicadores (publishers) e assinantes (subscribers) de eventos. Publicadores produzem eventos e os publicam no serviço de publish/subscribe, que normalmente executa em uma máquina separada.

Assinantes devem previamente assinar eventos de seu interesse. Quando um evento é publicado, os seus assinantes são notificados.

![](assets/img/Frame 5.jpg)
