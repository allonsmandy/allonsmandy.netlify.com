---
title: PostgreSQL
description: 'Conceitos e melhores práticas com bancos de dados '
date: '2020-06-24 11:39:47'
image: assets/img/1200px-Postgresql_elephant.svg.png
category: dev
background: '#b49bf1'
---
CONCEITOS E MELHORES PRÁTICAS COM BANCO DE DADOS POSTGRESQL

O que é o postgresSQL?

* Sistema de gerenciamento de banco de dados objeto relacional
* Teve inicio no departamento de ciencia da computaçao na universidade da california em berkeley em 1986
* SGBD Opensource

o postgress tem uma arquitetura multiprocessos

* quando você instala o postgress na sua maquina seja no seu servidor unix no window ou no seu osx, varios processos vão ser iniciados por trás do que a gente ver ali do banco de dados, dentro do proprio servidor, e esses processos eles vão atender diversas tarefas. Então por exemplo, sempre que voce tiver que se autenticar no banco de dados, requisitar o usuario e senha, se conectar, você tem alguns processos que trabalham pra isso entao você tem o processo principal que a gente chamar de postmaster, e tem copias do postmaster que a gente chama de childs, essas copias elas gerenciam as conexoes que entram e saem do banco de dados, tudo que você realizar dentro do banco de dados, qualquer select que você fizer, qualquer inserção de dados, você tem alguns processo de gestões de memórias, é uma memoria especifica dentro do banco de dados, então você tem um processo cuidando de cada uma dessas etapas, dessas tarefas, entao voce tem ai como coloquei 4 processos dememoria, e alem disso você precisa gravar esses dados em disco  que é o que chamaos de storage, entao essa memoria ela trabalha em conjunto pra depois solicitar processos especificos descrita em disco pra que você possa definitivamente nesse storage.
  Não da pra gente entrar em detalhes de cada um desses processos, mas é importante que você saiba que eles existem e nós vamos observar eles quando nós instalarmos o banco e é importante que você saiba que não é somente um simples programa que você abriu e tem uma coisa só acontecendo, nao, existe todo esse keep de processos trabalhando

MODELO CLIENTE/SERVIDOR Você tem processo que acontecem somente na maquina cliente e processos que acontecem dentro do servidor, entao os processos que acontecem dentro do servidor sao os que a gente falou, os que acontecem na maqina de cliente seria uma interface grafica pra fazer uma conexao com o banco, ou o terminal unix pra que ele possa executar alguns comandos, ou uma aplicaão web ou mobile que ele realmente ta mandando comandos pra la, entao é essa relaçao do que ta acontecendo dentro do cliente com o que ta acontecendo dentro do servidor que faz o postgress ter esse modelo cliente/servidor

PRINCIPAIS CARACTERISTICAS

* Opensource
* point in time recovery: se vc de repente tem algum problema no seu banco de dados, uma hora da tarde, vc consegue restaurar o banco de dados até meio dia e 59 com todos os dados que ele tem, entao ele tras essa capacidade
* linguagem procedural com suporte a várias linguagens de programaçao (perl, python, etc)
* views, functions, procedures, triggers
* consultas complexas e common table expressions (CTE)
* suporte a dados geográficos (POSTGIS)
* controle de concorrencia multi-versão

CRIANDO UM CLUSTER pg_createcluster -d /home/postgres/aula 12 meucluster--start
(-d: passa o diretorio onde quero armazenar os dados, localdo meu storage
12: versao
start: inicializa
meucluster: nome do cluster)

LISTAR CLUSTERS pg_lsclusters

MUDAR O USUARIO su - postgres
psql (consigo ou nao me conectar ao banco)

select 1

INSTALAR INTERFACE GRAFICA DO POSTGRESS apt install pgadmin4

pra chamar ele: pgadmin4

OBJETOS E TIPOS DE DADOS DO POSTGRESQL

#### o arquivo postgresql.conf

definição: arquivo onde estao definidas e armazenadas todas as configurações do servidor postgreSQL alguns parametros só podem ser alterados com uma reinicialização do banco de dados
a view pg_settings acessada por dentro do banco de dados guarda todas as configurações atuais

