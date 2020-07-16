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
