---
title: Como utilizar o Docker
description: 'Imagens, volumes, networks, Dockerfile, Docker Compose, Comandos gerais'
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

Este comando significa que eu to falando lá para o docker enginee que eu quero criar um container com a imagem do **hello-world.**

O docker vai tentar encontrar uma imagem localmente, quando ele não encontra nada ele vai e baixa do Docker Hub (lá tem várias imagens que podemos utilizar em nossos projetos). Depois que ele baixa, vai ser exibido uma mensagenzinha no terminal de Hello World! (junto com os passos que o docker executou) ^_^

![](assets/img/Captura de tela de 2020-07-14 20-51-26.png)

##### Imagens e containers

Quando você executa o comando acima, o docker vai primeiro verificar se você tem essa imagem localmente que você está tentando rodar, se não tiver ele vai baixar lá do Docker Hub, e essa imagem nada mais é que uma serie de instruções do que você tem que fazer para criar um container, a imagem é como se fosse uma receita que o docker utiliza pra criar o container, no qual vai conter as instruções do Hello World que foi nosso caso. Em seguida, o container é executado!

![](assets/img/docker pull.png)

###### Layered Filesystem

Toda imagem que você baixa é composta por mais de uma camada, principalmente se for uma imagem mais complexa, isso pode trazer benefícios, pois uma imagem é composta por várias camadas que podem ser reaproveitadas em outras imagens. Por exemplo, baixei a imagem do ubuntu e agora quero do CentOS, se eu quero baixar uma imagem do centOS e compartilhar uma camada que já tem na imagem no ubuntu, o docker vai ser esperto e só vai baixar as camadas referentes ao CentOS, ele não vai baixar as camadas que já tenho. 

As camadas bases de uma imagem são **read only**, ou seja, bloqueadas pra escrita. Quando criamos um container, não estamos necessariamente escrevendo nas imagens, o container cria uma segunda layer principal, e essa layer é de **read/write** e é nela que eu consigo escrever.

![](assets/img/layer.png)

Uma vantagem disso é que como tenho uma imagem base, eu posso reutilizar em vários containers, fazendo com que me traga economia de espaço, aproveitando só a camada **read only** e inserindo para cada container uma camada de **read/write.**

