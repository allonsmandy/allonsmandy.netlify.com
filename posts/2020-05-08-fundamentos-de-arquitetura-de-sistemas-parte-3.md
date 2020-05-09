---
title: Fundamentos de arquitetura de sistemas - Parte 3
description: A arquitetura de aplicações móveis e internet das coisas
date: '2020-05-08 11:48:10'
image: assets/img/arquitetura-sistemas-768x512.jpg
category: dev
background: '#88c18c'
---
#### Conceitos da Internet das Coisas

A internet que conhecemos hoje começou com um projeto chamado ARPANET. Esse projeto visava interconectar os computadores da época, a ideia era conectar os computadores de centros de pesquisas para que os pesquisadores pudessem trocar informações!

A Arpanet cresceu e ao longo dos anos ela começou a não integrar somente centros de pesquisas, mas instituos do govenros, centros de inteligencia militar, e sssa expansao nao parou e hoje nós conhecemos ela como a rede mundial de computadores! :)

Com o advento da internet começaram a surgir os aplicativos, os browsers de navegadores, começamos a consumir video e audios pelo youtube itunes, a participar de comunidades no facebook, trocar mensagens por email, e com a chegada do smarthphone houve uma explosao no numero de aplicativos.

O que todos os aplicativos estão fazendo é utilizando uma rede mundial de comitadores pra poder conectar pessoas.

A interrt nada mais é que uma rede de pessoas conectadas trocando informações. 

É ai que surge a internet das coisas! QUnado as coisas que nao sao pesoas começam a utilizar dessa rede mundial que ja esta funcionando por anos pra poder tambem conectar dados e enviar informaões.

###### Por que conectar coisas?

* Embutir sensores em objeto do dia a dia
* Coletar dados dos sensores
* Usar o dado para tomar decisão

###### Conceitos básicos de IoT

A internet das coisas passa por essas três fases. 

As coisas que é onde a gente quer colocar os nossos sensores, onde a gente quer coletar dados.

A nuvem que é onde a gente quer processar esses dados e armazenar esses dados

A inteligencia que é o processo de utilizar todos esses dados gerados, se beneficar do poder dessa rede, dessas coisas todas conectadas, e utilizar os dados de forma inteligente, pra resolver problemas, otimizar processos, ter vantagem competitiva.

EXEMPLOS DE ONDE PODEMOS IMPLEMENTAR O IOT

SMART BUILDING: As vezes a gente nao para pra pensar na quantidade de informações que eu poderia coletar de um predio, seja residencial, comerial, etc. Há uma série de componentes que compõe a estrutura do edficio.

Smart building é a capacidade de voce conseguir coletar dados desses componentes e utilizar de forma inteligente pra poder melhorar por exemplo a segurança do predio, ou os sistemas de prevençao de incendio, etc.

START HOME: Tem caratceriscaparecia com a anteiro,r onde eu tenho diverso sensores na casa que eu posso coletar dados e monitorar, seja sensor de temepratura, dado de gerenciamento de enrgia da  cas,a ou dados pra acessar casa como fechadura eletronica por exemplo, sistema de alarme que notifica caso ocorra um disparo, entao eu tenho diversos sensores na casa que podem me entrear daos relacionados a isso.

Mas a diferneça é que ele tbm prever a presençar do morador da casa. Pra que eu coleto os dados? pra suprir os moradores da casa e fornecer determinado tipo de sevriço, poderia ter um sensor de tempetuara que ao verificar que to abrindo o portao da garagem ele autoatiamente poderia ligar o ar codicionado e olocar em determinado comodo numa temperatura ais agravel, entao eu tenho essa automaçao que coletando dados do sensores toma uma decisao por mim.

WEARABLES: Cada vez mais comu, eles sao vestiveis, componentes que a gente coloca no corpo e ele caba coletando dado sobre a nossa saude, os nossos habitos, os lugares que frequentamos, nossos horarios, etc.

AGRICULTURE Ja ta bastante impregado principalmente ao que se refere a ter processos produtivos mais sutenciaveis, eu posso ter junto do que to planatando poderia ter um sensor que mediria a umidade do solo e assim eu saberia se poderia aplicar mais ou menos irrigaçao na planta.

SMART TRANSPORTATION: oS veiculos passam a ser agentes que coletam dados de transito, um exemplo é a empresa Tesla

RFID Supply chain: Aqui na verdade é onde o IoT nasceu. Rfid é aquela etiqueta por radio frequencia, onde voce coloca a etiqueta no produto e ao passar por um scanner de raido frequencia lee é detectado.

Toda essa cadeia desde o momento que o produto é produzido até o momento que ele é adqurido pode ser rastreado atraves do rfid.

