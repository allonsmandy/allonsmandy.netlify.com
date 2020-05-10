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

Um proprietário de uma frota de veiculo pretende saber em tempo real qual a localização de cada um de seus veículos. Ele precisará ter um gps em cada veiculo que irão coletar a posição geográfica mais atual que transmitirá para a nuvem. Essas posições poderão ser armazenadas e os dados utilizados para poder criar alguma aplicação por exemplo, no qual exista um mapa em que possa ser visualizado a ultima posição de cada um dos veículos.

#### Conectando as coisas...

Precisamos pensar como conectar as coisas! 

Hoje em dia existe uma grande quantidade de opções no mercado para você conectar seus dispositivos, desde soluções mais caseiras onde você vai prototipar suas soluções IoT, até as mais industriais. A gente já começa a viver uma era de produto em que você não consegue mais ver o circuito ou microcontrolador que era bem aparente no inicio do IoT.

Atualmente existe uma serie de produtos para casa como lampadas, despertadores e câmeras inteligentes, há essa diversidade de dispositivos e como eles aparecem pra gente.

###### Considere esses atributos na escolha

* Baixo consumo de energia
* rede de dados limitado
* resiliencia
* segurança
* customzaçao
* baixo custo

### ARDUINO

É uma placa unica com microcontrolador...

* Plataforma de prototipagem
* Com entradas/saidas, onde voce consegue conectar sensores por exemplo
* Desenvolvedor escreve em C/C++ que vai rodar dentro desse microcontrolador e vai executar alguma atividiade
* Interface serial ou USB
* Ele nao tem conexao com internet mas tem Shields, que sao componentes arduino que voce agrega e ele vai te dar capacidade de conectividade, seja bluetooth, wirelless, etc.

EXEMPLO DE CODIGO

```cpp
void setup() {
  pinMode (LED_PIN, OUTPUT); //habilita o pino 13 para saida digital (OUTPUT) 
}

void loop() {
  digitalWrite (LED_PIN, HIGH); // liga o LED
  delay(1000); // espera 1 segundo (1000 milissegundos)
  digitalWrite (LED_PIN, LOW); // desliga o LED
  delay (1000); // espera 1 segundo
}

int main(void) {
  // define LED_PIN 13
  int LED_PIN = 13
  
  init();
  
  setup();
  
  for(;;)
    loop();
  
  return 0;
}
```

##### EMBARCADOS

A partir do momento que você precisa ter mais garantia na sua solução IoT, você vai precisar utiliza o MCU, ele é um microcontrolador. Pensa nele como um chip capaz de fazer o processamento que o computador faz só que em um chip, e quando você coloca em um circuito eletrônico com entradas e saídas, você tem o seu dispositivo.

* Microcontrolador de chip único
* Sistema operacional real-time
* Embarcado
* Uso industrial, medico, militar, transporte

##### MINICOMPUTADORES

O **rasbperry pi** não é só uma placa de circuitos, ele é um computador completo. Ele é o mesmo computador que você tem no seu notebook ou gabinete desktop digamos assim, por exemplo. Ele tem processador, memoria, entradas e saídas, enfim.

* Computador completo
* hardware integrado a uma unica placa
* Roda sistema operacional linux e windows
* uso domestico e comercial

#### O PROTOCOLO DE COMUNICAÇAO

Vamos voltar ao nosso estudo de caso em que precisamos monitorar a frota de veículos de um determinado cliente, e para isso estamos procurando soluções de monitoramento.

![Protocolo de comunicação](assets/img/protocolo de comunicação.png "Protocolo de comunicação")

Depois desse estudo chegamos na conclusão. Iremos fazer esse monitoramento utilizando duas soluções: a primeira é instalar um **gps tracker**, que é uma solução mais profissional e mais confiável do que a segunda solução, que é a de temos um aplicativo utilizando o próprio Smartphone do motorista desse veiculo para poder nos dar a informação de localização.

A solução do **gps tracker** é mais confiável porque é um *embarcado*, e por isso consigo ter mais controle. Caso eu dependa do Smartphone do motorista, além de construir um aplicativo eu tenho que garantir que ele sempre funcione. O motorista pode sair de casa e esquecer por exemplo de abrir o aplicativo, já na solução embarcada eu posso ter esse componente ligado diretamente no sistema elétrico do veiculo, e o motorista quando da partida ele automaticamente é acionado e passa a transmitir as posições para a nuvem.

Ainda assim eu posso ter solução hibrida, ou seja, eu quero que em determinados veículos em que exija um número maior de confiabilidade instalar um **gps tracker**, e em veículos que eu não preciso ter um nível tao grande de confiabilidade eu posso ter um aplicativo desenvolvido para rodar dentro do Smartphone.

O importante não é saber o tipo de dispositivo que vou ter, o importante é que ambos conversem na mesma língua, e é ai que nasce a importância de ter um protocolo de comunicação unica.

#### O protocolo MQTT

