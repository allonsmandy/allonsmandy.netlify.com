---
title: Descomplicando o Git e Github
description: Comece a versionar seus códigos de maneira fácil e descomplicada
date: '2020-04-16 12:42:03'
image: assets/img/git.png
category: git
background: '#EA4E32'
---
Olá! (づ｡◕‿‿◕｡)づ

Irei abordar neste primeiro momento os passos iniciais para que você consiga utilizar GIT em conjunto com o GITHUB nos seus projetos, tudo de forma bem simples. No final, você já poderá compartilhar e versionar seus códigos! Para instalar o GIT na sua maquina é bem simples, só clicar [aqui](https://git-scm.com/downloads) ^^ 

Tópicos que irei abordar:

* Configuração na máquina  
* Trabalhando com repositórios
* Enviando para o github
* O que é readme.md?

### CONFIGURAÇÃO NA MAQUINA

Vamos autorizar o Github a acessar nosso computador :3 Para isso, precisaremos de uma chave SSH. Abra o seu terminal e digite o seguinte:

```gitconfig
ssh-keygen -t rsa -b 4096 -C "seu_email@dominio.com"
```

Aperte **ENTER**. 

Em seguida, ele irá pedir uma senha. Sempre que você for enviar algo para seu repositório ou até mesmo baixar, precisará digitar esta senha. Eu prefiro deixar sem :) Irá aparecer uma mensagem dizendo que deu tudo certo. Agora, precisamos adicionar a chave criada ao **ssh-agent**, mas pra isso precisamos ativar primeiro, digite isto: 

```gitconfig
eval $(ssh-agent -s)
```

Agora, digite este comando para que a chave gerada seja adicionada

```gitconfig
ssh-add ~/.ssh/id_rsa
```

Precisamos associar nossa chave criada à nossa conta no github. Digite o seguinte: 

```gitconfig
clip < ~/.ssh/id_rsa.pub
```

(ou você pode utilizar o **cat** ao invés de **clip** caso esteja no linux)

**A chave criada está no seu ctrl+v!!!** Na sua conta criada do github, vá em **Settings ->** **SSH and GBG Keys -> New SSH Key**. No **title**, coloque o nome que você preferir para a sua chave. Em **key**, é só você dar CTRL+V para colar a chave criada. Então é só clicar em Add Key :3

##### VAMOS TESTAR A CONFIGURAÇÃO?

Digite no terminal o seguinte: 

```gitconfig
ssh -T git@github.com
```

O resultado deverá ser este:

```gitconfig
The authenticity of host ‘github.com (207.97.227.239)’ can’t be established. 
# RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
# Are you sure you want to continue connecting (yes/no)?
```

Digite **yes** e aperte ENTER! Pronto, deverá aparecer uma mensagem de sucesso dando um oizinho pra ti :P Para mais informações, só acessar o [tutorial na pagina oficial do github.](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key)

### Trabalhando com repositórios

Repositório é o local onde ficará todos os arquivos do seu projeto, incluindo o histórico dele.

![](https://miro.medium.com/max/908/1*DpM__ToDHd21snqBZFma2A.png)

Vamos enviar um projeto da sua maquina local para sua conta do github. 

Crie uma pasta com o nome que desejar e coloque algum arquivo de exemplo para que possamos enviar para a conta no github. Em seguida, abra nesta pasta o seu terminal, neste caso utilizei o próprio Git Bash, prefiro utilizar ele quando estou no windows! :)

