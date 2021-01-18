import React from "react"
import * as S from "../components/Home/style"
import { Code, Computer, FavoriteBorder, LibraryBooks, Home } from "@styled-icons/material"
import { Html5, Css3, Javascript, Vuejs, Git, Wordpress, ReactLogo, Bootstrap, Figma, Less, Sass, Nodejs } from "@styled-icons/boxicons-logos"
import { Gulp } from "@styled-icons/fa-brands"
import GitHubCalendar from "react-github-calendar"
import ReactTooltip from "react-tooltip"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const Homepage = () => (
  <Layout>
    <SEO title="Home" />
    <S.Section>
      <S.TitleHome><Home />Introdução</S.TitleHome>
      <p>
        Olá! Boas vindas. Eu sou a Amanda (◠‿◠✿)
        Gosto de compartilhar conhecimentos e ideias, por isto criei este espaço para que eu possa escrever sobre
        o que ando estudando e descobrindo. 
        Isto é um pedacinho do que estou a contruir na área da tecnologia, na qual agrega meu trabalho e também uma 
        parte de meus hobbies. Espero que goste e sinta-se a vontade para contribuir e aprender.
      </p>
    </S.Section>
    <S.Section>
      <S.TitleHome><Code /> Work</S.TitleHome>
      <S.Entry>
          <S.TimelineTitle>
            <S.Wrapper>

            <h3>Front end Developer - Instruct</h3>
            <span>fev 2020 - até o momento</span>

            </S.Wrapper>
            <span>
              <strong>Stack: </strong> 
              Vue.js, Nuxt.js, Testes unitários com Jest, Javascript ES6+, 
              Typescript, Graphql, Scss, Git, Design de interfaces com figma.
            </span>
          </S.TimelineTitle>
        </S.Entry>
        <S.Entry>
          <S.TimelineTitle>
            <S.Wrapper>
              <h3>Front end Developer - Freelancer</h3>
              <span>mai 2018 - fev 2020</span>
            </S.Wrapper>
            <span>
              <strong>Stack: </strong> 
              Desenvolvimento front end de sites institucionais e e-commerces, utilizando 
              principalmente Wordpress, HTML, CSS, PHP, Javascript e experimentando tópicos 
              de Experiência do Usuário e usabilidade.
            </span>
          </S.TimelineTitle>
        </S.Entry>
        <S.Entry>
          <S.TimelineTitle>
            <S.Wrapper>
              <h3>Suporte - Secretária municipal da educação</h3>
              <span>ago 2018 - dez 2018</span>
            </S.Wrapper>
            <span>
              <strong>Stack: </strong>
              Manutenção de computadores, cabeamento de redes, configuração em impressoras 
              e roteadores, formatação e backup de computadores, manutenção em laboratórios 
              escolares, planejamento inicial do sistema interno para ajudar nos chamados.
            </span>
          </S.TimelineTitle>
        </S.Entry>
    </S.Section>
    <S.Section>
      <S.TitleHome><LibraryBooks />Estudos</S.TitleHome>
      <S.Entry>
        <S.TimelineTitle>
          <S.Wrapper>
            <h3>UFMG - Engenharia de software moderna</h3>
            <span>2021</span>
          </S.Wrapper>
          <span>
            <strong>Principais disciplinas: </strong>
            Agilidade, Design e Arquitetura, Testes e refactoring
          </span>
        </S.TimelineTitle>
      </S.Entry>
      <S.Entry>
        <S.TimelineTitle>
          <S.Wrapper>
            <h3>Universidade Estácio de Sá - Análise e desenvolvimento de Sistemas</h3>
            <span>2020 - 2023</span>
          </S.Wrapper>
          <span>
            <strong>Principais disciplinas: </strong>
            Organização e arquitetura de computadores, banco de dados, computação em nuvem e web services em linux,
            desenvolvimento web, programação em Python, pensamento computacional, engenharia de software,
            web design, algoritmos, modelagem de sistemas, padrões de projeto
          </span>
        </S.TimelineTitle>
      </S.Entry>
      <S.Entry>
        <S.TimelineTitle>
          <S.Wrapper>
            <h3>IGTI - Bootcamp Devops</h3>
            <span>2020 - 2020</span>
          </S.Wrapper>
          <span>
            <strong>Principais disciplinas: </strong>
            As três maneiras (fluxo, feedback, aprendizagem e experimentação), Docker, 
            Integração e entrega contínua, Testes, Git, Jenkins, Sonar, 
            metodologias ágeis para desenvolvimento de software
          </span>
        </S.TimelineTitle>
      </S.Entry>
      <S.Entry>
        <S.TimelineTitle>
          <S.Wrapper>
            <h3>Free Code Camp - Certifications - Front End Libraries | Responsive Web Design</h3>
            <span>2019</span>
          </S.Wrapper>
          <span>
            <strong>Principais disciplinas: </strong>
            Front End Libraries, Responsive Web Design, Algoritmos e estrutura de dados em javascript
          </span>
        </S.TimelineTitle>
      </S.Entry>
      <S.Entry>
        <S.TimelineTitle>
          <S.Wrapper>
            <h3>EEEP Walter Ramos de Araújo - Ensino técnico de Informática/Software e médio</h3>
            <span>2016 - 2018</span>
          </S.Wrapper>
          <span>
            <strong>Principais disciplinas: </strong>
            Lógica de programação, HTML/CSS, Sistemas operacionais, Javascript, PHP, práticas 
            de software e hardware, redes de computadores, banco de dados, inglês técnico
          </span>
        </S.TimelineTitle>
      </S.Entry>
    </S.Section>
    <S.Section>
      <S.TitleHome><Computer />Tecnologias</S.TitleHome>
      <S.TechSkills>
        <Html5 color="#EA6227" title="HTML5" />
        <Css3 color="#3F93D4" title="CSS3" />
        <Javascript color="#EFD837" title="Javascript" />
        <Vuejs color="#55BE7B" title="VueJs" />
        <Git color="#E94E32" title="Git" />
        <Wordpress color="#117196" title="Wordpress" />
        <ReactLogo color="#45DAF5" title="React" />
        <Bootstrap color="#674197" title="Bootstrap" />
        <Figma color="#4F607D" title="Figma" />
        <Less color="#264B7D" title="Less" />
        <Sass color="#C86194" title="Sass" />
        <Nodejs color="#8CC03D" title="NodeJs (Básico)" />
        <Gulp color="#E54849" title="Gulp" />
      </S.TechSkills>
      <p>
        Gosto de conhecer e aplicar em projetos: 
      </p>
      <ul>
        <li>Automação front-end</li>
        <li>Arquiteturas CSS</li>
        <li>Experiência do Usuário e Desenho de Interfaces</li>
        <li>Todo ecossistema Javascript</li>
        <li>Práticas e algumas tecnologias DevOps</li>
      </ul>
    </S.Section>
    <S.Section>
      <S.TitleHome><FavoriteBorder />Interesses</S.TitleHome>
      <S.DescriptionInteresses>
        No meu tempo livre gosto 
        de <a href="https://blogimaginantes.blogspot.com/" target="_blank">escrever</a>, <a href="https://www.skoob.com.br/usuario/759321-mandy" 
        target="_blank">ler</a>, <a href="https://filmow.com/usuario/allosmandy" target="_blank">assistir filmes e séries</a>, estudar 
        sobre vários assuntos, e claro, ficar de bobeira! (─‿‿─)
      </S.DescriptionInteresses>
    </S.Section>
    <S.AboutGithub>
      <GitHubCalendar username="allonsmandy">
        <ReactTooltip delayShow={10} html />
      </GitHubCalendar>
    </S.AboutGithub>
  </Layout>
)

export default Homepage
