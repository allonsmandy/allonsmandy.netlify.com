---
title: Fundamentos de Arquitetura de Sistemas - Parte 1
description: Vantagens e desenvolvimento de web services
date: '2020-04-20 08:09:30'
image: assets/img/arquitetura-sistemas-768x512.jpg
category: dev
background: '#88c18c'
---
Irei documentando aqui todo o meu aprendizado da disciplina de **Fundamentos de Arquiterura de Sistemas**, do bootcamp **Code Like a Fullstack Girl**. Espero que estes conteúdos possam ajudar outras pessoas também :)

Os posts ficarão divididos em:

* Vantagens e desenvolvimento de Web Services
* Conceitos de arquitetura em aplicações para Internet
* A arquitetura de aplicações móveis e internet das coisas
* Conceitos de responsividade e experiência do usuário

Vamos iniciar o assunto do primeiro tópico :)

## Vantagens e desenvolvimento de Web Services

#### O que são Web Services?

**Serviços Web** ou **Web Services** são soluções para aplicações se comunicarem independente de linguagem, softwares e hardwares utilizados.

Inicialmente **Services Web** foram criados para troca de mensagens utilizando a linguagem **XML** sobre o protocolo HTTP sendo identificado por **URI** (Uniform Resource Identifier)

Podemos dizer que Serviços Web são API's que se comunicam por meio de redes sobre o protocolo HTTP.

![Exemplificando](assets/img/unnamed.png "Exemplificando")

Observe a imagem acima.\
Uma **aplicação x** possui um banco de dados pertencente a ela mesma chamado **database x**, e a **aplicaçao Y** também possui seu próprio banco chamado **database x**. Essas aplicações precisam se comunicar, só que elas sao de empresas diferentes, estão em redes diferentes, possuem banco de dados diferentes, linguagens diferentes, como elas podem se comunicar nesse cenário? A **aplicação y** precisa de uma informação do **database x**, porém, como tudo é diferente, como que ela vai acessar?

O **Web Service** vai ter acesso ao banco de dados, a diferença é que ele vai expor uma **uri** para que a **aplicaçao y** consiga fazer o acesso, então ao invés dela ir direto ao **database x**,ela vai ao web service, e o web service vai fazer uma troca de mensagem com a **aplicação y**, seja com json, xml, graphql, etc

Essa linguagem de marcação utilizada é meio que universal, então você pode escrever um web service em python e ter a aplicaçao em java que ela vai conseguir se comunicar, e se caso a aplicação mude de linguagem, o serviço continua exposto pela web e a linguagem para trocar essa mensagem continua sendo a mesma.

Toda essa comunicação é pelo protocolo http e por uma uri, que neste caso é *http://webservice.com/dados/*

Então a **aplicação y** vai fazer uma requisição http para o web service, o web service vai pegar essa requisição, ele vai no **database x**, faz a consulta e devolve para a **aplicação y**.

Portanto, teremos uma integração universal, pois qualquer aplicação pode integrar, além de melhorar a segurança pois o banco de dados está guardado, então só o servidor que pode acessar e quem quiser acessar precisa passar por ele, assim como também tem velocidade nas integrações!

###### Exemplo de arquivo XML

```xml
<endereco>
	<cep>999-999</cep>
	<bairro>Teixeirinha</bairro>
	<cidade>Nárnia</cidade>
	<numero>22</numero>
</endereco>
```

###### Exemplo de arquivo JSON

```json
{ 	
   "endereco":  { 		
      "cep":"9999-99", 		
      "bairro": "Teixeirinha", 		
      "cidade": "Nárnia", 		
      "numero": 22 	
    } 
}
```

###### Vantagens de utilizar Web Services

* Linguagem comum 
* Integração facilitada
* Reutilização de implementação, pois o retorno é sempre o mesmo então fica fácil de reutilizar
* Melhora segurança
* Custos

###### Principais tecnologias

* Soap
* Rest
* xml
* Json

## ESTRUTURA SOAP (Simple object Access Protocol)

* É um protocolo baseado em XML para acessar serviços web principalmente por HTTP
* Pode-se dizer que soap é uma definição de como serviços web se comunicam
* Foi desenvolvido para facilitar integrações entre aplicações

###### VANTAGENS

* Permite integrações entre aplicações, independente de linguagem, pois usa como linguagem comum o XML
* É independente de plataforma e software
* Meio de transporte genérico, ou seja, pode ser usado por outros protocolos além do http

##### XML (Extensible markup language)

* É uma linguagem de marcação criada na década de 90 pela w3c
* Facilita a separação de conteúdo, já que ele possui tags e através delas você consegue separar bem o que você ta enviando de mensagem
* Não tem limitação de criação de tags, ou seja, você consegue mandar muitos atributos bem separados e organizados
* Linguagem comum para integrações entre aplicações, então fica muito facil interagir com as aplicaçoes utilizando xml, é uma linguagem simples de manipular, de se utilizar e entender.

![SOAP](assets/img/soap estrutureunnamed.png "SOAP")

O "SOAP Message" possui uma estrutura unica que deve sempre ser seguida. Então sempre que enviar uma mensagem xml, essa mensagem vai seguir esta estrutura.

* O **SOAP Envelope** é o primeiro elemento do documento e é usado para encapsular toda a mensagem SOAP
* O **SOAP Header** é o elemento onde possui informações de atributos e metadados da requisição
* O **SOAP Body** é o elemento que contém os detalhes da mensagem