![](https://miro.medium.com/max/412/1*IwXZ7wzVtAkX97-kW9b06w.png)

Para iniciar um novo repositório, digite: 

```gitattributes
git init
```

**Agora seu projeto está sendo monitorado pelo git!!!**

Como eu já tinha criado neste repositório dois arquivos, eu quero salvar estas alterações logo! Para saber quais arquivos foram modificados e precisam ser salvos, é só você digitar:

```gitattributes
git status
```

``![](https://miro.medium.com/max/556/1*ysEc289dpxDO9yPb0CjFAw.png)

Para adicionar arquivos no git, é só digitar: 

```gitattributes
git add index.html
```

 Caso queira adicionar todos de uma vez, digite: 

```gitattributes
git add .
```

![](https://miro.medium.com/max/391/1*mUv7A8KKk0gP4N35_LeyUg.png)

###### **Agora vamos escrever nosso primeiro commit!** 

Commits é como se fossem pontos do nosso projeto que foram modificados, ele é utilizado para que possamos escrever mensagens simples sobre o que foi alterado no projeto. digite: 

```gitattributes
git commit -m “Meu primeiro commit"
```

Vamos ver quais os commits nosso repositorio contém? 

```gitattributes
git log
```

![](https://miro.medium.com/max/467/1*XsDWFG3xI4l647UAVtbM6Q.png)

*(para sair da tela acima, é só digitar a letra q)*

###### Praticando um pouco mais

Ok, vou dar continuidade ao meu projeto ^^

Irei fazer alguma alterações...

Pronto! Agora eu tenho 4 commits! Mas…escrevi um commit errado, o que faço? Simples :) Se quiser alterar o nome do **ÚLTIMO COMMIT**, digite: 

```gitattributes
git commit --amend -m "Corrigindo a mensagem do último commit"
```

![](https://miro.medium.com/max/687/1*VY31GEW2oNkvFHeLu3f3Ng.png)

Se você quiser alterar algum commit mais antigo digite o seguinte comando: 

```gitattributes
git rebase -i HEAD~5
```

Este comando vai mostrar os ultimos 5 commits.

Agora você aperta a tecla **i** para que possas modificar o texto. Altere a palavra **pick** para **reword** no commit que você vai alterar, depois aperte **ESC** e digite `:wq!` Em seguida, vai aparecer para você alterar o nome dele. Digite **i** novamente, altere o nome, aperte **ESC** e digite `:wq!` Pronto :3 Se tiver alguma duvida, veja o gif a seguir (desculpinha pelos erros XD)

![](https://miro.medium.com/max/568/1*l0e4yrvELSh2vu1ZKLUAFQ.gif)

### Enviando para o Github

Precisamos criar um repositório em nossa conta do github que é onde ficará os arquivos do nosso projeto, vá no seu perfil, clique na aba de **Repositories** e em seguida, clique no botão verdinho escrito **New**

![](https://miro.medium.com/max/877/1*fEEUo4EaFMirVJUk6TU_Dw.png)

Em seguida, é só adicionar algumas informações do seu repositório, como o titulo e a descrição. Deixei para que ele ficasse publico, mas se quiser ir trabalhando nele de forma privada, é só marcar a segunda opção escrita **Private**. Iremos entender melhor o que é o **readme.md** mais pra frente, por enquanto, **deixe desmarcado mesmo** ^^ 

Clique no botão **Create Repository**

![](https://miro.medium.com/max/665/1*GT6Y7VpBALgcB5CAlvxG_w.png)

Irá aparece algumas dicas simples que o github mostra de como enviar seus códigos da forma mais simples. Bom, nós já inicializamos em nosso projeto local o git, criamos commits, só falta enviar para o github. Digite o seguinte comando:

```gitattributes
git remote add origin https://github.com/link_do_seu_repositorio
```

Lembre-se que a url que você deverá adicionar é a do repositório que você acabou de criar, ela é a primeira informação que aparece quando você cria um repositório novo no github.

![](https://miro.medium.com/max/864/1*XmAx_cKf7aRsbTaDyOuHXw.png)

Para enviar os arquivos, digite: 

```gitattributes
git push origin master
```

Prontinho!! Seus arquivos estão no github!!

![](https://miro.medium.com/max/922/1*Ic1jZbb6zmAtbcHEkcHhyw.png)

Agora você pode ir repetindo os processos anteriores enquanto trabalha localmente no seu projeto, ao fazer alterações, adicione elas com o comando **git add** e em seguida coloque a mensagem do seu commit. Como seu projeto já está sincronizado com seu repositório no github, agora é só digitar **git push origin master** sem precisar do git remote de novo :)

### O que é o readme.md?

Basicamente, ele é um arquivo de texto, formatado em **Markdown**, no qual você poderá documentar o seu projeto. 

Você pode adicioná-lo diretamente no repositório do github, naquele botão verde escrito **Add a README** como sugere a imagem anterior.

**Porém, se atente a um detalhe importante!!!** Se você alterar os arquivos no seu repositório do github, quando você fizer alterações no seu projeto local e tentar enviar, irá dar conflito. Justamente porque os dois estão diferentes. 

Uma das alternativas é atualizar seu projeto local com o comando `git pull origin master`, ele vai pegar as alterações feitas no repositorio do github e adicionar no seu repositorio local ^^ Porém, vamos criar o readme pela linha de comando :D digite: `touch readme.md`

Seu readme.md foi criado! Digite algo nele e faça os processos anteriores para adiciona-lo no seu github.

1. git add readme.md
2. git commit -m “Adicionei o readme.md”
3. git push origin master

Prontinho :) Só seguir estes passos simples e você já está fazendo uso dos comandos básicos e essenciais do git ^^

###### Qualquer dúvida, é só entrar em contato :)