ENERGY EFFICIENT: COm Iot é possivel começar a coletar dados tanto de fontes geradores de energia como tbm consumidoras criando uma rede de informaçoes iportantepra tomada de decisao..

Como vimos, o IoI ja esta bastante presente em nossa vida. cada vez mais o que veremos é uma quantidade maior de coisas se conectando em uma ede, mandando informaçoes e info

Segnundo mark weiser, nos estamos entrando na era da computaçao obliquea, esse momento é quando os computadores saem do nosso campo de visao, a tecnologia recua para um plano de fundo, e é nesse momento em que a tech se torna mt importante em nossas vidas pois n conseguimos vela de forma facil, com o crescimento de IoT esse processo vai se tornar cada vez mais rapido. Quando a tecnologia se trna realmente eficaz.

###### Desafios da Internet das Coisas

1. Privacidade e segurança
2. Quantidade exponencial de dispositivos conectadas a rede
3. Ser capaz de processar e armazenar uma enorme quantidade de informaçoes
4. Gerar valor a partir dos dados coletados

#### Arquitetura IoT e protocolo de comunicação

Veremos um problema pra ficar melhor exemplificado.

![O problema a resolver](assets/img/problema a resolver.png "O problema a resolver")

Um proprietario de uma frota de veiculo pretende saber em tempo real qual a localizaçao de cada um de seus veiculos, entao ele precisara ter um gps de cada veiculos da sua frota, e os gps vai coletar a posiçao geografica mais atual e vai transmitir para a nuvem como vimos anteriormente. essas posiçoes podem ser armazenados e os dados utilizados pra poder criar aplicaçao onde exista um mapa e nele consiga visulaizar a ultima posicao de cada um dos veiculos.

Conectando as coisas...

Precisamos pensar como conectar as coisas!Hoje existe uma grande quantidade de opçoes no mercado pra vc conecta seus dispositivs, elas vao desde soluçoes mais caseiras onde voce vai prototibar suas soluçoes iot, até as mais industria. E ai a gente ja começa a viver uma era de produto que voce ja nao consegue mais ver o circuito, microcontrolador que era bem aparenteno inicio do iot.

hoje vc tem uma seire de produtos pra casa como lampas inteligentes, despertadores cameras, hoje ja existe essa diversidade de dispositivos e como eles aparecem pra gente.

Considere esses atributos na escolha

* Baixo consumo de energia
* rede de dados limitado
* resiliencia
* segurança
* customzaçao
* baixo custo

ARDUINO

É uma placa unica com microcontrolador...

* Plataforma de prototipagem
* Com entradas/saidas, onde voce consegue conectar sensores por exemplo
* Desenvolvedor escreve em C/C++ que vai rodar dentro desse microcontrolador e vai executar alguma atividiade
* Interface serial ou USB
* Ele nao tem conexao com internet mas tem Shields, que sao componentes arduino que voce agrega e ele vai te dar capacidade de conectividade, seja bluetooth, wirelless, etc.

EXEMPLO DE CODIGO

...

EMBARCADOS

A patir do momento que vc pecisa ter mais garantia na sua soluçao IoT, voce vai precisar utiliza o mcu profissionais. o mcu é um microcontrolador, pensa nele como um chip capaz de fazer o processamento que o omputador faz em um chip, e qando vc coloca em um circuito eletronico cm entradas e saidas, voce tem na vedade o seu dispositivo.

* Microcontrolador de chip unico
* Sistema operacional real-time
* Embarcado
* Uso industrial, medico, militar, transporte

MINICOMPUTADORES

O rasbperry pi nao é so uma placa de circuitos, ele é um computador completo, ele é o mesmo computador que voce tem no seu notebook ou gabinete desktop or exemplo, ele tem processador, memoria, entradas e saidas, enfim.

* Computador completo
* hardware integrado a uma unica placa
* Roda SO linux ou windows
* uso domestico e cmercial

O PROTOCOLO DE COMUNICAÇAO

Vamos voltar ao nosso estudo de caso, em que precisamos monitorar a frota de veiculos de um determinado cliente,e pra isso estamos procurando sluçoes de monitoramente.

Depois de estudo chegamos na conclusaoq ue vamos fazer esse monitoramente utilizando duas soluçoes: uma é instalar um gps tracker, e'uma soliuçaomais profisisonal , é mais confiavel doq ue a segunda soluçao, que é a de temos u app utiizando o proprio smartphone do motorista desse veiculo pra poder nos dar essa info de localizaçao.

A soluçao do gpsttraker é mais confiavel pq é um embarcado, e por isso consigo mais controle, se dependo do smart do motorista eu tenho que construir um app e tenho que garantir q ele funcione sempre, o motorista pode sair de casa e esquecer por exemplo de abrir o app, a soluçao embarca posso ter esse compoentne ligado diretmente no sistema eletrico do veiculo, e o motoritsa da partida ele automaticamente é acionado e passa a transmitir as posiçoes para a nuvem.