MQTT é o protocolo de IoT mais comumente conhecido e utilizado.

![MQTT](assets/img/Protocolo de comunicaçao mqtt.png "MQTT")

Tanto o Smartphone que está rodando um aplicativo vai utilizar o MQTT como protocolo pra se comunicar com a nuvem, como também o **gps tracker** que pode por exemplo rodar um sistema operacional que irá se comunicar com a nuvem através desse protocolo.

###### MQTT

* Base na pilha TCP/IP
* Protocolo de mensagem assíncrona (M2M)
* Criado pela IBM para conectar sensores de pipelines de petróleo a satélites
* Padrão OASIS suportado pelas linguagens de programação mais populares

#### MODELO PUBLISH/SUBSCRIBE

![](assets/img/modelo publish subscribe.png)

Nesse modelo a gente separa quem é o fornecedor da mensagem e de quem é o consumidor. Você pode por exemplo, ser um gps que está capturando os pontos geográficos mais atualizado, e você vai estar simplesmente publicando para um mddleware, um software especializado em receber essa mensagem, no qual o objetivo dele é receber e entregar a mensagem. Ele que vai ser o roteador que faz a entrega para os clients que estão inscritos pra receber aquele tipo de mensagem. 

Ele tem uma capacidade de escalabilidade de lidar com dados muito maior, pois houve o desacoplamento de quem publica e quem consome, um dispositivo publicando mensagem pode alimentar 10, 20, 30 outros dispositivos que tem interesse em ouvir.

Como funciona a publicação

![Publish](assets/img/publishbg.png "Publish")

Para publicar a mensagem você vai ter que ter um endereço desse broker, esse broker nada mais é que um software então ele tem um endereço na internet, tem dns, host, etc. Nesse caso vou publicar a mensagem da posição do gps em um broker que está no endereço da imagem.

Do hostname em diante a gente chama de **topico.** O tópico écomo se fosse um endereço onde eu vou entregar determinado tipo de informação.

Ele da a flexibilidade de você definir os tópicos conforme a necessidade do seu negocio.

Nesse caso eu criei um tópico onde a primeira parte é o identificador do usuário, ou seja, identificador do meu gps. Na sequencia vou ter o nome gps escrito mesmo, esse é o tópico para onde o gps ta publicando a informação, e a informação no caso é a latitude e longitude.

#### A FLEXIBILIDADE DOS TOPICOS

![](assets/img/brokerbg.png)

* mqtt://broker/user/accelerometer 
* mqtt://broker/user/gps/position
* mqtt://broker/user/gps/velocity

Essa flexibilidade permite você modelar seu sistema conforme sua necessidade, não só a de produzir o dado como a de ouvir.

Entao no caso do nosso exemplo ficaria mais ou menos assim:

* pub mqtt://broker/a6fb45/gps/position
* pub mqtt://broker/f7j49k/gps/position
* pub mqtt://broker/n4g0k9/gps/position
* pub mqtt://broker/b0h2s4/gps/position
* pub mqtt://broker/x0s9d6/gps/position

Cada veiculo num determinado momento assim que receber uma posição geográfica do gps, seja pelo gps tracker ou pelo aplicativo, essa posição será transmitida e publicada no brocker um topico especifico.

Eu poderia ter todos os veículos publicando dados dentro do mesmo tópico sem especificar o identificador do usuário, isso também é uma questão de escolha no momento que você for desenhar sua solução, a questão é, se você não passar o identificador do seu veiculo na composição do tópico, você vai ter que passar no corpo da mensagem, então alem da latitude e longitude teria que ter o identificador do veiculo também.

Agora vou precisar consumir essas informações. Vou fazer isso através do **subscribe**.

![Subscribe](assets/img/subscribe.png "Subscribe")

O subscribe é a capacidade que o Client mqtt (software, device) tem de se conectar ao broker e passar a ouvir um tópico. Então um exemplo é, eu poderia ter um outro aplicativo no qual eu pudesse acompanhar a posição de uma motorista, e esse aplicativo teria que se inscrever em um tópico de um usuário. 

Quando faço a inscrição, toda menagem que o broker receber naquele tópico ele vai me entregar a mensagem. Então na hora de se inscrever nos tópicos pra receber mensagens eu poderia utilizar esse tipo de composição:

* mqtt://broker/user/gps/position 
* mqtt://broker/user/gps/velocity
* mqtt://broker/user/accelerometor
* mqtt://broker/+/gps/position
* mqtt://broker/user/gps/+
* mqtt://broker/+/#

No terceiro item por exemplo, eu to me conectando no tópico que vai receber informação do acelerômetro, diferente das informações que pego no primeiro e segundo exemplo.

Se eu quiser me inscrever em um tópico pra visualizar as posições de gps de todos os usuários, eu uso o +, eu posso usar ele no final também, dai desta forma poderia buscar de um usuário especifico todas as informações que vem do gps, que neste caso é a posição e velocidade.