##### Volumes

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
LABEL maintainer="Mandy Matos"
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
docker build -f Dockerfile -t allonsmandy/node .
```

**\-f**: Diz o nome do arquivo do meu Dockerfile, se você deixa por padrão não precisa especificar, mas se colocar por exemplo node.dockerfile, precisa passar essa flag

**\-t**: como você quer taguear sua imagem, nesta caso, *seu_nome/nome_da_imagem*

E por fim, aonde está o contexto que está o meu arquivo dockerfile, como eu estou na pasta só utilizei o . (ponto)

![](assets/img/Captura de tela de 2020-07-26 07-26-22.png)

Se tiver tudo ok vai estar no Docker images, agora só criar um container a partir desta imagem. Bora?

```
docker run -d -p 8080:3000 allonsmandy/node
```

![](assets/img/Captura de tela de 2020-07-26 07-28-16.png)

Como a minha porta 8080 já estava sendo usada por outro container, eu tive que matar ele e subir o outro com a minha imagem!

![](assets/img/Captura de tela de 2020-07-26 07-31-41.png)

Você pode colocar essa sua imagem no Docker Hub para que outras pessoas possam baixar ela e construir containers a partir dela.

###### Networking

Normalmente uma aplicação é composta por diversas partes, então é bem costumeiro separar cada pedaço em um container, como por exemplo o banco em um container, a aplicação em outra, etc. Assim cada container fica com uma responsabilidade só. Se eu tenho 1 pedaço da minha aplicação em cada container, como eu posso fazer pra esses pedaços falarem entre si? Visto que eles tem que conseguir trocar dados pra que consiga funcionar como um todo...

Por padrão no docker existe uma **default network** que quando você cria seus containers, por padrão todos estão funcionando na mesma rede.

```
docker run -it ubuntu
```

Se você rodar o ubuntu e em seguida dar um `docker ps` em outro terminal nós podemos inspecionar ele utilizando o `docker inspect ID_CONTAINER`

Lá vai ter o **Network Settings** que por padrão está em uma rede, que é a **bridge**, e todo container já está por padrão na rede default.

![](assets/img/Captura de tela de 2020-07-26 07-36-42.png)

![](assets/img/Captura de tela de 2020-07-26 07-37-23.png)

No terminal dentro do meu container do ubuntu eu posso adicionar o comando `hostname -i` e ver o ip da rede.

![](assets/img/Captura de tela de 2020-07-26 07-38-16.png)

Vamos fazer uns testes. Vou criar dois containers da imagem do ubuntu e já abrir no modo iterativo (docker run -it ubuntu), o **primeiro container** e o **segundo container.**

No **primeiro container** eu posso dar um ping no do **segundo container**, porém vai dizer que o  ping não é um comando encontrado no ubuntu, isso porque a imagem do docker só tem o essencial para o ubuntu funcionar, então nesse caso o ping não vem instalado, mas é super simples resolver isto! Só digitar o comandinho abaixo no ubuntu que desejar utilizar o comando ping :)

```
apt-get update && apt-get install iputils-ping
```

Agora posso pingar o outro container. Veja que agora ta dando pra fazer a comunicação! :)

![](assets/img/Captura de tela de 2020-07-26 07-47-22.png)

Porém, cada hora que subir o container novo ele vai receber um novo ip determinado pelo docker, então não é muito útil se eu não saber dependendo do que eu for fazer, que neste caso é conectar as partes de minha aplicação. Pra saber exatamente eu tenho que configurar o nome do meu container.

```
docker run -it --name meu-primeiro-container ubuntu
```

Só que dentro do outro container sem nome eu não posso dar um **ping meu-primeiro-container** porque a rede default do docker não permite que você atribua um hostname a um determinado container, ou seja, na rede default eu só posso me comunicar utilizando IP, se eu criar minha própria rede eu vou poder batizar o meu container de banco de dados, aplicaçao, etc, e com esses nomes eu posso fazer essa conexão, fazendo com que tenha uma camada de abstração acima do ip, assim eu não preciso dizer pra que ip especificamente conectar.

Porém isso não pode ser feito na rede default do docker, só quando crio a minha própria rede.

```
docker network create --driver bridge minha-rede
```

Quando  eu to criando uma network, eu tenho que dizer qual driver eu quero utilizar, o padrão desse que estamos falando aqui é o de **bridge**, ele é o mais comum, mas você pode utilizar outros também, geralmente o de bridge é o que utilizamos quando queremos fazer com que um container fale com outro. Depois que você especificar o driver é só dar um nome pra sua rede.

Para listar todos os nomes da sua rede você pode utilizar o seguinte comando:

```
docker network ls
```

Quando eu to criando um container, em vez de deixar ele ser associado por padrão na rede default do docker, ele pode ser atrelado a uma rede que eu especificar. 

```
docker run -it --name primeiro-container --network minha-rede ubuntu
```

Se você der um docker inspect nele, vai ver que na aba de network irá conter que ele está atrelado a **minha-rede.** Se eu criar outro container e atrelar na **minha-rede**, posso dar um **ping primeiro-container**

![](assets/img/Captura de tela de 2020-07-26 08-02-21.png)

![](assets/img/Captura de tela de 2020-07-26 08-02-42.png)

###### Docker compose

Como subir múltiplos containers? Se a aplicação começa a crescer, você acaba tendo que trabalhar com diversos comandos, portanto precisaria subir os containers manualmente e digitar vários comandos, desvantagens desta abordagem:

* muitas flags para se lembrar
* é muito manual
* fácil de errar
* tenho que garantir a ordem, por exemplo, eu tenho que subir o meu container do banco antes da aplicação

**O Docker Compose vai orquestrar quando quero subir múltiplos containers**. Ele funciona seguindo um arquivo de texto do tipo **YML**, em que vamos descrever tudo que deve acontecer pra subir a aplicação, assim eu não preciso executar muitos comandos no terminal. Veja um exemplo de arquivo do docker compose para analisarmos e estudarmos juntos.

```yaml
version: '3'
services:
  nginx:
    build:
      dockerfile: ./docker/nginx.dockerfile
      context: .
    image: allonsmandy/nginx
    container_name: nginx
    ports:
      - "1234:80"
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

