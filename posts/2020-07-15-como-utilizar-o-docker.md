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

Os sinal de dois pontos (:) é pra separar o que é o do meu computador pra o que é do meu container.

Neste caso, eu rodei o comando acima e utilizei a flag -it para que já abra o terminal integrado da imagem do ubuntu. Veja o teste:

![](assets/img/Captura de tela de 2020-07-25 22-48-21.png)

![](assets/img/Captura de tela de 2020-07-25 22-49-52.png)

##### Rodando código em um container

Assim como tudo que escrevo no **/var/www** vai parar dentro do **/home/mandy**, tudo que eu escrever no meu **/home/mandy** também vai ser acessível no meu **/var/www**. Imagina que eu tenho um código fonte escrito em node, mas não tenho o node na minha maquina, então eu posso criar um container e colocar meu código pra rodar dentro do container, e se meu container tiver por exemplo o node, eu não preciso ter ele instalado na minha maquina, o meu ambiente de desenvolvimento pode ser dentro do container.

O código utilizado neste exemplo será um simples servidorzinho em nodejs que vai renderizar uma página html: <https://repl.it/@allonsmandy/docker-code-volume>

Como faço então pra criar um container que vai rodar esse código node e pegar o código no desktop e rodar dentro do container? Vamos utilizar os volumes!

```
docker run -d -p 8080:3000 -v "/home/mandy/docker-code-volume:/var/www" -w "/var/www" node npm start
```

Neste comando estou dizendo que quero executar uma imagem do node, visto que preciso de um container com uma imagem baseada no node, e ai eu quero criar um volume que vai pegar minha pasta com os arquivos do meu código em **/docker-code-volume/** e linkar com a pasta **/var/www** lá do container. 

Pra iniciar eu tenho que dar um npm start, certo? Eu poderia usar o terminal iterativo mas como é algo curtinho posso executar logo diretamente. 

Também tenho que disponibilizar a porta **3000** para meu container no lado de fora, utilizando a flag **\-p** em que especifica que a porta **8080** do meu computador será a **3000** do meu container. 

Só com essas informações ele não vai conseguir encontrar o **package.json** pra iniciar, porque quando o container inicia ele da o "start" numa pasta aleatória e não na **/var/www**, por isso tenho que especificar que pasta vou abrir esse meu container, por isso coloquei a flag **\-w**, que especifica qual diretório que vai executar todo esse comando, no caso é onde vai ta meu **package.json**, que é lá na pasta* **docker-code-volume***, só que dentro do meu container essa pasta é a **/var/www**, lembra? Por fim, o **\-d** só pra não travar meu terminal e eu continuar utilizando :)

![](assets/img/Captura de tela de 2020-07-26 07-05-53.png)

Eu posso criar um ambiente de desenvolvimento pra mim todo baseado em container. O container pode ter tudo que preciso, as ferramentas, bibliotecas, e posso até falar pra todo mundo da minha equipe utilizar aquele container que todo mundo vai ter o mesmo ambiente de desenvolvimento, mesma versão do node, php, ferramentas, bibliotecas. :)

##### Dockerfile

Vamos aprender agora a construir nossas próprias imagens. Se você der um `docker images` no terminal verá todas as imagens que você já tem, no meu caso já tenho do ubuntu, hello-world, node e várias outras.

**Se lembra que a imagem é como se fosse uma receita de bolo?** Vamos construir esta nossa receita que vai ensinar ao docker a criar a imagem a partir da aplicação pra poder distribuir pra que ela seja usada em outros locais, por exemplo.

Para isso, precisamos criar um arquivo chamado **Dockerfile**. O código dele ficará assim:

```dockerfile
FROM node:latest 
WORKDIR /var/www 
MAINTAINER Mandy Matos
ENV PORT=3000
COPY . /var/www 
RUN npm install 
ENTRYPOINT ["npm", "start"] 
EXPOSE $PORT
```

A gente começa a montar utilizando o comando de **FROM**, o dockerfile vai montar sua imagem a partir de uma imagem base já existente, você pode criar do zero mas é muito mais comum você aproveitar uma imagem base e adicionar suas modificações. Levando em conta a aplicaçãozinha deste exemplo, a gente precisa do node pra executar o código, certo? Então posso falar que minha imagem vai se basear no node e posso especificar a versão também :) (se não colocar nada ele vai entender que é a ultima versão)

