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

PROS

* Baixa complexidade
* Monitoramento simplificado

CONTRA

* Stack unica
* Compartilhamento de recursos
* Acoplamento
* Mais complexo a escalabilidade

###### MICROSERVIÇOS #1

![](assets/img/microservices.png)

Uma outra arquitetura comum e que se fala muito é o de Microserviços.

Existem diversas maneiras de se fazer microserviços, há muitos meios e estratégias pra se trabalhar com ele.

Neste caso há o "template" do exemplo de um microserviço que neste caso é o mais caótico.

Diferente do monolito que eu tinha uma única aplicação e que eu só tinha mais instâncias da mesma aplicação pra atender a demanda, nos microserviços eu vou ter um serviço para cada alteração.

Assim como no monolito, o serviço 1 pode acabar recebendo uma grande demanda de acesso, então uma unica instância do serviço 1 pode não ser suficiente. Portanto, ele pode ser escalado dentro do proprio Nodo 1.

Cada caixa pequena do Nodo seria mais ou menos como funciona o monolito, então neste caso eu aumentei a complexidade que agora eu tenho varios serviços (antigamente eu tinha um serviço na arquitetura de monolito) e esses varios serviços precisam ter uma certa comunicação.

No monolito é simplesmente código, como eu tenho uma unica base de codigo, eu vou ter comunicaçao de uma funcionalidade com outra funcionalidade através de chamada de codigo do sistema. Nesse caso eu posso ter o sistema de autenticação no serviço 1 e o sistema de pagamento no serviço 2, só que como eu vou fazer o serviço de pagamento sem estar relacionado ao usuario? O serviço 1 e 2 precisam estabelecer algum tipo de comunicação!

E o que acontece neste caso é que o serviço 1 pode acabar chamando diretamente o serviço 2, pode ser por exemplo pelo protocolo http, entao pensando em um sistema de microserviços deste exemplo, nós podemos ter Clients: web ou mobile acessando este proxy, o proxy http vai verificar qual o serviço responsavel por aquela determinada operação e ai vai redirecionar para o serviço 1 ou para o 2. Neste exemplo o serviço 3 é um serviço interno que nao possui a camada http de comunicação com as aplicações web e mobile. Assim como o serviço 1 e 2, o serviço 3 tem a comunicaçao direta entre eles.

PROS

* Stack dinâmica
* Simples escalabilidade

CONTRA

* Acoplamento
* Monitoramento mais complexo
* Provisionamento mais complexo

###### MICROSERVIÇOS #2

![](assets/img/microservices2.png)

Este outro modelo de microserviços é uma arquitetura na qual ainda teremos serviços, ainda vamos ter a camada http sendo respondidos pelo serviço 1 e 2, e a unica diferença é que agora nós não temos mais aquele canal de comunicação direta entre o serviço 1 e 2, e entre o 2 e 3. Nesse caso a gente vai ter um Message Broker, a vantagem disso é que nós não vamos ficar presos a um serviço que está acorrentado diretamente no outro e tudo vai passar por um Message Broker.

Se o serviço 1 precisa se comunicar com o serviço 2, mas por algum motivo o serviço 2 está fora do ar, o serviço 1 não vai mais quebrar, pois qualquer operação que ele for fazer  é completamente independente e desacoblado do serviço 2. Porém qualquer informação que o serviço 1 precise passar adiante, ele vai botar uma mensagem no Message Broker e quando o serviço 2 estiver online, ele vai no Message Broker buscar estas mensagens, interpretar elas e fazer uma determinada operação.

A desvantagem é que a plataforma meio que fica refém deste Message Broker, e se ele apresentar algum problema a arquitetura inteira sofre as consequencias.

PROS

* Stack dinâmica
* Simples escalabilidade
* Desacoplamento

CONTRAS

* Monitoramento mais complexo
* Provisionamento mais complexo

###### MICROSERVIÇOS #3

