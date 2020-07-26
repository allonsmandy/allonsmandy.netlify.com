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

Este comando significa que eu to falando lá para o docker enginee que eu quero criar um container com a imagem do hello-world.

O docker vai tentar encontrar uma imagem localmente, quando ele não encontra nada ele vai e baixa do Docker Hub (lá tem várias imagens que podemos utilizar em nossos projetos). Depois que ele baixa, vai ser exibido uma mensagenzinha no terminal de Hello World! (junto com os passos que o docker executou)

![](assets/img/Captura de tela de 2020-07-14 20-51-26.png)

##### Imagens e containers

Quando você executa o comando acima, o docker vai primeiro verificar se você tem essa imagem localmente que você está tentando rodar, se não tiver ele vai baixar lá do Docker Hub, e essa imagem nada mais é que uma serie de instruções do que você tem que fazer para criar um container, a imagem é como se fosse uma receita que o docker utiliza pra criar o container, no qual vai conter as instruções do Hello World que foi nosso caso.. Em seguida, o container é executado!

![](assets/img/docker pull.png)

###### Layered Filesystem

Toda imagem que você baixa é composta de mais de uma camada, principalmente se for uma imagem mais complexa, isso pode trazer beneficios, pois uma imagem é composta por várias camadas que podem ser reaproveitadas em outras imagens. Por exemplo, baixei a imagem do ubuntu e agora quero do CentOS, se eu quero baixar uma imagem do centOS e compartilhar uma camada que já tem na imagem no ubuntu, o docker vai ser esperto e só vai baixar as camadas referentes ao CentOS, ele não vai baixar as camadas que já tenho. 

As camadas bases de uma imagem são read only, ou seja, bloqueadas pra escrita. Quando criamos um container, não estamos necessariamente escrevendo nas imagens, o container cria uma segunda layer principal, e essa layer é de read/write em que consigo escrever.

Uma vantagem disso é que como tenho uma imagem base, eu posso reutilizar em varios containers, fazendo com que me traga economia de espaço, aproveitando só a camada read only e inserindo para cada container uma camada de read/write.

###### Volumes

Quando eu removo um container, a camada de dados dele também vai embora. Imagina que eu queira criar um container pra colocar meu banco de dados, os meus logs, então toda vez que esse container for removido ele vai levar junto todos meus dados. Não é isso que quero! Quero fazer com que haja a persistência de dados.

**Esse lugar onde salvamos os dados no container são os volumes.** 

![](assets/img/volumes.png)

Se eu escrever apenas no container, assim que ele for removido os dados somem. Mas eu posso criar um local especial nesse container, chamado de *volume* que especifica a pasta que será meu volume de dados. O que eu to fazendo na verdade é apontando essa pasta para uma pequena pasta do Docker host (o docker host é o que está hosteando nossa maquina). Então quando to criando um volume, o que eu to fazendo é criando uma pastinha dentro do meu container dizendo tipo "*olha, o que eu escrever nessa pasta do container na verdade eu to escrevendo em uma pasta do meu docker host*"

Digite o seguinte comando no terminal:

```
docker run -v "/var/www" ubuntu
```

A flag -v especifica que o caminho é ***/var/www,*** e quando eu criar o container baseado na imagem do ubuntu, ele vai, cria, roda, mas eu posso dar uma inspecionada pra ver se ele conseguiu criar o volume. 

O comando `docker inspect ID_CONTAINER` exibe lá no **Mounts**, o caminho ***/var/www*** do meu container,  no qual vai ser escrito no local do computador do caminho exibido em **Source**, então é neste endereço que o docker automaticamente gerou pra salvar os dados de ***/var/www***. Portanto, quando eu remover o container, essa pasta de source ainda existe, entao o que escrevi no ***/var/www*** vai continuar no meu computador. 

![](assets/img/Captura de tela de 2020-07-25 22-22-52.png)

Eu posso configurar esse endereço **Source** pra outro com o seguinte comando: 

```
docker run -it -v "/home/mandy:/var/www" ubuntu
```

, Os sinal de dois pontos (:) é pra separar o que é o do meu computador pra o que é do meu container.

Neste caso, eu rodei o comando acima e utilizei a flag -it pra já abrir o terminal integrado da imagem do ubuntu. Veja o teste:

![](assets/img/Captura de tela de 2020-07-25 22-48-21.png)

![](assets/img/Captura de tela de 2020-07-25 22-49-52.png)

##### Comandos

`docker ps` \
`docker ps -a docker run ubuntu
docker run -it ubuntu` => coloca o terminal tambem `docker start ID
docker stop ID
docker start -a -i` => conecta com o container e liga o terminal com ele `docker rm ID` => remove o container `docker containe prune` => limpa todos os containers inativos `docker images
docker rmi hello-world` => pra remover imagens `docker run -d -P --name meu-site dockersamples/static-site` => atrela um nome ao inves de id `docker run -d -p 12345:80 dockersamples-static-site` => mapeia uma porta escolhida  => seta uma variavel de ambiente