Ainda assim eu tenho nesse exemplo eu poso ter soluçao hibrida, eu posso querer que em determinados veiculos eu exiga um numeo amior de confiabilidade, entao eu intalo um gps traker, e em veiculos que eu nao preciso ter um nivel tao grande de confiabilidade eu posso ter sim um app desenvolvido pra rodar dentro do smarphtone.

o importante nao é saber o tipo de dispositivo que vou ter, o importnte é que ambos conversem na mesma lingua, é ai que nasce a impotancia de ter um protoco de comunicaçao unica

O protocolo MQTT

É o protoclo de iOt, MAS CONHECIDOE UTILIZADO .

Ele vai ser a linguagem que tanto o smarthpone rodando um appele vai utilizar o mqtt como protocolo pra comunicarr com a nuvem , ou o gps tracker pode rodar um so que tbm falaria coma nuvem atraves desse protoclo.

MQTT

* Base na pilha TCP/IP
* Protocolo de mensagem assincrona (M2M)
* Criado pela IBM para conectar sensores de pipelines de petroleo a satelites
* PADRAO OASIS suportado pelas linguagens de programaçao mais populares

MODELO CLIENTE SERVIDOR

Nesse modelo a gente separa quem é o fornecedor da mensagem daquela pessoa que é o consumidor, ha uma separaacao do client. voce pode por exemplo ser um gps que ta capturando os pontos geograficos mais att, e voce ta simplesmente publicando para um mddlewrare, um software especializado em receber essa mensagem, no qual o objetivo dele é receber e entregar a mensagem, ele é o roteador, ele entrega para os clients que estao inscritos pra receber aquele tipo de mensagem. ele tem uma apacidade de scalabilidade de lidar com dados mt maior, pois houve o desacoplamento de quem publica e quem consome, um dispostivo publicando mensagem pode alimentar 10 20 30 outros dispostivos que tem interesse em ouvir.

PUBLICAÇAO COMO FUNCIONA

PRA PUBLICAR a msg vc vai ter que ter um endereço desse broker O(software) entao ele tem um endereço na internet, dns, host. nesse caso vou publicar a mensagem d aposiçao do gps em um broker que esta neste endereço:

do hostname em diante a gente chama de topico,é como se fosse um endereço onde eu vou entregar deteminado tipo de info

ele pode ser de varias formas, ele te da flexibilidade de voce definir os topicos conforme a necessidade do seu negocio

nesse caso aqui eu vou criar um topico onde a primeira parte é o identificador do usuario, ou seja, do meu gps. na sequencia vou ter o gps escrito mesmo, esse é o topico pra onde o gps ta publicando a info, e a info no caso é a latitude e longitude.

A FLEXIBILIDADE DOS TOPICOS

Veja como foi composto o topico acima:

Essa flexibilidade permite voce modelar seu sistema conforme sua necessidade, nao so a de produzir o dado como a de ouvir.

Entao no caso ficaria mais ou menos assim:

Cada veiculo num determinado momento assim que receber uma position geografica do gps, seja tracker ou o app, vai transmitir essa posiçao, vai publciar no brocker um topico especifico.

Eu poderia ter todos os veiculos publicando dados dentro do mesmo topico sem especifiar o id do usuario, isso tbm é uma questao de escolha no momento q vc ta desenhando sua soluçao, a questao é, se vc n passar o id do seu veiculo na composiçao do topico vc vai ter que passa no corpo da mensagem,alem da lat e longiutde vai ter o id do veiculo.

Agora vou precisar consumir essas informaçoe, e vouf azer isso atraves do subscribe.

O subscribe é a capacidade que  client mqtt, um softwre, um deivce, envim, tem de se conectar ao broker e passar a ouvir um topico. Entao um exemplo é, eu poderia te rum outro app onde eu  pudesse rodar no tablet e acompanhar dea posiçao de uma motorista, ele teria que se inscrever em um topico de um usuario. 

quando faço a inscriçao, toda menagem que o broker receber naquele topico ele vai me entregar a mensagem.

entao na hora de inscrever no topicos pra receber mensagens eu poderia utilizar esse tipo de composiçao:

no terceiro topico por exemplo eu to me conectando no topico que vai receber info do acelerometro, diferente das infos que pego no primeiro e seugndo exemplo.

Se eu quiser me inscrever num topico pra querer visuliazar as posiçoes de gps de todos os usuarios, eu usso o caracter +,posos usar o mesmo no final, assim eu possobuscar de um usaurio especifico todas as informaçoes que vem do gpf, que neste caso é a posiçao e velocidade.