![](assets/img/microservices3.png)

Esta arquitetura é um pouco diferenciada da anterior. 

Nós temos os Clients fazendo a comunicação http, só que ao invés do Proxy http redirecionar o request para um determinado serviço, ele vai passar diretamente por um gerenciador de pipeline. A ideia disso é eu ter uma aplicação no qual ela terá determinadas funcionalidades e cada funcionalidade tem um certo passo para seguir. 

Neste exemplo eu tenho o serviço 1 que depende do banco de dados 1, o serviço 2 que depende de um serviço externo (ex: sistema de pagamentos) e o serviço 3 que depende de outro banco de dados, ou seja, eu posso ter coisas totalmente desacopladas e cada serviço ter uma responsabilidade bem especifica, fazendo com que eu possa ter o menor código possivel, evitando assim bugs e aumentando a qualidade.

Com essa arquitetura a request entra no proxy, passa pelo gerenciador de pipeline, esse gerenciador vai ver em que pipeline deve seguir a determinada request e ai ele vai e começa a pipeline pelo primeiro passo.

O primeiro passo pode ser a comunicação com o serviço 1, ele vai executar o que precisa ser feito, a resposta vai ser enviada pelo gerenciador de pipeline, caso ocorra um erro ele vai tratar esse erro e devolver para o Client, se não, ele vai pegar essa resposta e vai passar pelo serviço 2, que por sua vez vai fazer alguma determinada alteração e se tiver sucesso ele passa para o serviço 3, e assim por diante até terminar o pipeline.

Encerrando o pipeline ele vai pegar a resposta e devolver para o Client.

Desse modo, diferente da arquitetura anterior que continha o Message Broker, os serviços estão desaclopados entre eles, porém se o serviço 2 tiver fora do ar naquele momento, o serviço 1 vai fazer o seu passo, o gerenciador de pipeline vai tentar passar para o serviço 2 e ai ele vai acabar quebrando, já que o serviço vai estar fora do ar então isso acarretará em um erro.

A importância de ter um gerenciador de pipeline é que, caso o serviço 2 por exemplo dê um erro, este gerenciador tem que estar apto a saber que falhou neste deterinado serviço, e assim ele tem que saber voltar para o serviço 1 e reverter aquilo que já foi feito pra não gerar nenhuma inconsistência no sistema.

Se no passo 1 o usuario fez a autenticação, no passo 2 ele efetuou o pagamento só que no passo 3 acontece algum erro, tem que estar apto a voltar e reverter o pagamento do usuario.

PROS

* Stack dinâmica
* Simples escalabilidade
* Desacoplamento
* Menor complexidade

CONTRA

* Provisionamento mais complexo
* Plataforma inteira depende do gerenciador de pipeline

GERENCIAMENTO DE ERROS E VOLUME DE ACESSO

Todas as arquiteturas sempre tem em comum o gerenciamento de erros e volumes de acesso, de nada adianta uma arquitetura que parece ser simples de visualizar e manter, se ela não tem um gerenciamento de erro ou um gerenciamento correto de um grande volume de acesso.

Gerenciamento de erros

Onde é mais complexo:

* Processos assíncronos (Microserviços #2)

  Como eu tenho comunicação assincrona, no momomento que um serviço recebeu aquela mensagem e ele gerou um certo erro, não tem como eu voltar e fazer uma reversão do passo anterior. O erro aconteceu ali e ali mesmo ele ficou completamente isolado.
* Pipeline

  No meio da pipeline se houver um problema em algum passo, esse passo tem que saber a reversão como tem que saber reversão dos passos anteriores, e isso muitas vezes pode se tornar complexo.

Solução

* Dead letter queue

  Cria uma fila separada do Message Broker, e toda vez que é processada a mensagem e ela gera um erro, eu pego essa mensagem e coloco nessa fila, dai eu tento processar a mensagem novamente. 
* Filas de re-tentativas