ao acessar a view pg_settings, é possivel visualizar todas as configurações atuais: SELECT name, setting
FROM pg_settings;

ou é possivel usar o comando:

SHOW \[parâmetro];

* localização do arquivo postgresql.conf por padrão encontra-se dentro do diretorio PGDATA definido no momento da inicialização do cluster
  de banco de dados.
  no sistema operacional ubuntu se o postgresql foi instalado a partir do repositorio oficial, o local
  do arquivo postgresql.conf será diferente do diretorio de dados.
  /etc/postgresql/\[versão]/\[nome do cluster]/postgresql.conf
* configurações de conexão LISTEN_ADDRESS: endereço(s) TCP/IP das interfaces que o servidor PostgreSQL vai escutar/liberar conexões
  PORT: a porta TCP que o servidor postgresql vai ouvir, o padrão é 5432
  MAX_CONNECTIONS: número máximo de conexões simultâneas no servidor postgresql
  SUPERUSER_RESERVED_CONNECTIONS: número de conexões (slots) reservadas para conexões ao banco de dados de super usuários
* configurações de autenticação AUTHENTICATION_TIMEOUT: tempo máximo em segundos para o cliente conseguir uma conexão com o servidor
  PASSWORD_ENCRYPTION: algoritmo de criptografia das senhas dos novos usuários criados no banco de dados
  SSL: habilita a conexão criptografada por SSL (somente se o postgresql foi compilado com suporte SSL)
* configurações de memória SHARED_BUFFERS: tamanho da memória compartilhada do servidor postgresql para cache/buffer de tabelas, indices e demais relações
  WORK_MEM: tamanho da memória para operações de agrupamento e ordenação (ORDER BY, DISTINCT, MERGE JOINS)
  MAINTENANCE_WORK_MEM: tamanho da memória para operações como VACUUM, INDEX, ALTER TABLE

#### o arquivo pg_hba.conf

definição: arquivo responsável pelo controle de autenticação dos usuarios no servidor postgresql

* metodos de autenticação TRUST: conexão sem requisição de senha
  REJECT: rejeitar conexões
  MD5: criptografia md5
  PASSWORD: senha sem criptografia
  GSS: generic secutiry service application program interface
  SSPI: security support provider interface - somente para windows
  KRB5: kerberos V5
  IDENT: utiliza o usuario do sistema operacional do cliente via ident server
  PEER: utiliza o usuario do sistema operacional do cliente
  LDAP: ldap server
  RADIUS: radius server
  CERT: autenticação via certificado ssl do cliente
  PAM: pluggable authentication modules. O usuario precisa estar no banco.

#### o arquivo pg_ident.conf

definição: arquivo responsável por mapear os usuários do sistema operacional com os usuarios do  banco de dados. Localizado no diretório de dados PGDATA de sua instalação. A oplão ident deve ser utilizada no arquivo pg_hba.conf

#### comandos administrativos

UBUNTU pg_lsclusters: lista todos os clusters postgresql
pg_createcluster<version><cluster name>: cria um novo cluster postgresql pg_dropcluster<version><cluster>: apaga um cluster postgresql pg_ctlcluster<version><cluster><action>: start, stop, status, restart de clusters postgresql

CENTOS systemctl<action><cluster>

* systemctl start postgresql-11: inicia o cluster postgresql
* systemctl status postgresql-11: mostra o status do cluster postgresql
* systemctl stop postgresql-11: para o cluster postgresql
* systemctl restart postgresql-11: restarta o cluster postgresql

WINDOWS se voce abrir a parte de service voce vai identificar a linha do servico que tem o pg rodando, e no status clicando com o botao direito vc ver todos os comandos q vc pode executar no seu banco de dados

* Binarios do postgresql createdb
  createuser
  dropdb
  dropuser
  initdb
  pg_ctl
  pg_basebackup
  pg_dump / pg_dumpall
  pg_restore
  psql
  reindexdb
  vacuumdb

#### cluster

coleção de banco de dados que compartilham as mesmas configurações (arquivos de configuração) do postgresql e do sistema operacional (porta, listen_address, etc)