\
A primeira coisa a se colocar no arquivo do docker compos é a versao do dele, neste caso é a versão 3.

No **services** é onde você vai colocar um serviço, que é uma das diferentes partes da nossa aplicação, é como se o node fosse um serviço, o banco outro serviço. O serviço é cada parte da nossa aplicação destrinchada, se eu quero construir 5 containers, vão ser 5 serviços, cada um com nomes especificos

Neste caso, ele vai construir o primeiro serviço que se chama **nginx**, que vai criar a partir de um dockerfile na qual irá procurar na pasta especificada no build, e a partir desse contexto da pasta principal eu chamo o nome lá da imagem. 

Quando ele criar um container a partir dessa imagem, eu quero que dê um nome de **nginx**. La no dockerfile do nginx ele trabalha com a porta 80 e 443, então eu falo pra ele exibir a porta 80 (só irei utilizar ela mas poderia colocar mais) e posso mapear da mesma forma que fazia antigamente. A porta 80 do meu container vai ser mapeada pra porta 1234 do meu host, por exemplo.

Eu também tenho que falar a network que ele vai fazer parte, pois os containers precisam estar na mesma network.

Eu crio a network fora da camada de services, o nome dela vai ser **minha-rede**, e toda network tem que utilizar o driver que neste caso eu coloquei o mesmo visto anteriormente que é o bridge.

Quando eu criar o container do **ngnix** eu já atribuo a network **minha-rede** a ele.

Em seguida criei o serviço de **mongo**, o mongo não vai ser buildado a partir do dockerfile, ele vai ser buildado pela imagem padrão do mongo.

Lembra que eu tenho que subir em uma ordem certinha? Eu posso botar que eles dependem que um serviço suba antes deles.

Se eu quero construir esses containers eu tenho que garantir que tenho todas as imagens do docker compose, pra isso eu posso adicionar `docker-compose build`, e então ele vai procurar e executar o yml.

Executando `docker-compose up` ele vai levantar todos os serviços que especifiquei, vai criar todo o passo a passo descrito :)

Neste exemplo, se eu rodasse agora localhost:1234 já exibiria direitinho a aplicação exemplificada. E se eu rodasse no terminal `docker-compose ps` eu poderia visualizar os meus containers rodando direitinho!

###### Comandos e anotações simplificadas

`docker version` -> Exibe a versão do docker que está instalada\
`docker ps` -> Exibe os containers em atividade\
`docker ps -a`  -> Exibe todos os containers criados, incluindo os que estiverem parados.\
`docker run ubuntu` -> Executa um container utilizando a imagem do ubuntu`
docker run -it ubuntu` -> Executa a imagem do ubuntu e em seguida já integra o terminal dele\
`docker start ID_CONTAINER` -> Ativa meu container`
docker stop ID_CONTAINER` -> Para meu container`
docker start -a -i ID_CONTAINER` -> Ativa meu container e liga o terminal com ele, possibilitando interação entre ambos \
`docker rm ID_CONTAINER` -> Remove o container \
`docker container prune` -> Remove todos os containers que estão parados \
`docker images` -> Exibe todas as minhas imagens`
docker rmi NOME_DA_IMAGEM` -> Remove alguma imagem \
`docker run -d -P --name meu-site dockersamples/static-site` -> Atrela um nome ao container\
`docker run -d -p 12345:80 dockersamples-static-site` -> Define uma porta específica para ser atribuída à porta 80 do container, neste caso 12345.\
`docker stop -t 0 ID_CONTAINER` -> Passa o tempo de espera pra parar esse container, neste caso é 0\
`docker run -d -P dockersamples/static-site` -> O docker atribui uma porta para que minha maquina possa acessar \
`docker port ID_CONTAINER` -> Exibe a porta do meu container\
`docker build -f Dockerfile` -> Cria uma imagem a partir de um Dockerfile\
`docker build -f Dockerfile -t NOME_USUARIO/NOME_IMAGEM` -> Contrói e nomeia uma imagem não-oficial

