---
title: Como utilizar o Docker
description: 'Comandos, networks, imagens, Dockerfile'
date: '2020-07-14 10:03:14'
image: assets/img/devops_712619128.jpg
category: devops
background: '#B9D030'
---
Olá! (◠‿◠✿)! Vamos conhecer mais a fundo sobre o Docker? [Neste post de Introdução ao Docker](https://allonsmandy.netlify.app/blog/docker/) tem alguns conceitinhos bacanas que recomendo a leitura caso ainda não tenha visto.

###### O primeiro Hello World com o Docker

Após você ter instalado direitinho, abra seu terminal e digite o seguinte:

```powershell
docker run hello-world
```

O comando significa que eu to falando lá para o docker enginee que eu quero criar um container com a imagem do hello-world.

O docker vai tentar encontrar uma imagem localmente, quando ele não encontra nada ele vai e baixa do Docker Hub (lá tem várias imagens que podemos utilizar em nossos projetos). Depois que ele baixa, vai ser exibido uma mensagenzinha no terminal de Hello World! (junto com os passos que o docker executou)

![](assets/img/Captura de tela de 2020-07-14 20-51-26.png)

##### Imagens e containers

Quando você executa o comando acima, o docker vai primeiro verificar se você tem essa imagem localmente que você está tentando rodar, se não tiver ele vai baixar lá do Docker Hub, e essa imagem nada mais é que uma serie de instruções do que você tem que fazer para criar um container, a imagem é como se fosse uma receita que o docker utiliza pra criar o container, no qual vai conter as instruções do Hello World que foi nosso caso.. Em seguida, o container é executado!

![](assets/img/docker pull.png)

###### Layered Filesystem

Toda imagem que você baixa é composta de mais de uma camada, isso pode trazer beneficios, pois uma imagem composta por várias camadas que podem ser reaproveitadas em outras imagens. Por exemplo, baixei a imagem do ubuntu e agora quero do CentOS, se eu quero baixar uma imagem do centOS e compartilhar uma camada que já tem na imagem no ubuntu, o docker vai ser esperto e baixar as camadas que ainda não tem. As camadas baixas de uma imagem são read only, ou seja, bloqueadas pra escrita. Quando criamos um container, não estamos necessariamente escrevendo nas imagens, o container cria uma segunda layer de read/write em que consigo escrever.

Uma vantagem disso é que como tenho uma imagem base, eu posso reutilizar em varios containers, aproveitando só a camada read only e inserindo uma camada de read/write.

###### Volumes

Quando eu removo um container, a camada de dados dele também vai embora. Imagina que eu queira criar um container pra colocar meu banco de dados, os meus logs, então toda vez que esse container for removido ela vai levar junto todos meus dados? Não é isso que quero! Quero fazer com que haja a persistência de dados.

Esse lugar onde salvamos os dados no container são os volumes.

Se eu escrever apenas no container, assim que ele for removido os dados somem. Mas eu posso criar um local especial nesse container, chamado de volume que especifica a pasta que será meu volume de dados. O que eu to fazendo na verdade é apontando essa pasta para uma pequena pasta do Docker host (o docker host é o que está hosteando nossa maquina). Então quando to criando um volume, o que eu to fazendo é criando uma pastinha dentro do meu container dizendo tipo "olha, o que eu escrever nessa pasta do container na verdade eu to escrevendo é no meu docker host"
