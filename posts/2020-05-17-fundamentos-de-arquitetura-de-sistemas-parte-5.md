---
title: Fundamentos de Arquitetura de Sistemas - Parte 5
description: Conceitos de responsividade e experiência do usuário
date: '2020-05-17 12:35:09'
image: assets/img/arquitetura-sistemas-768x512.jpg
category: dev
background: '#b49bf1'
---
#### Tópicos introdutórios sobre UX e UI

###### Briefing, Imersão e Unpack

Um grande projeto começa sempre com um **briefing** bem feito. É no **briefing** que se entende o objetivo de um projeto, e o objetivo é fundamental para entender o porquê daquele trabalho, e se a solução inicialmente imaginada irá gerar o resultado desejado.

Através da **imersão**, procuramos conhecer o problema, o contexto, o publico, os stakeholders, as premissas, as regras de negócio, o histórico, a estratégia, as demandas, as reclamações, etc.

A imersão é a base de conhecimento necessárias para que se comece a delinear uma solução. Geralmente em uma Sprint Design, o primeiro dia é conhecido como "**Unpack**" e é nessa etapa que podemos ouvir várias informações diferentes, e é fundamental para o sucesso do projeto.

Os Desenvolvedores sabem de coisas que os designers não sabem, os stakeholders sabem de coisas que os product manages não sabem, e assim por diante.

Isso literalmente abre todas as hipóteses possíveis para o projeto.

###### Wireframes, Grids e Hierarquia

* Estrutura

Como os objetos devem ser posicionados no layout?

* Conteúdo

Como serão colocados os conteúdos para ajudar na usabilidade e interatividade do usuário?

* Hierarquia informativa

Como o conteúdo será organizado e apresentado?

* Funcionalidade

Como será a usabilidade em cima da interface? Em relação ao Comportamento, como interagir com o usuário? E como ele se comporta?

###### Grids, alinhamento e espaçamento

Com a Grid nós podemos mais facilmente determinar o fluxo de leitura que queremos que o nosso leitor tenha.

Nos ajuda a projetar em proporções harmônicas balanceando os pesos dos elementos gráficos do layout. Permite criar peças mais eficazes. 

> Lembre-se sempre de dar atenção ao espaçamento e alinhamento tanto de textos quanto de elementos da sua interface, focando sempre na responsividade desses elementos.

###### Luzes, sombras, consistência e Padrão

* Luzes e sombras

As luzes e sombras são os recursos que garantem movimento, profundidade, sobreposição e contraste em sua interface. É importante para separar elementos, menus, demarcar áreas importantes e principalmente indicar ações possíveis em seu projeto.

* Consistência e padrão

Lembre-se que o seu projeto deve manter o mesmo tom de redação (UX Writer), o mesmo padrão visual (Design System) e a mesma consistência em diversos devices (UX Design)

#### Cores da interface

Saber usar as cores em um projeto não é uma tarefa fácil, principalmente quando se está iniciando na área de UI Design. Uma dica importante é conhecer um pouco sobre psicologia das cores para entregar algo factível ao cliente. Aqui vamos falar sobre algumas regras e teorias que poderão te ajudar a iniciar e não fazer feito diante de um cliente.

###### Paleta Primária

![](assets/img/paletabg.png)

Estas são as cores mais importantes de todo o sistema. A paleta primária é composta pelas cores principais da marca, tons de cinza e, geralmente, o azul flat. Estas cores, são respectivamente fria, quente e neutra respectivamente.

###### Paleta secundária

![](assets/img/secundaria paleta.jpg)

Além das cores primárias, suas variações, e tons de cinza, todo designer de interfaces precisa, também, escolher as cores que já tem, por padrão, um significado próprio. Por exemplo, a cor vermelha é comumente associada a erro, o verde a sucesso e o amarelo a avisos importantes. Essas cores, chamadas "Cores de Feedback" são essenciais dentro de uma interface porque já trazem um significado implicito que já faz parte da culturua do usuário.

###### Gradiente ou Degradê

A volta do uso do gradiente em 2017 trouxe mais elegância para as interfaces, já que ele vem sendo aplicado de diversas formas, como no redesign de logos como a do Instagram, por exemplo. E também é aplicado de maneira muito forte na UI (User Interface), tanto Web como Mobile.

Além do maior impacto visual, estimulando o usuário, o degradê proporciona sensações de dinamismo e movimento. Visto que as interfaces precisam ser amigáveis e intuitivas, o uso das cores pode ser vista como tentativa de aproximação e melhoria na experiência do usuário.

#### Tipografias

Escolher uma tipografia é como escolher uma roupa, pense no que as roupas podem dizer sobre você: com base no que você veste, as pessoas podem criar conceitos certeiros ou equivocados sobre seu estilo, sua personalidade, situação econômica, idade ou impressão que quer causar.

###### Tipos de fonte

Para simplificar, vamos focar em 4 categorias básicas que serão úteis para entender melhor do assunto e te deixar mais seguro para escolher fontes para projetos, e discutir suas escolhas com outras pessoas.