#### banco de dados (database)

conjunto de schemas com seus objetos/relações (tabelas, funções, views, etc)

#### schema

conjunto de objetos/relações  (tabelas, funções, views, etc)

\------------------ PG ADMIN ---------------- importante para conexao
1 - liberar acesso ao cluster em postgresql.conf
2 - liberar acesso ao clusters para o usuario do banco de dados em pg_hba.conf
3 - criar/editar usuarios

listen_addresses: quando vc trocar localhost pro * voce ta permitindo que qualquer ip possa se conectar no bd, isso é uma falta de segurança imensa!

127.0.0.1 -p 5432 -U postgres postgres(bd) (padrao)

pg_admin

\-------------------USUÁRIOS--------------

### como administrar usuarios no banco de dados

conceitos users/roles/groups definição: roles (papeis ou funções), users (usuarios) e grupo de usuarios são "contas", perfis de atuação em um banco de dados, que possuem permissões em comum ouespecificas.

nas versoes anteriores do postgresql 8.1 usuarios e roles tinham comportamentos diferentes. atualmente, roles e users são alias
é possivel que roles pertençam a outras roles

### administrando users/roles/groups

CREATE ROLE name \[[WITH] option \[...]]

where option can be: SUPERUSER | NOSUPERUSER
CREATEDB | NOCREATEDB
CREATEROLE | NOCREATEROLE
INHERIT | NOINHERIT
LOGIN | NOLOGIN
REPLICATION | NOREPLICATION
BYPASSRLS | NOBYPASSRLS
CONNECTION LIMIT | CONNLIMINIT
\[ENCRYPTED] PASSWORD 'password'| PASSWORD NULL VALID UNTIL 'timestamp'
IN ROLE role_name \[...] IN GROUP role_name \[...] ROLE role_name \[...] ADMIN role_name \[...] USER role_name \[...] SYSID uid

\-- associação entre roles quando uma role assume as permissões de outra role, necessário a opção INHERIT
no momento de criação da role:
*in role*: passa a pertencer a role informada *role*: a role informada passa a pertencer a nova role

ou após a criaçao da role: GRANT \[role a ser concedida] TO \[role a ssumir as permissões]

\-- associaçao entre roles img :3

\-- desassociar membros entre roles REVOKE \[role que será revogada] FROM \[role que terá suas permissões revogadas] REVOKE professores FROM daniel

\-- alterando uma role ALTER ROLE role_specification \[WITH] option \[...]

where option can b: role create

\-- excluindo uma role DROP ROLE role_specification

\du: mostra todas as roles

\---- administrando acessos (GRANT) ----- definiçao: sao os privilegios de acesso aos objetos do banco de dados

privilegios: --*tabela* --coluna
--sequence
--*databse* --domain
--foreign data wrapper
--foreign server
--*function* --language
--large object
--*schema* --tablespace
--type

\---- Database, schemas e objetos ---- DATABASE

* é o banco de dados.
* grupo de schemas e seus objetos, como tabelas, types, views, funções, entre outros.
* seus schemas e objetos não podem ser compartilhados entre si
* cada database é separado um do outro compartilhando apenas usuarios/roles e configurações do cluster postgresql

SCHEMAS

* é um grupo de objetos, como tabelas, types, views, funções, entre outros
* é possivel relacionar objetos entre diversos schemas
* por exemplo: schema public e schema curso podem ter tabelas com o mesmo nome (teste por exemplo) relacionando-se entre si

uma loja virtual, pode ter um schema referente so aos produtos, aos clientes, etcs

OBJETOS

* são as tabelas, views, funções, types, sequences, entre outros, pertencentes aos schemas

TABELAS, COLUNAS E TIPOS DE DADOS definição: conjuntos de dados dispostos em colunas e linhas referentes a um objetivo comum
as colunas são consideradas como "campos da tabela", como atributos da tabela
as linhas de uma tabela são chaamdas também de tuplas, e é onde estão contidos os valores, os dados.

primary key / chave primaria / pk

FUNÇÕES AGREGADAS....