Outra coisa que precisaremos é do **MAINTAINER**, que é quem cuida e quem criou a imagem.

Agora eu vou especificar o que quero que tenha na imagem. Nos comandos anteriores eu colocava o código do **/docker-code/volume/** na pasta **/var/www**, e é isso que farei agora. Podemos mover o código pra dentro da pasta utilizando o **COPY**, ele vai copiar o que você indicar pra dentro da imagem,  então quando você distribuir a imagem pra outra pessoa ele já vai ter esse código fonte embutido. Neste caso, eu quero que os arquivos do diretório que estou sejam copiados para **/var/www.**

Quando to trabalhando com node eu sempre tenho que instalar as dependências do projeto, né? Elas ficam na *node_modules,* mas não quero enfiar essa pasta no container, eu quero que a própria imagem instale as dependências, então assim que a imagem estiver sendo construída eu quero que ele dê um **npm install**, eu consigo fazer isso utilizando o **RUN.** (Agora posso apagar minha pasta node_modules pra não buildar ela)

Podemos dizer também que o container vai utilizar a porta 3000 utilizando **EXPOSE**, note que neste caso foi utilizado as variáveis de ambiente utilizando o **ENV**. 

Quando o container inicia ele sempre executa um comando, o do node por exemplo a gente utilizou o **npm start,** então podemos adicionar essa informação no **ENTRYPOINT** que é o comando que vai ser executado assim que carregar o container.

Eu quero que quando ele der um **npm install** seja na pasta onde esta meus arquivos, que no caso é em **/var/www**, então o meu **WORKDIR** será na pasta **/var/www**, daí assim que meu container carregar o **npm start** vai ser executado nesta pasta.

Vamos buildar a imagem?

```
docker build -f Dockerfile -t allonsmandy/node
```

\-f: diz o nome do arquivo do meu dockerfile, se voce deixa por padrao nao precisa especificar

\-t: como voce quer taguear sua imagem

e aonde estáo contexto que está o dockerfile, como eu tava na pasta só utilizei o .

se tiver ok vai estar no docker images, agora só criar um container a partir desta imagem

docker run -d -p 8080:3000 allonsmandy/node

docker ps

Você pode colocar essa sua imagem no dockerhub para que outras pessoas possam baixar ela e contruir containers a partir dela.

###### Networking

Normalmente uma aplicação é composta por diversas partes, entao é bem costumeiro separar cada pedaço em um container, o banco em um container, a aplicaçao em outra, etc. Assim cada container fica com uma responsabilidade só. Se eu tenho entao 1 pedaço da minha app em cada container, como eu posso fazer pra esses pedaços falarem entre si? Visto que eles tem que conseguir trocar dados pra que consiga funcionar como um todo.

Por padrao no docker existe uma default network que quando voce cria seus containers, por padrao todos estao funcionando na mesma rede.

docker run -it ubuntu 



rodando o ubuntu e da um docker ps no outro container, podemos inspecionar

lá vai ter o network settings que por padrao ele ta em uma rede, que é a bridge, e todo container ja esao por padrao da rede default

hostname -i > ver o ip da rede

no primeiro container eu posso dar um ping no outro container, porem vai dizer queo  ping nao é um comando encontrado no ubuntu, isso porque a imagem do docker so tem o essencial para o ubuntu funcionar, entao nesse caso o ping nao vem instalado

app-get update && apt-get install iputils-ping

agora pode pingar o outro container

veja que ta dando pra fazer a comunicação! :)

Porém, cada hora que subir o container novo ele vai receber um novo ip determinado pelo docker, entao nao é muito util se eu nao saber, e pra saber exatamente eu tenho que configurar o nome do meu container

docker run -it --name meu-ubuntu ubuntu

só que dentro do outro container eu nao posso dar um ping no meu-ubuntu porque a rede default do docker nao permite que voce dê atribua um hostname a um determinado container, ou seja, na rede default eu só posso me comunicar utilizando IPS, se eu criar minha propria rede eu vou poder batizar o meu container de bd, aplicaçao, e com esses nomes eu posso fazer essa conexao, fazendo com que tenha uma camada de abstraçao acima do ip, eu nao preciso dizer pra que ip especificamente conectar, porem isso nao pode ser feito na rede default do docker, so quando crio a minha propria rede.