* Praticando * docker run dockersamples/static-site docker run -d dockersamples/static-site => não atrela o terminal ao processo do meu container docker stop -t 0 ID => passa o tempo de espera pra parar esse container
* linkar uma porta do container para meu computador * docker run -d -P dockersamples/static-site => o docker atribui uma porta para que minha maquina possa acessar docker port ID localhost:32769
* aonde salvar o codigo? logs? dados? *
* Nos volumes!! /var/www criando essa pasta dentro de container que na verdade ta escrevendo no docker host. nao ta sendo escrita na camada fina do container e sim em uma pasta do docker host 

`docker run -v "C:\Users\Mandy\Desktop:var/www" ubuntu` => cria o container com o volume nesta pasta  `docker inspect ID` => infos do container (Mounts => destination)

* rodando codigo no container * docker run -v -d -p 8080:3000 "endereço_da_pasta:/var/www" -w "/var/www" node npm start (diretorio pra executar o comando -w)
* executando comando dentro do outro * docker run -v -d -p 8080:3000 "$(pwd):/var/www" -w "/var/www" node npm start
* Dockerfile *
* FROM -> O dockerfile vai montar sua imagem a partir de outra existente (onde se baseia ela?)
* MAINTAINER -> Quem cuida da imagem, ver se ela ta sendo atualizada
* COPY -> Copia o que voce indicar pra dentro da imagem, entao a imagem ja terá o codigo fonte. Se você distribuir pra outra pessoa ela ja vai ter aquele codigo fonte imbutido na imagem
* RUN -> executa o comando quando a imagem estiver sendo construida
* EXPOSE -> Porta
* ENTRYPOINT -> Carregado assim que for executado o seu container
* ENV -> Setar variavel de ambiente
* WORKDIR -> É onde vai começar!  Assim que meu container carregar, ele carregar nessa pasta pro npm ser exeutado nela

```dockerfile
FROM node:latest WORKDIR /var/www MAINTAINER Mandy 
ENV NODE_ENV=production
ENV PORT=3000
COPY . /var/www 
RUN npm install 
ENTRYPOINT \["npm", "start"] EXPOSE $PORT
```

* buildando a imagem * -t => como voce quer taguear sua imagem? (nome do usuario que criou / nome da imagem) -f => nome do arquivo do meu Dockerfile (não precisa se tiver o nome padrao)

`docker build -f Dockerfile -t mandy/node .`

\-> cada STEP do meu Dockerfile acaba gerando um CONTAINER INTERMEDIARIO -> porque ele ta se aproveitando das camadas que vai fazer parte do final

 **agora que temos a imagem pronta (docker images) da pra criar um container com ela** 

docker run -d -p 8080:3000 mandy/node  docker ps

**_**SUBINDO IMAGEM NO DOCKERHUB PARA COMPARTILHAR SUA IMAGEM COM OUTRAS PESSOAS**__** (crie sua conta no dockerhub)

docker login docker push mandy/node  docker pull mandy/node 

###### Networking

* no docker existe uma default networking, quando voce cria seus containers por padrao todos eles estao funcionando na mesma rede 

hostname -i => ip recebeu atribuido na rede local

o docker cria uma rede default e para cada container que for criar, novos ips. Dentro da rede eles podem se falar pelos ips 

docker run -it ubuntu  apt-get update && apt-get install -y iputils-ping ping OUTRO_IP

\=> a rede default eu só posso me comunicar utilizando IPS, se eu criar minha propria rede poderei  batizar cada container, a partir disso eles se conectam com o nome 

 **criando minha propria rede**   docker network create --driver bridge minha-rede docker network ls

docker run -it --name meu-container-de-ubuntu --network minha-rede ubuntu

docker inspect meu-container-de-ubuntu  "Networks" atrelado a "minha-rede"

docker run -it --name segundo-ubuntu --network minha-rede ubuntu

ping segundo-ubuntu ping meu-container-de-ubuntu

###### Pegando dados do banco

docker pull douglasq/alura-books>cap05 docker run -d -p 8080:3000 douglasq/alura-books:cap05 

docker rm -f 43

docker run -d --name meu-mongo --network minha-rede mongo docker run -d -p 8080:3000 --network minha-rede douglasq/alura-books:cap05 

docker network inspect minha-rede 

###### Docker compose

* orquesta quando quero subir multiplos container 
* ele funciona subindo o .yml

docker run -d -p 1235:00 dockersamples/static-site -- mapeia a porta 12345 do meu computador pra ser a porta 80 do container que vou criar

docker run -d -P -e AUTHOR="Amanda" dockersamples/static-site -- seta uma variavel de ambiente no meu container

docker stop -t 0 $(docker ps -q) -- executa esse docker ps, coloca ele aqui e da um docker stop no que ele retornar, ou seja, para os container rodando ao mesmo tempo