* Serifadas

Fontes serifadas apresentam pequenos traços ou prolongamentos no final de suas letras. Elas geralmente representam os conceitos de seriedade e tradicionalidade. Ex: Times New Roman

* Sem Serifa (sans-serif)

Estas fontes não tem as linhas extras no final das letras. Por esse motivo, são geralmente consideradas mais modernas e dinâmicas.

![What is the difference between Serif and Sans Serif Fonts - Easil](https://about.easil.com/wp-content/uploads/blog-graphic-02-1024x364-1-800x284.png)

* Cursivas (script)

Abrange as fontes manuscritas ou caligráficas passando por vários estilos diferentes, de elegante, pessoal e exclusivo, a divertido e descontraído.

* Decorativas ou fantasia (display)

Fontes destinadas a chamarem sua atenção. Elas geralmente são mais inusitadas do que práticas e devem ser usadas em pequenas doses, para efeito e propósito específicos.

![Typography 101: What You Need to Know | Typography, Typography ...](https://i.pinimg.com/originals/59/15/99/591599e9294d6c4e1b2260ab70de8cfe.jpg)

###### Tamanho e peso

Se você fez trabalhos para a escola ou faculdade, provavelmente se lembra daquelas regrinhas da ABNT para diagramação de texto, como por exemplo, fonte Times New Roman, tamanho 12, espaçamento entrelinha 1.5. E isto é bom. Para um papel.

O computador não é um papel.

O tamanho padrão de texto de um browser é 16px. Quando lemos um livro ou um trabalho acadêmico, seguramos o papel a uma distância bem próxima dos olhos. Quando mexemos em um computador desktop ou notebook, a distância em relação a tela é muito maior.

Por isto é necessário que o texto esteja em um tamanho confortável em relação a esta distância.

* Peso

O peso é a grossura dos caracteres. Este atributo é definido pela propriedade `font-weight`. Pode ser normal, bold (negrito), bolder (mais negrito) e lighter (mais fino). Se estas opções estiverem disponíveis na fonte que você escolheu, variar entre um valor numérico de 100 a 900. Sendo a correspondência: 

100 - Thin

200 - Extra Light (Ultra Light)

300 - Light

400 - Normal

500 - Medium

600 - Semi Bold (Demi Bold)

700 - Bold

800 - Extra Bold (Ultra Bold)

900 - Black (Heavy)

#### Componentes da Interface do Usuário

###### Iconografia

A palavra ícone vem do grego "eikon" que significa imagem. Muito antes do surgimento do design de experiência, os ícones já eram usados como ferramenta de comunicação. Seu objetivo era comunicar eficientemente uma mensagem através de uma linguagem visual comumente compreendida.

Os primeiros ícones eram imagens de objetos com os quais os usuários estavam familiarizados, como objetos de escritórios e programas de software.

**Como utilizar os ícones na UI?**

* **Mantenha os ícones simples** 

Simplifique o máximo possível e evite elementos desnecessários. Eles devem traduzir de forma simples a informação que precisam passar no ambiente em que serão usados.

![](assets/img/icones.png)

* **Combine os ícones com palavras**

As pessoas processam mais rapidamente recursos visuais do que textos, especialmente quando já conhecem os significados desses símbolos. As palavras esclarecem a mensagem de um ícone e dão às pessoas confiança nos resultados de suas interações. Mesmo para ícones universais, incluir um texto é geralmente mais seguro.

* **Escolha ícones familiares** 

A compreensão de um ícone pelo usuário é baseado em suas experiências anteriores. Ao decidir incluir ícones na sua interface, pesquise primeiro e se familiarize com o que está sendo usado em plataformas do mesmo segmento.

* **Utilize espaçamento** 

Tenha sempre pelo menos 1cm X 1cm no mínimo em torno do ícone para legibilidade e fácil toque em celulares. Quando grandes o suficiente, os ícones funcionam bem em telas mobile onde o espaço é limitado.

* **Consistência** 

Concentre-se em elementos comuns para usar em seus ícones. A primeira coisa a considerar é a paleta de cores. Não mais do que três cores para manter o design clean. Não tenha medo de repetir elementos em todos os seus ícones. Repetição ajuda os usuários a identificar ícones e associá-los a uma ação. O peso e estilo do ícone também são decisivos na hora de manter a consistência.

###### Utilizando imagens

Como diz o ditado, uma imagem vale mais que mil palavras.

As imagens podem ser usadas de maneira eficiente para capturar a atenção do usuário e diferenciar seu produto. Uma única imagem pode transmitir mais para o observador do que um bloco de texto elaborado. Além disso, as imagens podem atravessar as barreiras linguísticas, algo que um texto não conseguiria.

Imagem NÃO pode ser tratada como "decoração", ela tem o poder de fazer ou quebrar a experiência do usuário (UX).

* **Contexto relevante**

Os usuários reagem ao visual mais rápido do que um texto, com isso em mente certifique-se de que o seu conteúdo coincide com os recursos visuais de apoio. Você deve selecionar as imagens que tem uma forte relação com o seu produto e criar um contexto relevante.

* **Relevância**

O objetivo do seu site/aplicativo não é exibir imagens, mas as imagens podem mostrar o propósito do seu produto. Use um número limitado de recursos visuais no design, mas use aquela que realmente vai capturar a atenção do usuário.

###### Guias de estilo - Manuais

* **Manual da marca**

Criado pelo designer, ou uma equipe de designers que criaram a identidade visual, ele determina a correta aplicação da marca em diferentes suportes (gráfico, web, etc)

É um guia que contém todas as informações da marca, fornecendo todas as especificações, recomendações e normas fundamentais para a correta utilização da identidade visual. O objetivo é preservar a uniformidade e coerência de comunicação da marca, mantendo suas propriedades visuais, identificação e reconhecimento da marca independentemente da plataforma em que ela for aplicada.

#### Como aplicar os conceitos em projetos - Processos do mundo real

###### Responsividade

A tecnologia mudou o mundo e continua fazendo constantemente. A internet e o altíssimo nível de desenvolvimento de tecnologias disponíveis transformaram o nosso modo de acessar informações e de nos relacionar com o mundo. O Brasil é um dos países que mais cresce em todo o mundo quando o assunto é uso de Smartphones e, segundo estudo publicado pela Fundação Getúlio Vargas (FGV), alcançou a marca de um Smartphone por habitante em 2017.

Falando do comportamento de consumo, já está comprovado que o futuro do e-commerce terá como principal responsável o crescimento das compras feitas através de celulares - que já até ganhou um nome, o m-commerce (mobile commerce).

Portanto, é importantíssimo para qualquer empresa que tenha como foco oferecer para seu consumidor mais facilidade e conforto no momento da experiência de compra, ter um site adaptado para a tela de seu celular ou para qualquer outra tela que ele deseje utilizar - como é o caso dos tablets. **Isso é responsividade!**

![Entenda como seu site está funcionando - Parte 2: Responsividade ...](https://pw3.com.br/wp-content/uploads/2019/12/responsive-illustration.jpg)

Através da responsividade de um site, que deve levar em conta a usabilidade - ou seja, ter um site realmente adaptado para que as pessoas consigam acessar e navegar nele com tranquilidade usando apenas uma mão, uma empresa pode oferecer para seu cliente:

* Facilidade e conforto de acesso
* Boa experiência de uso
* Satisfação ao usuário
* Fidelização do usuário

###### Acessibilidade

Quando falamos em desenvolver um produto, o foco principal durante o desenvolvimento dele são seus usuários, as pessoas que vão utilizar o sistema com mais frequência. Por esse motivo, fazemos pesquisas com essas pessoas para saber suas dificuldades e receios com relação a tarefa que vai ser executada utilizando o produto. Nessas pesquisas, procuramos entender as tarefas feitas por elas nos colocando em seus lugares e por isso que a empatia é tão importante.

Compreender a acessibilidade significa que podemos construir serviços que funcionam para todos, independentemente da necessidade de seu acesso. Todo projeto exige uma pesquisa para que se conheça o usuário, é importante saber para quem se está projetando, se os usuários possuem, por exemplo, transtorno do espectro autista, se são usuários deficientes auditivos ou surdos, com dislexia, com baixa visão, deficiência física, para usuários de leitores de tela, dentre outros.

###### Prototipagem

![Ferramentas de prototipagem... Prototipagem de website. Qual utilizar?](https://www.chimenti.com.br/wp-content/uploads/2016/08/ferramenta-prototipagem.jpg)

* **Utilidade**

A prototipagem é útil, por exemplo, quando é necessário melhorar a experiência dos usuários (UX), atualizar modelos de negócios e criar novos produtos ou serviços. Em um projeto de longa duração, pode ser refeita ao longo do processo. Depois dos testes, é possível que seja necessário reenquadrar os protótipos e retestá-los.

* **Fidelidade do protótipo**

Um protótipo pode ser desde uma representação conceitual ou análoga da solução (baixa fidelidade), passando por aspectos da ideia, até a construção de algo o mais próximo possível da solução final (alta fidelidade).

![5 dicas para você melhorar os mockups e os protótipos de seu site ...](https://static.imasters.com.br/wp-content/uploads/2015/09/mockups-2.png)

#### Portfólio, clientes e apresentação

O portfólio é uma das principais ferramentas de qualquer profissional liberal. É através dele que podemos mostrar o nosso trabalho a um potencial empregador ou cliente. Além disso, ter um portfólio pode ajudar a passar uma imagem mais profissional.

Lembre-se de inserir em seus cases do portfólio, o desafio trazido pelo cliente, a solução sugerida a ele e também como você chegou a essa solução, além é claro, do projeto finalizado.

Uma boa apresentação garante novos clientes e demonstra seu profissionalismo.