![](assets/img/Captura de tela de 2020-07-26 08-51-17.png)

`docker run -v "C:\Users\Mandy\Desktop:var/www" ubuntu` -> Cria o container em que os dados salvos em var/www sejam salvos no meu diretorio local do Desktop\
`docker inspect ID_CONTAINER` -> Informações do container

**DOCKERFILE**

```dockerfile
FROM
  dockerfile vai montar sua imagem a partir de outra existente (onde se baseia ela?)
LABEL
  Quem cuida da imagem, ver se ela ta sendo atualizada
COPY
  Copia o que voce indicar pra dentro da imagem, entao a imagem ja terá o codigo fonte. Se você distribuir pra outra pessoa ela ja vai ter aquele codigo fonte imbutido na imagem
RUN
  Executa o comando quando a imagem estiver sendo construida
EXPOSE
  Porta
ENTRYPOINT
  Carregado assim que for executado o seu container
ENV
  Setar variavel de ambiente

WORKDIR
  É onde vai começar!  Assim que meu container carregar, ele carrega nessa pasta para o npm ser executado nela
```

**Buildando a imagem** 

`docker build -f Dockerfile -t allonsmandy/node .`

 **Agora que temos a imagem pronta (docker images) da pra criar um container com ela** 

`docker run -d -p 8080:3000 allonsmandy/node`

`docker ps`

**_**SUBINDO IMAGEM NO DOCKERHUB PARA COMPARTILHAR SUA IMAGEM COM OUTRAS PESSOAS**__** (crie sua conta no dockerhub)

**Subindo sua imagem no Docker Hub para compartilhar com outras pessoas**

* Crie sua conta no dockerhub
* `docker login`
* `docker push allonsmandy/node`
* `docker pull allonsmandy/node (baixa a imagem)`

###### Networking

No docker existe uma default networking, quando voce cria seus containers por padrao todos eles estao funcionando na mesma rede 

`hostname -i` => ip que o container recebeu e que foi atribuido a ele na rede local (funciona apenas dentro do container)

O docker cria uma rede default e para cada container que for criar, cria novos ips. Dentro da rede eles podem se falar pelos ips 

Na rede default os containers só podem se comunicar utilizando IPS, se eu criar minha própria rede poderei  batizar cada container, e a partir disso eles se conectam com o nome 

**Criando minha propria rede**

`docker network create --driver bridge minha-rede `\
`docker network ls`\
`docker run -it --name meu-container-de-ubuntu --network minha-rede ubuntu`\
`docker inspect meu-container-de-ubuntu`  -> "Networks" atrelado a "minha-rede"\
`docker run -it --name segundo-ubuntu --network minha-rede ubuntu`\
`ping segundo-ubuntu `\
`ping meu-container-de-ubuntu`

**Docker compose**

* Orquestra quando quero subir múltiplos container 
* Ele funciona subindo o arquivo .yml

`docker run -d -p 1235:00 dockersamples/static-site` -> Mapeia a porta 12345 do meu computador pra ser a porta 80 do container que vou criar\
`docker run -d -P -e AUTHOR="Amanda" dockersamples/static-site` -> Seta uma variável de ambiente no meu container\
`docker stop -t 0 $(docker ps -q)` -: Executa esse docker ps, "armazena" os resultados ele e da um docker stop no que ele retornar, ou seja, vai parar ao mesmo tempo os containers que estão rodando