o # significa que o broker vai te entregar todas as mensagens dos topicos internos, eu to me inscrevend orpa buscar a mensagem de todos os usuarios e de todos os sensores, todas as informaçoes de cada Sensor.

QoS 0

Mas se a gente tem um protoclo de comunicaçao, é importante ter certos niveis de garantia que elevai funcionar e pra isso o mtqqt fornece o qos, que é niveis diferentes de qualidadede serviços

ele fornece tres nives 0 1 2

0

* Nivel minimo de esforço
* Sem garantia de entrega da mensagem
* Mensagem nao é retransmitida
* Custo menor em recursos computacionais

1

* Garante que a mensagem foi entregue no minimo uma vez ao recebedor
* Mensagem pode ser retransmitida se nao houver confirmaçao de entrega
* Mais comum de utilizaçao do protoclo mqqt

2

* Mais caro porque voce tem pelo menos 2 pares de comunicaçao com o servidor
* O cliente publica a mensagem para o broker, e ele informa o cliente que ele armazenou a mensagem
* S eele nao eceber a confirmaçao que a mensagem foi gravada, ele vai mandar a mensagem novamente ate ee eceber a confirmaçao do broker
* o client precisa informar o broker que a mensagem foi recebida e que o obroker pode processar a mensgaem ou remover do local onde ele armazenou internamente, que é o pubrel, e ai o broker é removida e ja ta em proessaente, ele confirma ao client que a comunicaçao esta completa.

CLOUD

* Grande e cada vez maior numero de devices conectados
* TBs ou PBs de informaçoes
* Potencial de escala global

o importante e vc ter uma visao de como funciona e tirar beneficios

no problema que estamos tentando resolver de rastrear a posiçao da frota de veicuos, eu preciso de duas coisas: a primeira é armazenar as infos geografica q eu to obtendo dos meus veiculos em uma base de dados onde elas vao permanecer por o tempo q eu definir, e depois podem ser utilizadas.

o obj primario da iot é coletar o dado e armazenar na nuvem, e a primncipal meta é utilizar o dado de forma inteligente.

..

na segunda linha de soluçao eu nao quero armazenar uma grande quantidad ed einfo geograficas, eu quero so colocar em uma tela, graficos, dipspobilizar ao usuario um mapa onde nele vai conseguir ver a ultima psiçao de cada um dos veiculos, a mais att.

e nesse caso to usando uma area em memoria de cache onde o dado vive de maneira mais volatil e que ele seja entregue de forma mais rapida.

nos dois casos eu preciso ter o Worker, que é a minha aplicaçao, meu codigo, minha regra de negocio, aquiloq faço com minha info, o broker nao faz nada alaem de rotear as mensagem q estao chegando nele, o meu worker vai ter que fazer o subscribe nos topicos ou no topico do broker onde os apps ou gps traker vao publicar as informaçoes, o woker se inscever e ai o broker saber q ele tem que entregar a info do worker, e o worker pega a info e grava no local onde a info vai residir.

no seungod worker so q ele praa ele o importante é o dado mais atual eai ele alimentaria a area de cache q ficaria a ultima posiçao apenas de cada usuarioo, dai asim eu posso ter uma aplicaçao web consumindo informaçoes e mostrando essa info real time.

..

O armazenamento da informaçao dentro da nuvem ela tem q ser bem pensada e hoje em dia vc tem oopçoes pra armazenar os dados, o necessario de lembrar é os princips basicos de iot e cloutd, eu to lidando sempre com uma qtd grande de informaçoes q sao gradas a todod momentos pelos dispostivos e existe a possinilidade do numerod e dispotivos crecer de forma exponencial e de se tornar uma soluçao global, as preocupaçoes q tenho de ter no processamento e armazenamdno dos dados sao relacionados a volume, a soluçao q to escolhendo pra armazenar meus dados vai suportar os requsitos de crescimento?

um exemplo que eu poderia utiliar pra poder armazenar os dados é um banco de dados relacionados, mysql, postgress, etc. no postgess poe xemplo eu crio a tabela de geolocalizao, entao o broker q recebeu o device em um deteimnado dtopico esta entregando para o worker inscrito nesse topico e ele vai recebr a informaçao e inserir no banco de dados relacional. Neste caso pode se tornar um oriblema o banco de dados relacional, pois ele nao escala, eu nao consigo ter replicas de forma simples onde conforme a qtd de dados forem aumentando eu vou aumentando a qtd de instancia desse banco, normalmente voce aumenta acapacidade da maqina pra poder lidar co o dados que estao chegando, entao o bd relacional pode n er a menlhor opcional. imagina que depois que voce coletou 1 milhao de posiçoes geograficas vc precise fazer mautençao na tabela, isso pode e tornar invisvael, por isso na hora de decidir onde armazenar os dados vc leve em consideraçao o volume.