```
docker network create --driver bridge minha-rede
```

quando to criando uma network eu tenho que dizer qual driver eu quero utilizar, o padrao desse que estamos falando aqui é o de bridge, ele é o mais comum mas voce pode utilizar outros tambem, geralmente o de bridge é o que utilizamos quando queremos fazer com que um container fale com outro, depois que voce especificar o driver é só voce dar um nome pra ela

docker network ls vai listar todos os nomes da minha rede

e quando eu to criando um container, em vez de deixar ele ser associado por padrao  na rede default do docker, ele pode ser atrelado a uma rede que eu especificar 

docker run -it --name meu-container-de-ubuntu --network minha-rede ubuntu

se voce der um docker inspect nele vai ver que na aba de network vai dizer que ele ta atrelado a minha-rede, e se eu criar outro container e atrelar na minha-rede, quando eu der um ping meu-container-de-ubuntu

###### Docker compose

Como subir multiplos containers? Se a aplicaçao começa a crescer e que trablha com diversas comandos, voce precisaria subir os containeirs manualmente e digitar varios comandos, deavnstagens desta abordagem:

* muitas flags para se lembrar
* é muito manual
* facil de errar
* tenho que garantir a ordem, por exemplo, eu tenho que subir o meu banco antes da aplicaçao

O Docker compose vai orquestrar quandoquero subir multiplos containers ele funciona seguindo u marquivo de texto do tipo YML, em que vamos descrever tudo que deve acontecer pra subir a aplicaçao assim eu nao preciso executar muitos comandos no terminal\
todo arquivo de docker compose a promeria coisa é a versao do docker compose

o service um serviço é uma das diferentes partes da nossa aplicaçao, é como se o node fosse um serviço, o banco é outro serviço, o serviço é cada parte da nossa app destrinchada, se eu quero ocntruir 5 contsiners vao ser 5 serviços cada um com nomes especificos

neste caso ele vai construir o primeiro serviço que se chama nginx, ele vai criar a partir de um dockerfile que ele vai procurar nessa pasta,a partir desse contexto da pasta principal e chamo o nome da imagem

quando ele criar um container a partir dessa imagem eu quero que dê um nome de nginx. La no dockerfile do ngix ele travalha com a porta 80 e 443 entao eu falo pra ele exibir a porta 80 e eu posso mapear como fazia antigamente, olha a porta 80 do meu container vai ser mapeada pra porta 1234 do meu hsot, por exemplo.

eu tbm tenho que falar a network que ele vai fazer parte, pois os containers precisam estar na mesma network 

entao eu crio a network fora da camada de services, essa network o nome vai ser minha-rede, e toda network tem que utilizar o driver e neste caso eu coloquei o mesmo visto anteriormente que é o bridge.

quando eu criar o container do ngnix eu ja atribuo a minha network minha-rede

EM seguida criei o serviço de mongo, como o mongo nao vai ser buildado a partir do dockerfile, ele vai ser buildado pela imagem padraodo mongo

Lembra que eu tenho que subir em uma ordem certinha? Eu poso botar que ele dependem que um serviço suba antes deles

Se eu quero construir esses containers eu tenho que garantir que tenho todas as imagens do docker compose, pra isso eu posso adicionar docker-compose build, emqueelevai procurar e executar o yml

docker-compose up vai executar e levantar todos os serviços que especifiquei, todo o passo a passo :)



```dockerfile
version: '3'
services:
  nginx:
    build:
      dockerfile: ./docker/nginx.dockerfile
      context: .
     image: allonsmandy/nginx
     container_name: nginx
     ports:
       - "80:80"
      networks:
       - minha-rede
     depends_on: 
       - "node"
       
    mongo-db:
      image: mongo
      networks: 
        - minha-rede
        
     node:
       build:
         dockerfile: ./docker/books.dockerfile
         context: .
       image: allonsmandy/mybooks
       container_name: books
       ports: 
         - "3000"
       networks:
         - minha-rede
      depends_on: 
        - "mongodb"
        
 networks:
   minha-rede
     driver: bridge
  
```

Comandos e anotações

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