O # significa que o broker vai te entregar todas as mensagens dos tópicos internos, eu to me inscrevendo para buscar a mensagem de todos os usuários e de todos os sensores, e também todas as informações de cada Sensor.

Mas se a gente tem um protocolo de comunicação, é importante ter certos níveis de garantia que ele vai funcionar. Por isso, o mqtt fornece o QoS, que possui níveis diferentes de qualidade de serviços. Ele fornece 3 niveis.

### QoS 0

![QoS 0](assets/img/qos0bg.png "QoS 0")

* Nível minimo de esforço
* Sem garantia de entrega da mensagem
* Mensagem não é retransmitida
* Custo menor em recursos computacionais

### QoS 1

![QoS 1](assets/img/qos1.png "QoS 1")

* Garante que a mensagem foi entregue no minimo uma vez ao recebedor
* Mensagem pode ser retransmitida se não houver confirmação de entrega
* Mais comum de utilizar do protocolo mqqt

### QoS 2

![QoS 2](assets/img/qos2qos1.png "QoS 2")

* Mais caro porque você tem pelo menos 2 pares de comunicação com o servidor
* O client publica a mensagem para o broker, e ele informa o client que ele armazenou a mensagem
* Se ele não receber a confirmação que a mensagem foi gravada, ele vai mandar a mensagem novamente até receber a confirmação do broker que a mensagem foi recebida.
* Uma vez que o broker devolve a mensagem para o client que ela foi recebida, o client agora precisa informar o broker que agora ele sabe que a mensagem foi recebida e de que o broker pode processar a mensagem ou remover do local onde ele armazenou internamente, que é o **pubrel.** E então, uma vez que essa mensagem for removida e ja ta em processamento, o broker confirma ao client que a comunicação esta completa.

## CLOUD

* Grande e cada vez maior numero de devices conectados
* TBs ou PBs de informações
* Potencial de escala global

O importante é você ter uma visão de como funciona e tirar benefícios.

No problema que estamos tentando resolver de rastrear a posição da frota de veículos, eu preciso de duas coisas: a primeira é armazenar as informações geográficas que eu to obtendo dos meus veículos em uma base de dados onde elas vão permanecer por o tempo que eu definir e depois podem ser utilizadas.

O objetivo primáio do IoT é coletar o dado e armazenar na nuvem, e a principal meta é utilizar o dado de forma inteligente.

![Cloud](assets/img/opa.png "Cloud")

Na segunda linha de solução eu não quero armazenar uma grande quantidade de informações geográficas, eu quero só colocar em uma tela com os gráficos, disponibilizar ao usuário um mapa onde nele vai conseguir ver a ultima posição de cada um dos veículos, ou seja, a posição mais atualizada.

E nesse caso estou usando uma área em memoria de cache onde o dado vive de maneira mais volátil e no qual ele é entregue de forma mais rápida.

Nos dois casos eu preciso ter o **Worker**, que é a minha aplicação, meu código, minha regra de negocio, aquilo que faço com minha informação, o **broker** nao faz nada além de rotear as mensagem que estão chegando nele, o meu **worker** vai ter que fazer o **subscribe** nos tópicos (ou tópico) do broker onde os aplicativos ou **gps tracker** irão publicar as informações. O **worker** se inscreve e ai o broker vai saber que tem que entregar a informação do worker, e o worker pega a informação e grava no local onde ela irá residir.

![](assets/img/db.png)

O armazenamento da informação dentro da nuvem tem que ser bem pensada. Hoje em dia você tem opções para armazenar os dados, o necessário de lembrar é os princípios básicos de IoT e Cloud, você estará lidando sempre com uma quantidade grande de informações que são geradas a todo momento pelos dispositivos, portanto existe a possibilidade do numero de dispositivos crescer de forma exponencial e de se tornar uma solução global, as preocupações que terá de ter no processamento e armazenamento dos dados são relacionados a **volume**, ou seja, *a solução que estou escolhendo pra armazenar meus dados vai suportar os requisitos de crescimento*?

Um exemplo que eu poderia utilizar para poder armazenar os dados é um banco de dados relacional, mysql, postgres, etc. No postges por exemplo, eu crio a tabela de geolocalização, então o **broker** que recebeu o device em um determinado tópico está entregando para o **worker** inscrito nesse tópico. Ele vai receber a informação e inserir no banco de dados relacional. Neste caso pode se tornar um problema o banco de dados relacional, pois ele não escala, eu não consigo ter replicas de forma simples onde conforme a quantidade de dados forem aumentando eu vou aumentando a quantidade de instancia desse banco, normalmente você aumenta a capacidade da maquina pra poder lidar com os dados que estão chegando.

Então o banco de dados relacional pode não ser a melhor opção... Imagina que depois que você coletou 1 bilhão de posições geográficas você precise fazer manutenção na tabela, isso pode e tornar inviável, por isso na hora de decidir onde armazenar os dados leve em consideração o volume.
