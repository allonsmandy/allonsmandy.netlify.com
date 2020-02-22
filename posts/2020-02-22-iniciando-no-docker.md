---
title: Iniciando no Docker
description: >-
  Um estudo inicial e demonstração de vários comandos pra você começar a usar o
  Docker
date: '2020-02-21 07:30:43'
image: assets/img/image4-1-1024x1009.png
category: devops
background: '#B9D030'
---
![Docker](assets/img/1_ovRuAuqPf4r2xpiWh71rUg.png "Iniciando no Docker")

*Para saber um pouco mais sobre a instalação é só acessar esse [link](https://medium.com/devupacademy/instalando-o-docker-66c1642435c1)*

O Docker tem como objetivo criar, testar e implementar aplicações em um ambiente separado da máquina original, chamado de **container**. Dessa forma, o desenvolvedor consegue *empacotar o software de maneira padronizada*. Isso ocorre porque a plataforma disponibiliza funções básicas para sua execução, como: **código**, **bibliotecas**, **runtime** e **ferramentas do sistema**. Outro benefício oferecido pela plataforma é a possibilidade de configurar diferentes ambientes de forma rápida, além de diminuir o número de incompatibilidades entre os sistemas disponíveis. Sabe aquele "na minha maquina funciona" ? Pois é, não teremos mais isto!

DevOps é um tópico bem amplo que envolve tanto aspectos culturais como técnicos, mas possui como principal objetivo aumentar a qualidade e eficiência da entrega de software. DevOps é uma metodologia que visa integrar os times de desenvolvimento com infraestrutura e o Docker está tendo um papel importante nessa tarefa. Repare que com Docker os desenvolvedores não precisam se preocupar em configurar um ambiente de desenvolvimento específico de cada vez. Em vez disso, eles podem se concentrar na construção de um código de boa qualidade. Isso, obviamente, leva à aceleração nos esforços de desenvolvimento. **O Docker facilita muito construir o ambiente: é rapido, simples e confiável.**

No outro lado, para a equipe de operações de TI/Sysadmins, o Docker possibilita configurar ambientes que são exatamente como um servidor de produção e permite que qualquer pessoa trabalhe no mesmo projeto com exatamente as mesmas configurações, independentemente do ambiente de host local. As configurações são descritas em arquivos simples facilmente aplicáveis pelo desenvolvedor. Com a padronização de um entregável Docker é possível que o desenvolvedor tenha um ambiente similar ao de produção na sua máquina sem todo o custo de configuração e o Sysadmin consiga lidar apenas com um tipo de entregável conseguindo, desta forma, dar atenção aos desafios de monitoramento e orquestração para que nada dê errado. Neste caso, o melhor para os dois.

**Antes de ir para as demais informações, vamos dar um hello world pra iniciarmos o ritual?** 

`docker run hello-world`

### CONTAINER

De uma forma simplificada, podemos dizer que um container é um ambiente isolado dentro de um servidor, dividindo um único host de controle. Imagine um trem de carga com diversos conteiners de mercadorias dentro dele. Se em um dos conteiners a mercadoria estragar, isso não vai afetar os outros conteiners, pois cada um deles está isolado e protegido. O isolamento dos conteiners permite um uso limitado de disco rígido, memória RAM e CPU. Utilizando um tipo de compartilhamento de kernel, eles conseguem poupar muito mais recursos que outros métodos de virtualização como uma VM (Virtual Machine).

## **IMAGENS**

Você lança seus Containers a partir de imagens. As imagens são a parte da build do ciclo de vida do Docker. Você pode considerar as imagens como o “código-fonte” dos seus Containers. Eles são altamente portáteis e podem ser compartilhados, armazenados e atualizados.

### **VOLUMES**

Muitas vezes removemos os containers após o uso, e os volumes são usados justamente para os dados que não devem ser removidos.

O volume fica salvo no Docker Host, ou seja, fica salvo no computador onde a Docker Engine está rodando.

### REDES

Por padrão, os containers ficam na mesma rede com o nome bridge e a comunicação deve ser feita através do IP. Porém, se criarmos nossa própria rede podemos podemos usar o nome dela ao invés do IP

Além disso, uma imagem pode ter um **tag** que serve para pegar uma determinada versão dessa imagem.

### **DOCKER COMPOSE**

Permite que você execute pilhas de Containers, por exemplo, servidores da Web, servidores de aplicativos e Containers de servidor de banco de dados sendo executados juntos para atender a um aplicativo específico.

* Executa a build de vários containers
* Desliga os containers de maneira coordenada
* Cria uma nova rede na qual os containers podem participar

Nesse arquivo Compose, descrevemos a infraestrutura como código e como ela vai se comportar ao ser iniciado. Se digo que preciso de um banco de dados para rodar minha aplicação Java/Php, descrevo isso no meu Compose e digo que minha aplicação depende do meu container de banco de dados MySQL para rodar.

Outra coisa legal, é que podemos definir o comportamento que o Docker vai ter caso um dos containers venha a falhar. Descrevo no Compose que, caso o banco de dados falhe por algum motivo, o Docker que suba outro imediatamente. Consigo isolar essas aplicações em uma rede separada e quais volumes essas aplicações vão utilizar para persistir os dados. 

> \
> “Essa automatização é muito bacana, a forma que temos de orquestrar os serviços de forma declarativa!”[(YAML™) Version 1.2](http://www.yaml.org/spec/1.2/spec.html).

Em resumo, utilizando o Docker Compose, em vez de o administrador executar o docker run na mão para cada container e subir os serviços separados, linkando os containers das aplicações manualmente, temos um único arquivo que vai fazer essa orquestração e vai subir os serviços/containers de uma só vez. Isso diminui a responsabilidade do Sysadmin ou do desenvolvedor de ter que gerenciar o deploy e se preocupar em rodar todos esses comandos para ter a sua aplicação rodando com todas as suas dependências.

## docker-compose.yml

O arquivo de definição do **Docker Compose** é o local onde é especificado todo o ambiente (*rede*, *volume* e *serviços*), ele é escrito seguindo o formato **YAML**. Esse arquivo por padrão tem como nome **docker-compose.yml**.

O padrão **YAML** utiliza a indentação como separador dos blocos de códigos das definições, por conta disso o uso da indentação é um fator muito importante, ou seja, caso não a utilize corretamente, o **docker-compose** falhará em sua execução.

Cada linha desse arquivo pode ser definida com uma chave valor ou uma lista. Vamos aos exemplos pra ficar mais claro a explicação:

```
version: '3'
services:
  web:
    build: .
      context: ./dir
      dockerfile: Dockerfile-alternate
      args:
        versao: 1
    ports:
      - "5000:5000"
  redis:
    image: redis
```

* A primeira linha define a versão do **docker-compose.yml**, no caso vou usar a 3 (para saber mais [acesse este link](https://docs.docker.com/compose/compose-file/#versioning))
* No mesmo nível de indentação temos services, que define o início do bloco de serviços que serão definidos logo abaixo.
* No segundo nível de indentação (aqui feito com dois espaços) temos o nome do primeiro serviço desse arquivo, que recebe o nome de web. Ele abre o bloco de definições do serviço, ou seja, a partir do próximo nível de indentação, tudo que for definido faz parte desse serviço.
* No próximo nível de indentação (feito novamente com mais dois espaços) temos a primeira definição do serviço web, que nesse caso é o **build** que informa que esse serviço será criado não a partir de uma imagem pronta, mas que será necessário construir sua imagem antes de sua execução. Seria o equivalente ao comando **docker build**. Ele também abre um novo bloco de código para parametrizar o funcionamento dessa construção da imagem.
* No próximo nível de indentação (feito novamente com mais dois espaços) temos um parâmetro do **build**, que nesse caso é o **context**. Ele é responsável por informar qual contexto de arquivos será usado para construir a imagem em questão, ou seja, **apenas arquivos existentes dentro dessa pasta poderão ser usados na construção da imagem**. O contexto escolhido foi o `“./dir”`, ou seja, isso indica que uma pasta chamada **dir**, que se encontra no mesmo nível de sistema de arquivo do **docker-compose.yml** ou do lugar onde esse comando será executado, será usada como contexto da criação dessa imagem. Quando logo após da chave um valor é fornecido, isso indica que nenhum bloco de código será aberto.
* No mesmo nível de indentação da definição **context**, ou seja, ainda dentro do bloco de definição do **build**, temos o **dockerfile**, ele indica o nome do arquivo que será usado para construção da imagem em questão. Seria o equivalente ao parâmetro **“-f”** do comando **docker build**. Caso essa definição não existisse, o **docker-compose** procuraria por padrão por um arquivo chamado **Dockerfile** dentro da pasta informada no **context**.
* No mesmo nível de indentação da definição dockerfile, ou seja, ainda dentro do bloco de definição do build, temos o **args**, ele define os argumentos que serão usados pelo Dockerfile, seria o equivalente ao parâmetro` “–build-args”` do comando docker build. Como não foi informado o seu valor na mesma linha, fica evidente que ela abre um novo bloco de código.

  No próximo nível de indentação (feito novamente com mais dois espaços) temos a chave “versao” e o valor “1”, ou seja, como essa definição faz parte do bloco de código args, essa chave valor é o único argumento que será passado para o Dockerfile, ou seja, o arquivo Dockerfile em questão deverá estar preparado para receber esse argumento ou ele se perderá na construção da imagem
* Voltando dois níveis de indentação (quatro espaços a menos em relação a linha anterior) temos a definição ports, que seria o equivalente ao parâmetro “-p” do comando docker container run. Ele define qual porta do container será exposta no Docker host. Que no nosso caso será a porta 5000 do container, com a 5000 do *Docker host.
* Voltando um nível de indentação (dois espaços a menos em relação a linha anterior) saímos do bloco de código do serviço web, isso indica que nenhuma definição informada nessa linha será aplicada a esse serviço, ou seja, precisamos iniciar um bloco de código de um serviço novo, que no nosso caso será com nome de redis.
* No próximo nível de indentação (feito novamente com mais dois espaços) temos a primeira definição do serviço redis, que nesse caso é o image que é responsável por informar qual imagem será usada para iniciar esse container. Essa imagem será obtida do repositório configurado no Docker host, que por padrão é o hub.docker.com.

Após entender e criar seu próprio **arquivo de definição** precisamos saber como gerenciá-lo e para isso utilizaremos o binário **docker-compose**, que entre várias opções de uso temos as seguintes mais comuns:

* **build**: Usada para construir todas as imagens dos **serviços** que estão descritos com a definição **build** em seu bloco de código.
* **up**: Iniciar todos os **serviços** que estão no arquivo **docker-compose.yml**
* **stop**: Parar todos os **serviço s**que estão no arquivo **docker-compose.yml**
* **ps**: Listar todos os **serviços** que foram iniciados a partir do arquivo **docker-compose.yml**

Para outras opções visite sua [documentação](https://docs.docker.com/compose/reference/).

![Arquitetura Docker](assets/img/arquitetura.png)

## **Dockerfile**

```
FROM node:latest
WORKDIR /var/www
MAINTAINER Mandy 
COPY . /var/www 
RUN npm install 
ENV NODE_ENV=production
ENV PORT=3000
ENTRYPOINT ["npm", "start"]
EXPOSE $PORT
```

**FROM** -> O dockerfile vai montar sua imagem a partir de outra existente\
**MAINTAINER** -> É quem cuida da imagem, ver se ela ta sendo atualizada\
**COPY** -> Copia o que voce indicar pra dentro da imagem, entao a imagem ja terá o codigo fonte. Se você distribuir pra outra pessoa ela ja vai ter aquele codigo fonte imbutido na imagem\
**RUN** -> executa o comando quando a imagem estiver sendo construida\
**ENTRYPOINT** -> Carregado assim que for executado o seu container\
**ENV** -> Setar variavel de ambiente\
**WORKDIR** -> É onde vai começar!  Assim que meu container carregar, ele carrega nessa pasta pro **npm** ser executado nela\
**EXPOSE** -> Porta

\
**Buildando a imagem**

`-t` => como voce quer taguear sua imagem? (nome do usuario que criou / nome da imagem)\
`-f` => nome do arquivo do meu Dockerfile (não precisa se tiver o nome padrao)

`docker build -f Dockerfile -t mandy/node .`

**Agora que temos a imagem pronta (docker images) da pra criar um container com ela**

SUBINDO IMAGEM NO DOCKERHUB PARA COMPARTILHAR SUA IMAGEM COM OUTRAS PESSOAS (crie sua conta no dockerhub)

```
docker login
docker push mandy/node 
docker pull mandy/node
```

![Arquitetura Docker](assets/img/unnamed.png)

## Vamos conhecer muito de seus comandos? ^-^

* ##### **Comandos relacionados às informações** 

`docker version` - exibe a versão do docker que está instalada. 

`docker inspect ID_CONTAINER` - retorna diversas informações sobre o container. 

`docker ps` - exibe todos os containers em execução no momento. `docker ps -a` - exibe todos os containers, independentemente de estarem em execução ou não.

`docker images`- mostra todas as imagens

* #### **Comandos relacionados à execução**

`docker run NOME_DA_IMAGEM` - cria um container com a respectiva imagem passada como parâmetro. 

`docker run -it NOME_DA_IMAGEM` - conecta o terminal que estamos utilizando com o do container. 

`docker run -d -P --name NOME_DO_CONTAINER dockersamples/static-site` - ao executar, dá um nome ao container. 

`docker run -d -p 12345:80 dockersamples/static-site` - define uma porta específica para ser atribuída à porta 80 do container, neste caso 12345. 

`docker run -v "CAMINHO_VOLUME" NOME_DA_IMAGEM` - cria um volume no respectivo caminho do container. 

`docker run -it --name NOME_CONTAINER --network NOME_DA_REDE NOME_IMAGEM` - cria um container especificando seu nome e qual rede deverá ser usada. 

* #### **Comandos relacionados à inicialização/interrupção** 

`docker start ID_CONTAINER`- inicia o container com **id** em questão. 

`docker start -a -i ID_CONTAINER` - inicia o container com id em questão e integra os terminais, além de permitir interação entre ambos. 

`docker stop ID_CONTAINER`- interrompe o container com id em questão.

`docker stop -t 0 ID_CONTAINER` => passa o tempo de espera pra parar esse container

* #### **Comandos relacionados à remoção**

`docker rm ID_CONTAINER` - remove o container com id em questão. 

`docker container prune`- remove todos os containers que estão parados. 

`docker rmi NOME_DA_IMAGEM` - remove a imagem passada como parâmetro.

* #### **Comandos relacionados à construção de Dockerfile**

`docker build -f Dockerfile`- cria uma imagem a partir de um Dockerfile.

`docker build -f Dockerfile -t NOME_USUARIO/NOME_IMAGEM` - constrói e nomeia uma imagem não-oficial.

`docker build -f Dockerfile -t NOME_USUARIO/NOME_IMAGEM CAMINHO_DOCKERFILE` - constrói e nomeia uma imagem não-oficial informando o caminho para o Dockerfile.

* #### **Comandos relacionados ao Docker Hub** 

`docker login` - inicia o processo de login no Docker Hub. 

`docker push NOME_USUARIO/NOME_IMAGEM`- envia a imagem criada para o Docker Hub.

`docker pull NOME_USUARIO/NOME_IMAGEM` - baixa a imagem desejada do Docker Hub.

* #### **Comandos relacionados à rede**

`hostname -i`- mostra o ip atribuído ao container pelo docker (*funciona apenas dentro do container*)

`docker network create --driver bridge NOME_DA_REDE`- cria uma rede especificando o driver desejado.

### **EXEMPLOS**

`docker run -d --name meu-mongo --network minha-rede mongo`

* Sobe um container na rede minha-rede
* Executa o container no modo detached (o **\-d** faz isso, possibilitando usar novamente o terminal)

```
FROM nginx:latest \
MAINTAINER Mandy \
COPY /public /var/www/public \
COPY /docker/config/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443
ENTRYPOINT \["nginx"] CMD \["-g", "daemon off;"]
```

Utilizamos a última versão disponível da imagem do nginx como base

* Copiamos o conteúdo da pasta public, que contém os arquivos estáticos, e um arquivo de con guração do NGINX para dentro do container.
* É executado o comando nginx, passando os parâmetros extras -g e daemon off.



Referências <3 

<https://e-tinet.com/linux/container-docker/>\
<https://imasters.com.br/banco-de-dados/docker-compose-o-que-e-para-que-serve-o-que-come>\
<https://www.inventti.com.br/container-docker-e-suas-vantagens/>\
<http://stack.desenvolvedor.expert/appendix/docker/introducao.html>