###### Exemplo de mensagem SOAP

```
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"> 	
        <soap:Header> 
        </soap:Header>
         <soap:Body> 		
              <m:MetodoEndereco xmlns:m="http://www.example.org/endereco"> 			                     
                   <m:Bairro>Teixeirinha</m:Bairro> 	
                   <m:Cidade>Nárnia</m:Cidade>
		   <m:CEP>9999-99</m:CEP>
	           <m:Numero>22</m:Numero>
	      </m:Endereco>
	</soap:Body>
</soap:Envelope>
```

Observe que há o elemento Envelope que encapsula os outros elementos, em seguida temos o elemento Header que neste caso não possui nada, depois temos o Body com o MetodoEndereço e dentro dele tem os atributos que estão sendo enviados para ele.

### Entendendo o que é WSDL e XSD

#### O que é WSDL? (Web Services Description Language)

O WSDL é usado para descrever Web Services, funciona como um contrato do serviço. A descrição é feita em um documento XML, onde é descrito o serviço, especificações de acesso, operações e métodos.

#### O que é XSD? (XML Schema Definition)

É um Schema no formato XML usado para definir a estrutura de dados que será validada no XML. O XSD funciona como uma documentação de como deve ser montado o SOAP Message (XML) que será enviado através de Web Service.

**Acesse o seguinte web service público -> <http://soapclient.com/xml/soapresponder.wsdl>**

Note que na uri há um **.wsdl**, ele que traz os recursos do contrato deste serviço. Também é comum que você veja ?wsdl :)

Todo o código que aparece nesta página é o nosso wsdl. Primeiramente temos o definition, depois temos message com o Method1, este é o único método que se tem dentro deste serviço, e abaixo é o response que ele retorna. Descendo mais um pouco, você vai ver o binding, ele vai dizer as operações que tem, e se você quiser ver os detalhes da operação você ver em message, observe que ele possui dois atributos, bstrParam1 e bstrParam2, mais embaixo tem o atributo que vai ser retornado, no caso o bstrReturn.

Você tem também o xsd ainda no campo de message, em type:

```
<message name="Method1">
<part name="bstrParam1" type="xsd:string"/>
<part name="bstrParam2" type="xsd:string"/>
</message>
```

Você sabe com isso que deve ser passado uma string nesses parametros!

## O que são REST, API e JSON?

##### REST (Representational State Transfer)

É um estilo de arquitetura de software que define a implementação de um serviço web. Podem trabalhar com os formatos XML, JSON ou outros.

###### Vantagens do REST

* Permite integrações entre aplicações e também entre cliente e servidor em páginas web e aplicações.
* Utiliza dos métodos HTTP para definir a operação que está sendo efetuada.
* Arquitetura de fácil compreensão.

###### Estrutura do REST

![Estrutura REST](assets/img/RESTunnamed.png "Estrutura REST")

Vamos supor que temos um **Client** e do outro lado um **Servidor**, o Client é quem está consumindo o serviço e o servidor é que disponibiliza o serviço. O Client pode ser uma outra aplicação que você está integrando, como por exemplo uma página web, um aplicativo, etc.

Esse Client vai fazer uma requisição HTTP para o Servidor, e esse servidor vai retornar um código de operação (esse código diz o status se ocorreu tudo certo, deu algum erro, etc)  e uma mensagem (pode ser texto puro, json, xml, etc)

> Quando uma aplicação web disponibiliza um conjunto de rotinas e padrões através de serviços web podemos chamar esse conjunto de API.

### API (Application Programming Interface)

* São conjuntos de rotinas documentados e disponibilizados por uma aplicação para que outras aplicações possam consumir suas funcionalidades. 
* Ficou popular com o aumento dos serviços web
* As maiores plataformas de tecnologia disponibilizam APIs pra acessos de suas funcionalidades, algumas delas são: Facebook, Twitter, Telegram, Whatsapp, Github...

###### Principais métodos HTTP

* GET - Solicita a representação de um recurso
* POST - Solicita a criação de um recurso
* DELETE - Solicita a exclusão de um recurso
* PUT - Solicita a atualização de um recurso

### JSON (JavaScript Object Notation)

* Formatação leve utilizada para troca de mensagens entre sistemas
* Usa-se de uma estrutura de chave e valor e também de listas ordenadas
* Um dos formatos mais populares e mais utilizados para troca de mensagens entre sistemas

```json
{
  "nome": "Os Vingadores",
  "ano_lancamento": "2019",
  "personagens": [
    {
      "nome": "Thanos"
    },
    {
      "nome": "Homem de Ferro
    },
    {
      "nome": "Thor"
    }
  ]
}
```

Acima temos novamente um exemplo da estrutura JSON. Sempre inicia e termina com **{}**.

Dentro da estrutura temos o *nome*, que é a chave, e o valor, que no caso é *Os Vingadores*. Em seguida temos o atributo *ano_lançamento* com seu valor *2019*. Veja que nos personagens há uma estrutura de lista, os personagens virou uma lista pois ele tem mais de um personagem.



###### Código de estado

Usado pelo servidor para avisar o client sobre o estado da operação solicitada.

* 1xx - Informativo
* 2xx - Sucesso
* 3xx - Redirecionamento
* 4xx - Erro do Client
* 5xx - Erro do servidor

Para saber mais sobre os outros status code: <https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status>
